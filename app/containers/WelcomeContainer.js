import { connect } from 'react-redux'
import { setStatus, setAccountMsg, setSelAccount, setAccounts } from '../actions/actionCreators.js'
import Welcome from '../pages/Welcome/Welcome.js'

const mapStateToProps = (state) => {
  return {
    status: state.status,
    account_msg: state.account_msg,
    sel_account: state.sel_account,
    accounts: state.accounts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleSetStatus: (status) => {
      dispatch(setStatus(status))
    },
    handleSetAccountMsg: (msg) => {
      dispatch(setAccountMsg(msg))
    },
    handleSetSelAccount: (account) => {
      dispatch(setSelAccount(account))
    },
    handleSetAccounts: (accounts) => {
      dispatch(setAccounts(accounts))
    }
  }
}

const WelcomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Welcome)

export default WelcomeContainer
