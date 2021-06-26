import { RECEIVE_CURRENT_USER,UPDATE_CURRENT_USER , LOGOUT } from '../Actions/currentUser'


export default function users (state = null, action) {
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return{
        ...action.user,
      }
    case UPDATE_CURRENT_USER:
      return{
        ...state,
        answers: {
          ...state.answers,
          [action.qid]: action.answer
        }
      }
    case LOGOUT:
      return null
    default :
      return state
  }
}