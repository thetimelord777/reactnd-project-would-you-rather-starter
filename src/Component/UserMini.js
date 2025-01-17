import { Component } from "react"
import {connect} from 'react-redux'
import { receiveCurrentUser } from "../Actions/currentUser"
import { logOut} from '../Actions/currentUser'
import {NavLink} from 'react-router-dom'
import { ROUTE_HOME,ROUTE_QUESTION_LIST } from "../Utils/routes"

class UserMini extends Component {
     
    render() {

        const { users , keyName} = this.props
        
        return keyName ? (
            <NavLink to={
                (window.location.pathname).substring(0) !== '/' ?
                (window.location.pathname).substring(0)
                :
                ROUTE_QUESTION_LIST
            } exact activeClassName = 'active'>

                <li className='User-mini' onClick={()=>(
                (alert("You have succesfully logged in as "+ users[keyName].name +"!"),
                this.props.dispatch(receiveCurrentUser(users[keyName]))
                )
            )}>   

                <img className= 'Avatars' src={users[keyName].avatarURL} alt='sorry'></img>
                <p className='Avatar-username'>{users[keyName].name}</p>
            </li>
            </NavLink>
            
            ) : (
                <div id="User-info">   
                <img src={users.avatarURL} alt='sorry'></img>
                <div>
                        <p>{users.name}</p>
                        <NavLink to={ROUTE_HOME} exact activeClassName = 'active'><p onClick={()=>(
                        (alert("you have successfully logged out!"),
                        this.props.dispatch(logOut()))
                        )}>logout</p></NavLink>
                </div>
                </div>
            )
    }
}

export default connect()(UserMini)