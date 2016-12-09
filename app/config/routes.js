import React from 'react'
import WelcomeContainer from '../containers/WelcomeContainer.js'
import Settings from '../pages/Settings/Settings.js'

export default function renderScene (route, navigator) {
  switch (route.id) {
    case 1:
      return <WelcomeContainer navigator={navigator}/>
    case 2:
      return <Settings navigator={navigator}/>
    default:
      break
  }
}
