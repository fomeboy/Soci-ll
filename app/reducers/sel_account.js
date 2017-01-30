import { SET_SEL_ACCOUNT } from '../actions/actionTypes.js'

const sel_account = (state = null, action) => {
  if (action.type === SET_SEL_ACCOUNT) {
    return action.sel_account
  } else {
    return state
  }
}

export default sel_account
