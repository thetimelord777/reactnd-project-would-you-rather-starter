import { Component } from "react"
import logo from './logo.svg'
import './App.css'
import {connect} from 'react-redux'
import UserMini from './UserMini'

class Login extends Component {
    componentDidMount()
    {
        console.log(this.props)
    }

    render(){
        return(
            <div className='App-header'>
                <div className='Login-message'>
                    <h1>Hello there! Welcome to this react-redux would you rather project!</h1>
                    <p>please sign in to continue</p>
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2 className='Sign-in'>SIGN IN</h2>
                        <ul className='User-list'>
                            {
                                Object.keys(this.props.users).map((keyName, keyIndex) =>(
                                    <UserMini users = {this.props.users} keyName = {keyName} key = {this.props.users[keyName].id} />
                                )
                               )}
                        </ul>
                </div>
            </div>
            )
    }
}

function mapStateToProps ({users, currentUser = null}) {
  return {
      users,
    currentUser,
  }
}

export default connect(mapStateToProps)(Login)