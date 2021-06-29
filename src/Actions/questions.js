import { _saveQuestionAnswer,_saveQuestion, formatQuestion } from "../Utils/_DATA"
import { addAnswer,userAddQuestion } from "./users"
import { updateCurrentUser,currentUserAddQ } from "./currentUser"

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const SAVE_ANSWER = 'SAVE_ANSWER'
export const ADD_QUESTION = 'ADD_QUESTION'


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

function addQuestionAsync(question,dispatch){

  _saveQuestion(question)
  .then(()=>(dispatch(addQuestionAction(formatQuestion(question)))))
  .then(()=>(dispatch(currentUserAddQ(formatQuestion(question)))))
  .then(()=>(dispatch(userAddQuestion(question.author,formatQuestion(question)))))
}

function addQuestionAction (question) {
  return {
    type: ADD_QUESTION,
    question
  }
}

export function addQuestion (question){
  return(dispatch)=>{
    return addQuestionAsync(question,dispatch)
  }
}