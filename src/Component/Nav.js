
import {Component} from 'react'
import { NavLink } from 'react-router-dom'
import {connect} from 'react-redux'
import UserMini from './UserMini'
import { ROUTE_HOME, ROUTE_QUESTION_LIST, ROUTE_QUESTION_ADD, ROUTE_LEADER_BOARD} from '../Utils/routes'


class nav extends Component{

    render() {
        return(
        <nav className="navbar__menu">
            <ul id="navbar__list">
                <li> <NavLink to={ROUTE_QUESTION_LIST} exact activeClassName = 'active'> Question List</NavLink></li>
                <li><NavLink to={ROUTE_QUESTION_ADD} exact activeClassName = 'active'> Add a Question</NavLink></li>
                <li><NavLink to={ROUTE_LEADER_BOARD} exact activeClassName = 'active'>  Leader Board</NavLink></li>
                <li id="Login-view"> <NavLink to={ROUTE_HOME} exact activeClassName = 'active'>
                    {this.props.currentUser === null ? 'Login':
                    <UserMini users={this.props.currentUser}/>
                    }
                    </NavLink></li>
            </ul>
        </nav>)
        }
}

function mapStateToProps ({currentUser = null}) {
  return {
    currentUser,
  }
}


export default connect(mapStateToProps)(nav)