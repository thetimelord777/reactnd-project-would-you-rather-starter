import { Component } from "react"
import {connect} from 'react-redux'
import { receiveCurrentUser } from "../Actions/currentUser"
import { logOut} from '../Actions/currentUser'

class UserMini extends Component {
     
    render() {
        const { users , keyName} = this.props

        return keyName ? (
            <li className='User-mini' onClick={()=>(
                this.props.dispatch(receiveCurrentUser(users[keyName]))
            )}>   
                <img className= 'Avatars' src={users[keyName].avatarURL} alt='sorry'></img>
                <p className='Avatar-username'>{users[keyName].name}</p>
            </li>
            
            ) : (
                <div>   
                <img className= 'Avatars' src={users.avatarURL} alt='sorry'></img>
                <p>{users.name}</p>
                <p onClick={()=>(
                this.props.dispatch(logOut())
            )}>logout</p>
                </div>
            )
    }
}

export default connect()(UserMini)