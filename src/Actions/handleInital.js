import { _getUsers , _getQuestions } from "../Utils/_DATA"
import { receiveUsers } from "./users"
import { receiveQuestions } from "./questions"

function inital(dispatch){
    _getUsers().then((users)=> (dispatch(receiveUsers(users))))
    _getQuestions().then((questions)=> (dispatch(receiveQuestions(questions))))
}

export function handleInitialData () {
  return (dispatch) => {
    return inital(dispatch)
  }
}