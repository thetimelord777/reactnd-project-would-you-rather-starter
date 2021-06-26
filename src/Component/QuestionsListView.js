import {Component} from 'react'
import {connect} from 'react-redux'
import QuestionItem from './QuestionItem'

class QuestionView extends Component{

    render() {

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
      questions,
      currentUser
  }
}


export default connect(mapStateToProps)(QuestionView)