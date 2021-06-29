import {Component} from 'react'
import {connect} from 'react-redux'
import { ROUTE_HOME } from '../Utils/routes'
import { Redirect} from 'react-router-dom'
import { saveQuestionAnswer } from '../Actions/questions'
class QuestionPageView extends Component{

    render() {

        if(this.props.currentUser === null){
            alert('you have to be logged in to enter here.')
            return (<Redirect to={ROUTE_HOME} />)
        }

        const question = this.props.questions[(window.location.pathname).substring(11)]
        const author = this.props.users[question.author]
        const currentUser = this.props.currentUser
        const oneVotes = (question.optionOne.votes).length
        const twoVotes = (question.optionTwo.votes).length

        return currentUser.answers[question.id] ? 
        (<li className="Question-list-item">
            <h2>{author.name} Asks</h2>
                <div className="Question-item">
                    <img className= 'Author-img' src={author.avatarURL} alt='sorry'></img>    
                    <div>
                        <h3>Would You Rather</h3>
                        <div className="question-options">
                            <div>
                                <button className="button-red">{question.optionOne.text}</button>
                                <p>
                                    {currentUser.answers[question.id]==='optionOne' && <p>Your Vote!</p>}
                                    {oneVotes + ' out of ' + (oneVotes + twoVotes)}
                                </p>
                                <p>{(oneVotes/(oneVotes+twoVotes)*100).toFixed(2)+'%'}</p>
                            </div>
                            <div>
                                <button className='button-blue'>{question.optionTwo.text}</button>
                                <p>
                                    {currentUser.answers[question.id]==='optionTwo' && <p>Your Vote!</p>}
                                    {twoVotes + ' out of ' + (oneVotes + twoVotes)} 
                                </p>
                                <p>{(twoVotes/(oneVotes+twoVotes)*100).toFixed(2)+'%'}</p>
                            </div>
                        </div>
                    </div>
                </div>
                
        </li>)
        :
        (<li className="Question-list-item">
            <h2>{author.name} Asks</h2>
                <div className="Question-item">
                    <img className= 'Author-img' src={author.avatarURL} alt='sorry'></img>    
                    <div>
                        <h3>Would You Rather</h3>
                        <div className="question-options">
                            <button className="button-red" onClick={()=>(
                                this.props.dispatch(
                                    saveQuestionAnswer(currentUser.id,question.id,'optionOne'))
                                    )}>{question.optionOne.text}</button>
                            <button className='button-blue' onClick={()=>(
                                this.props.dispatch(
                                    saveQuestionAnswer(currentUser.id,question.id,'optionTwo'))
                                    )}>{question.optionTwo.text}</button>
                        </div>
                    </div>
                </div>
                
        </li>)
        }
}

function mapStateToProps ({users, questions,currentUser}) {
  return {
      users,
      questions,
      currentUser
  }
}


export default connect(mapStateToProps)(QuestionPageView)
