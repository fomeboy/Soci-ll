import React from 'react'
import WelcomeContainer from '../containers/WelcomeContainer.js'
import Settings from '../pages/Settings/Settings.js'
import FeedContainer from '../containers/FeedContainer.js'

export default function renderScene (route, navigator) {
  switch (route.id) {
    case 1:
      return <WelcomeContainer navigator={navigator}/>
    case 2:
      return <FeedContainer navigator={navigator}/>
    case 3:
      return <Settings navigator={navigator}/>
    default:
      break
  }
}
