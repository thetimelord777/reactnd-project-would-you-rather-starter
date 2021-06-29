import {Component} from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {ROUTE_HOME} from '../Utils/routes'
import LoginQuestionsView from './LoginQuestionsView'

class QuestionView extends Component{

    render() {

        if(this.props.currentUser === null){
            alert('you have to be logged in to enter here.')
            return (<Redirect to={ROUTE_HOME} />)
        }

        return(  
                <div className='center'>{this.props.currentUser !== null && <LoginQuestionsView/>}</div>
                )
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