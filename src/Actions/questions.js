import { _saveQuestionAnswer } from "../Utils/_DATA"
import { addAnswer } from "./users"
import { updateCurrentUser } from "./currentUser"

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const SAVE_ANSWER = 'SAVE_ANSWER'


export function receiveQuestions (questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  }
}

function questionAddAnswer(authedUser,qid,answer){
  return{
    type: SAVE_ANSWER,
    user: authedUser,
    qid,
    answer 
  }
}

function saveCurrentState(dispatch,authedUser,qid,answer){

  _saveQuestionAnswer({authedUser,qid,answer})
    .then(()=>(dispatch(addAnswer(authedUser,qid,answer))))
    .then(()=>(dispatch(questionAddAnswer(authedUser,qid,answer))))
    .then(()=>(dispatch(updateCurrentUser(qid,answer))))
}

export function saveQuestionAnswer(userID, questionID,option){
  return (dispatch)=>{
    return saveCurrentState(dispatch,userID,questionID,option)
  }
}