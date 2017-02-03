import React from 'react'
import WelcomeContainer from '../containers/WelcomeContainer.js'
import Settings from '../pages/Settings/Settings.js'
import Feed from '../pages/Feed/Feed.js'

export default function renderScene (route, navigator) {
  switch (route.id) {
    case 1:
      return <WelcomeContainer navigator={navigator}/>
    case 2:
      return <Feed navigator={navigator}/>
    case 3:
      return <Settings navigator={navigator}/>
    default:
      break
  }
}
