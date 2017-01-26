import { StyleSheet } from 'react-native'
import { backgroundGray, statusTextGray, statusTextFont } from '../Styles/genericStyle.js'

export const styles = StyleSheet.create({
  view: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: backgroundGray
  },
  top: {
    flex: 1
  },
  settings: {
    flex: 1
  },
  logoTouch: {
    flex: 4,
    flexDirection: 'column',
    alignItems: 'center'
  },
  logo: {
    flex: 1
  },
  status: {
    flex: 4,
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  statustext: {
    flex: 1,
    textAlign: 'center',
    fontFamily: statusTextFont,
    fontSize: 20,
    color: statusTextGray
  }
})
