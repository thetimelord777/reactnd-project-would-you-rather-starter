import './App.css'
import {Component} from 'react'
import {Route} from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../Actions/handleInital'
import NavBar from "./Nav"
import Login from './Login'


class App extends Component  {
  
  componentDidMount(){
     this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <div className="App">
        <NavBar/>
        <Route exact path='/' render={()=>(<Login/>)}></Route>
      </div>
      )
    }
  }

export default connect()(App)
