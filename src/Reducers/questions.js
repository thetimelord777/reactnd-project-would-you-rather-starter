import { RECEIVE_QUESTIONS, SAVE_ANSWER } from "../Actions/questions"

export default function questions (state = {}, action) {
  switch(action.type) {
    case RECEIVE_QUESTIONS :
      return {
        ...state,
        ...action.questions
      }
    case SAVE_ANSWER:
      return{
        ...state,
        [action.qid]:{
        ...state[action.qid],
        [action.answer]:{
          ...state[action.qid][action.answer],
          votes: [...state[action.qid][action.answer].votes,action.user]
        }
      }
    }
    
    default :
      return state
  }
}