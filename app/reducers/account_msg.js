import { SET_ACCOUNT_MSG } from '../actions/actionTypes.js'
import { AccountMsgs } from '../ui_msgs/enums.js'

const account_msg = (state = null, action) => {
  if (action.msg in AccountMsgs && action.type === SET_ACCOUNT_MSG) {
    return action.msg
  } else {
    return state
  }
}

export default account_msg
