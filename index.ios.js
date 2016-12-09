import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { Navigator, StyleSheet, AppRegistry, Text } from 'react-native'
import renderScene from './app/config/routes.js'
import store from './app/config/store.js'

export default class Sociall extends Component {
  render () {
    return (
      <Provider store={store}>
        <Navigator
          style={styles.container}
          initialRoute={{id: 1}}
          renderScene={renderScene}
          configureScene={(route, routeStack) =>
            Navigator.SceneConfigs.HorizontalSwipeJumpFromRight
          }
        />
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

AppRegistry.registerComponent('Sociall', () => Sociall)
