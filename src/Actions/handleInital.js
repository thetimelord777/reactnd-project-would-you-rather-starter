import { _getUsers , _getQuestions } from "../Utils/_DATA"
import { receiveUsers } from "./users"
import { receiveQuestions } from "./questions"

function inital(){
    let x = {}
    _getUsers().then((users)=> (x.users = {...users}))
    _getQuestions().then((questions)=> (x.questions = {...questions}))
    return x
}

export function handleInitialData () {
  return (dispatch) => {
    return inital()
      .then(({ users, questions }) => {
        dispatch(receiveUsers(users))
        dispatch(receiveQuestions(questions))
      })
  }
}