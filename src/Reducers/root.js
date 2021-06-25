import { combineReducers } from 'redux'
import users from './users'
import questions from './questions'
import currentUser from './currentUser'

export default combineReducers({
  users,
  currentUser,
  questions,
})