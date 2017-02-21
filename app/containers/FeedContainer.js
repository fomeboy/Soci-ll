import { connect } from 'react-redux'
import { setTimeline, setSelAccount } from '../actions/actionCreators.js'
import Feed from '../pages/Feed/Feed.js'

const mapStateToProps = (state) => {
  return {
    timeline: state.timeline,
    sel_account: state.sel_account,
    status: state.status
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleSetTimeline: (timeline) => {
      dispatch(setTimeline(timeline))
    },
    handleSetSelAccount: (account) => {
      dispatch(setSelAccount(account))
    }
  }
}

const FeedContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Feed)

export default FeedContainer
