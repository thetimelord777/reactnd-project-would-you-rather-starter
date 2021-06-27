import {Component} from 'react'
import {connect} from 'react-redux'
import LeaderBoardUserCard from './LeaderBoardUser'

class LeaderBoardView extends Component {

    render(){
        let users = this.props.users
        return(
        <div id="LeaderBoard">
            {
            Object.keys(users).map((keyName, keyIndex) => 
            <LeaderBoardUserCard key={keyName} user={users[keyName]} rank={keyIndex}/>)
            }
        </div>)
    }
}

function mapStateToProps ({users}) {
  return {
      users : Object.fromEntries(Object.entries(users).sort(([,a],[,b]) =>( 
      (Object.keys(b.answers).length  + b.questions.length) - (Object.keys(a.answers).length  + a.questions.length))))
    }
}


export default connect(mapStateToProps)(LeaderBoardView)