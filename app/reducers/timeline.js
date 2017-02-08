import { SET_TIMELINE } from '../actions/actionTypes.js'

const timeline = (state = [], action) => {
  if (action.type === SET_TIMELINE) {
    return action.timeline
  } else {
    return state
  }
}

export default timeline
