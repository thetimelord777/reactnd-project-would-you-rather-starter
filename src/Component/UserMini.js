import { Component } from "react"
import {connect} from 'react-redux'
import { receiveCurrentUser } from "../Actions/currentUser"

class UserMini extends Component {
     
    render() {
        const { users , keyName} = this.props
        return(
            <li className= 'User-mini' onClick={()=>(
                this.props.dispatch(receiveCurrentUser(users[keyName]))
            )}>   
                <img className= 'Avatars' src={users[keyName].avatarURL} alt='sorry'></img>
                <p>{users[keyName].name}</p>
            </li>)
    }
}

export default connect()(UserMini)