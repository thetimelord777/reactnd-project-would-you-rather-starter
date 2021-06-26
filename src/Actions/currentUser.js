export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER'
export const UPDATE_CURRENT_USER = 'UPDATE_CURRENT_USER'
export const LOGOUT = "LOGOUT"

export function receiveCurrentUser (user) {
  return {
    type: RECEIVE_CURRENT_USER,
    user,
  }
}

export function updateCurrentUser(qid,answer){
  return{
    type: UPDATE_CURRENT_USER,
    qid,
    answer
  }
}
export function logOut (){
  return{
    type: LOGOUT,
    user: null,
  }
}