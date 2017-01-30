import { SET_ACCOUNTS } from '../actions/actionTypes.js'

const accounts = (state = null, action) => {
  if (action.type === SET_ACCOUNTS) {
    return action.accounts
  } else {
    return state
  }
}

export default accounts
