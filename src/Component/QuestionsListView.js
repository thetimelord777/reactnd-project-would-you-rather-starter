import {Component} from 'react'
import {connect} from 'react-redux'
import QuestionItem from './QuestionItem'
import {Redirect} from 'react-router-dom'
import {ROUTE_HOME} from '../Utils/routes'

class QuestionView extends Component{

    render() {

        if(this.props.currentUser === null){
            alert('you have to be logged in to enter here.')
            return (<Redirect to={ROUTE_HOME} />)
        }

        const questions = this.props.questions
        let answeredQuestions = []
        Object.keys(this.props.currentUser.answers).map((keyName, keyIndex) =>(
            answeredQuestions.push(keyName)
        ))

        return(
        <div id="Questions-view">
            <div className = "Gbackground" >
                <h1>Unanswered Questions</h1>
                <ul>
                    {
                        Object.keys(questions).map((keyName, keyIndex) =>(
                            answeredQuestions.includes(keyName) ? ('') : (<QuestionItem 
                            key={questions[keyName].id}
                            question ={questions[keyName]}
                            author= {this.props.users[questions[keyName].author]}
                            />)
                        ))
                    }
                </ul>
            </div>
            <div className = "Gbackground">
                <h1>Answered Questions</h1>
                <ul>
                    {
                        Object.keys(questions).map((keyName, keyIndex) =>(
                            answeredQuestions.includes(keyName) && (<QuestionItem 
                            key={questions[keyName].id}
                            question ={questions[keyName]}
                            author= {this.props.users[questions[keyName].author]}
                            />)
                        ))
                    }
                </ul>
            </div>
        </div>)
        }
}

function mapStateToProps ({users, questions,currentUser}) {


  return {
      users,
      questions: Object.fromEntries(Object.entries(questions).sort(([,a],[,b]) => b.timestamp-a.timestamp)),
      currentUser
  }
}


export default connect(mapStateToProps)(QuestionView)