import { SET_STATUS, SET_ACCOUNT_MSG, SET_SEL_ACCOUNT, SET_ACCOUNTS } from './actionTypes.js'

export function setStatus (status) {
  return {
    type: SET_STATUS,
    status
  }
}

export function setAccountMsg (msg) {
  return {
    type: SET_ACCOUNT_MSG,
    msg
  }
}

export function setSelAccount (sel_account) {
  return {
    type: SET_SEL_ACCOUNT,
    sel_account
  }
}

export function setAccounts (accounts) {
  return {
    type: SET_ACCOUNTS,
    accounts
  }
}
