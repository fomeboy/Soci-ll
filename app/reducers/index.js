import { combineReducers } from 'redux'
import status from './status.js'
import account_msg from './account_msg.js'
import sel_account from './sel_account.js'
import accounts from './accounts.js'
import timeline from './timeline.js'

const combinedReducers = combineReducers({
  status,
  account_msg,
  sel_account,
  accounts,
  timeline
})

export default combinedReducers
