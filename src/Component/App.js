import './App.css'
import {Component} from 'react'
import {Route} from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../Actions/handleInital'
import QuestionView from './QuestionsListView'
import QuestionPageView from './QuestionPageView'
import NavBar from "./Nav"
import Login from './Login'
import QuestionAddView from './QuestionAddView'
import LeaderBoardView from './LeaderBoardView'
import NotFound from './404page'
import { ROUTE_HOME, ROUTE_QUESTION_LIST, ROUTE_QUESTION_ADD, ROUTE_LEADER_BOARD, ROUTE_GENERAL_QUESTION_PAGE} from '../Utils/routes'

class App extends Component  {
  
  componentDidMount(){
     this.props.dispatch(handleInitialData())
  }

  render() {
    
    return (
      <div className="App">
        <NavBar/>
        <Route exact path= {ROUTE_HOME} render={()=>(<Login/>)}></Route>
        <Route exact path={ROUTE_QUESTION_LIST} render={()=>(<QuestionView/>)}></Route>

        <Route path={ROUTE_GENERAL_QUESTION_PAGE} render={()=>(
          this.props.currentUser === null ? (<Login/>) 
          : (Object.keys(this.props.questions).includes((window.location.pathname).substring(10)) ?
              (<QuestionPageView/>)
              :
              (<NotFound/>))
        )}> </Route>

        <Route exact path={ROUTE_QUESTION_ADD} render={()=>(<QuestionAddView/>)}></Route>
        <Route exact path={ROUTE_LEADER_BOARD} render={()=>(<LeaderBoardView/>)}></Route>
      </div>
      )
    }
  }

  function mapStateToProps ({questions, currentUser}) {
  return {
      questions,
      currentUser
  }
}

export default connect(mapStateToProps)(App)
