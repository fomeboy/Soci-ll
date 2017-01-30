import { SET_STATUS } from '../actions/actionTypes.js'
import { ValidStatus } from '../actions/enums.js'

const status = (state = null, action) => {
  if (action.status in ValidStatus && action.type === SET_STATUS) {
    return action.status
  } else {
    return state
  }
}

export default status
