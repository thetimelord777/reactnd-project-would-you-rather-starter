import { Component } from "react"
import {connect} from 'react-redux'
import { receiveCurrentUser } from "../Actions/currentUser"
import { logOut} from '../Actions/currentUser'
import {NavLink} from 'react-router-dom'
import { ROUTE_HOME } from "../Utils/routes"

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
                <div id="User-info">   
                <img src={users.avatarURL} alt='sorry'></img>
                <div>
                        <p>{users.name}</p>
                        <NavLink to={ROUTE_HOME} exact activeClassName = 'active'><p onClick={()=>(
                        this.props.dispatch(logOut())
                        )}>logout</p></NavLink>
                </div>
                </div>
            )
    }
}

export default connect()(UserMini)