import {Component} from 'react'
import {connect} from 'react-redux'
import { ROUTE_HOME } from '../Utils/routes'
import { Redirect} from 'react-router-dom'
import LeaderBoardUserCard from './LeaderBoardUser'

class LeaderBoardView extends Component {

    render(){
        let users = this.props.users

        if(this.props.currentUser === null){
            alert('you have to be logged in to enter here.')
            return (<Redirect to={ROUTE_HOME} />)
        }

        return(
        <div id="LeaderBoard">
            {
            Object.keys(users).map((keyName, keyIndex) => 
            <LeaderBoardUserCard key={keyName} user={users[keyName]} rank={keyIndex}/>)
            }
        </div>)
    }
}

function mapStateToProps ({users, currentUser}) {
  return {
      users : Object.fromEntries(Object.entries(users).sort(([,a],[,b]) =>( 
      (Object.keys(b.answers).length  + b.questions.length) - (Object.keys(a.answers).length  + a.questions.length)))),
      currentUser
    }
}


export default connect(mapStateToProps)(LeaderBoardView)