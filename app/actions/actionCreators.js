import { SET_STATUS } from './actionTypes.js'

export function setStatus (status) {
  return {
    type: SET_STATUS,
    status
  }
}
