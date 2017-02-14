import { StyleSheet } from 'react-native'
import { background_color, dark_text_color, status_text_font } from '../Styles/genericStyle.js'

export const styles = StyleSheet.create({
  view: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: background_color
  },
  top: {
    flex: 0.5
  },
  logoTouch: {
    flex: 3.5,
    flexDirection: 'column',
    alignItems: 'center'
  },
  logo: {
    flex: 1
  },
  accountMsg: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center'
  },
  accountMsgText: {
    flex: 1,
    textAlign: 'center',
    fontFamily: status_text_font,
    fontWeight: 'normal',
    fontSize: 18,
    color: dark_text_color
  },
  status: {
    flex: 5,
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  statustext: {
    flex: 1,
    textAlign: 'center',
    fontFamily: status_text_font,
    fontWeight: 'normal',
    fontSize: 14,
    color: dark_text_color
  },
  pickerView: {
    flex: 1
  },
  picker: {
    height: 90,
    marginTop: 0,
    paddingTop: 0,
    fontFamily: status_text_font,
    fontWeight: 'normal',
    fontSize: 20,
    color: dark_text_color,
    width: 250
  }
})
