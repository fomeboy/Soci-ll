import React, { Component } from 'react'
import { TouchableHighlight, View, Text } from 'react-native'

export default class Settings extends Component {

  constructor (props) {
    super(props)
    this._handlePress = this._handlePress.bind(this)
  }

  _handlePress () {
    this.props.navigator.pop()
  }

  render () {
    return (
      <View>
        <Text>MAis do mems</Text>
        <Text>MAis do mems</Text>
        <TouchableHighlight onPress={this._handlePress}>
          <Text>This are my settings</Text>
        </TouchableHighlight>
      </View>
    )
  }
}
