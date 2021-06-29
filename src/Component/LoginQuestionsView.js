import {Component} from 'react'
import {connect} from 'react-redux'
import QuestionItem from './QuestionItem'

class LoginQuestionsView extends Component{

    state = {
        answered: false,
    }
    render() {

        const questions = this.props.questions
        let answeredQuestions = []
        Object.keys(this.props.currentUser.answers).map((keyName, keyIndex) =>(
            answeredQuestions.push(keyName)
        ))

        return(
        <div id="Questions-view">
            <div className = "Fullbackground" onClick={()=>(this.setState(()=>({
                answered: !this.state.answered
            })))}>
                <h1>{
                        this.state.answered === false ?
                        ('Unanswered Questions')
                         :
                        ('Answered Questions')}
                </h1>
                <ul>
                    {
                        this.state.answered === false ?

                        (
                            Object.keys(questions).map((keyName, keyIndex) =>(
                            answeredQuestions.includes(keyName) ? ('') : (<QuestionItem 
                            key={questions[keyName].id}
                            question ={questions[keyName]}
                            author= {this.props.users[questions[keyName].author]}
                            />)
                        )))

                        :

                        (
                            Object.keys(questions).map((keyName, keyIndex) =>(
                            answeredQuestions.includes(keyName) && (<QuestionItem 
                            key={questions[keyName].id}
                            question ={questions[keyName]}
                            author= {this.props.users[questions[keyName].author]}
                            />)
                        ))
                        )
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


export default connect(mapStateToProps)(LoginQuestionsView)