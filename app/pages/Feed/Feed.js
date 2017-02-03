import React, { Component } from 'react'
import { NativeModules,
         TouchableHighlight,
         View,
         Text } from 'react-native'
import { styles } from './styles.js'

export default class Feed extends Component {

  constructor (props) {
    super(props)
    this._handlePress = this._handlePress.bind(this)
  }

  _handlePress () {
    var TwitterAPI = NativeModules.TwitterAPI

    TwitterAPI.getHomeTimelineForUser('TapTapToink', (error, data) => {
      if (data) {
        console.log('RECEBI DATA')
      } else {
        console.log(error)
      }
    //  this.props.navigator.pop()
    })
  }

  render () {
    return (
      <View style={styles.vew}>
        <Text>Feed do caralho</Text>
        <TouchableHighlight onPress={this._handlePress}>
          <Text>This are my settings</Text>
        </TouchableHighlight>
      </View>
    )
  }
}
