import React, { Component } from 'react'
import { NativeModules, NetInfo, TouchableHighlight, Text, View, Image, StyleSheet } from 'react-native'
import { styles } from './styles.js'
import { ValidStatus } from '../../actions/enums.js'

export default class Welcome extends Component {
  constructor (props) {
    super(props)
    this._handlePress = this._handlePress.bind(this)
    this._handleConnectionInfo = this._handleConnectionInfo.bind(this)
  }

  componentWillMount () {
    var AccountsManager = NativeModules.AccountsManager

    AccountsManager.getTwitterAccounts((error, accounts) => {
      if (error) {
        console.log('Error Javascript:' + error)
      } else {
        console.log('Accounts: ' + JSON.stringify(accounts))
      }
    })

    NetInfo.addEventListener('change', this._handleConnectionInfo)
    NetInfo.fetch().done((reach) => {
      this._handleConnectionInfo(reach)
    })
  }

  componentWillUnmount () {
    NetInfo.removeEventListener('change')
  }

  _handleConnectionInfo (connectionInfo) {
    this.props.handleSetStatus(connectionInfo)
  }

  _handlePress () {
    this.props.navigator.push({id: 2})
  }

  render () {
    return (
      <View style={styles.view}>
        <View style={styles.top}/>
        <TouchableHighlight underlayColor={'#ffffff'} style={styles.logoTouch} onPress={this._handlePress}>
            <Image
              style={styles.logo}
              resizeMode={'contain'}
              source={require('./img/logo.png')}
            />
        </TouchableHighlight>
        <Image
          style={styles.settings}
          resizeMode={'contain'}
          source={require('./img/settings.png')}
        />
        <View style={styles.status}>
          <Text style={styles.statustext}>{ValidStatus[this.props.status]}</Text>
        </View>
      </View>
    )
  }
}
