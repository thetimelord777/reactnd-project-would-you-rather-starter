import './App.css'
import {Component} from 'react'
import {Route} from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../Actions/handleInital'
import NavBar from "./Nav"
import Login from './Login'
import { ROUTE_HOME, ROUTE_QUESTION_LIST, ROUTE_QUESTION_ADD, ROUTE_LEADER_BOARD} from '../Utils/routes'


class App extends Component  {
  
  componentDidMount(){
     this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <div className="App">
        <NavBar/>
        <Route exact path= {ROUTE_HOME} render={()=>(<Login/>)}></Route>
        <Route exact path={ROUTE_QUESTION_LIST} render={()=>(<Login/>)}></Route>
        <Route exact path={ROUTE_QUESTION_ADD} render={()=>(<Login/>)}></Route>
        <Route exact path={ROUTE_LEADER_BOARD} render={()=>(<Login/>)}></Route>
      </div>
      )
    }
  }

export default connect()(App)
