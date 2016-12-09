import { connect } from 'react-redux'
import { setStatus } from '../actions/actionCreators.js'
import Welcome from '../pages/Welcome/Welcome.js'

const mapStateToProps = (state) => {
  return {
    status: state.status
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleSetStatus: (status) => {
      dispatch(setStatus(status))
    }
  }
}

const WelcomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Welcome)

export default WelcomeContainer
