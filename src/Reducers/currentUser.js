import { RECEIVE_CURRENT_USER, LOGOUT } from '../Actions/currentUser'


export default function users (state = null, action) {
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return{
        ...action.user,
      }
    case LOGOUT:
      return null
    default :
      return state
  }
}