import React, { Component } from 'react'
import { NativeModules,
         NetInfo,
         Linking,
         PickerIOS,
         TouchableHighlight,
         Text,
         View,
         Image,
         StyleSheet } from 'react-native'
import { styles } from './styles.js'
import { ValidStatus } from '../../actions/enums.js'
import { AccountMsgs } from '../../ui_msgs/enums.js'

export default class Welcome extends Component {
  constructor (props) {
    super(props)
    this._handlePress = this._handlePress.bind(this)
    this._handleLinking = this._handleLinking.bind(this)
    this._handleConnectionInfo = this._handleConnectionInfo.bind(this)
    this._handleAccountMsg = this._handleAccountMsg.bind(this)
    this._handleAccounts = this._handleAccounts.bind(this)
    this._handleSelAccount = this._handleSelAccount.bind(this)
  }

  componentWillMount () {
    var AccountsManager = NativeModules.AccountsManager

    AccountsManager.getTwitterAccounts((error, accounts) => {
      if (accounts) {
        this._handleAccountMsg('SEL_TWT_ACCNT')
        this._handleAccounts(accounts)
      } else {
        this._handleAccountMsg(error)
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

  _handleAccountMsg (msg) {
    this.props.handleSetAccountMsg(msg)
  }

  _handleAccounts (accounts) {
    this.props.handleSetAccounts(accounts)
  }

  _handleSelAccount (account) {
    console.log('SELECTIOOO:' + account)
    this.props.handleSetSelAccount(account)
  }

  _handlePress () {
    this.props.navigator.push({id: 2})
  }

  _handleLinking () {
    const url = 'app-settings:'
    Linking.canOpenURL(url).then(supported => {
      if (supported) {
        Linking.openURL(url)
      }
    })
  }

  render () {
    var PickerItemIOS = PickerIOS.Item
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
        <View style={styles.accountMsg}>
          <Text style={styles.accountMsgText}>{AccountMsgs[this.props.account_msg]}</Text>
        </View>
        {this.props.accounts !== null && this.props.sel_account === null &&
        <PickerIOS
          style={styles.pickerView}
          itemStyle={styles.picker}
          selectedValue={this.props.sel_account}
          onValueChange={(acc) => this._handleSelAccount(acc)}
          >
          <PickerItemIOS key={0} value={''} label={''}/>
          { React.Children.map(this.props.accounts, (acc, i) => {
            return <PickerItemIOS key={i + 1} value={acc} label={acc}/>
          })
          }
        </PickerIOS>
        }
        {this.props.sel_account !== null &&
        <Image
          style={styles.settings}
          resizeMode={'contain'}
          source={require('./img/settings.png')}
        />
        }
        <View style={styles.status}>
          <Text style={styles.statustext}>{ValidStatus[this.props.status]}</Text>
        </View>
      </View>
    )
  }
}
