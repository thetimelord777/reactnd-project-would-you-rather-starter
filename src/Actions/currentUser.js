export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER'

export function receiveCurrentUser (user) {
  return {
    type: RECEIVE_CURRENT_USER,
    user,
  }
}