import { RECEIVE_CURRENT_USER } from '../Actions/currentUser'

export default function users (state = {}, action) {
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return{
        ...state,
        ...action.user,
      }
    default :
      return state
  }
}