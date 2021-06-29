export const RECEIVE_USERS = 'RECEIVE_USERS'
export const USER_ADD_ANSWER = 'USER_ADD_ANSWER'
export const USER_ADD_QUESTION = 'USER_ADD_QUESTION'

export function receiveUsers (users) {
  return {
    type: RECEIVE_USERS,
    users,
  }
}

export function addAnswer(authedUser,qid,answer){
  return{
    type: USER_ADD_ANSWER,
    authedUser,
    qid,
    answer,
  }
}

export function userAddQuestion(userID,question){
  return{
    type: USER_ADD_QUESTION,
    userID,
    question,
  }
}