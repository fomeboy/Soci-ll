import { StyleSheet } from 'react-native'
import { background_color,
         dark_text_color,
         account_msg_color,
         light_text_color,
         status_text_font,
         highlight_color} from '../Styles/genericStyle.js'

export const styles = StyleSheet.create({
  view: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: background_color
  },
  listView: {
    alignSelf: 'stretch'
  },
  headerView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5
  },
  userView: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginLeft: 5
  },
  userImg: {
    width: 48,
    height: 48,
    borderRadius: 10,
    marginLeft: 5
  },
  userName: {
    flex: 1,
    fontFamily: status_text_font,
    fontWeight: 'bold',
    fontSize: 14,
    color: dark_text_color
  },
  screenName: {
    flex: 1,
    fontFamily: status_text_font,
    fontWeight: 'normal',
    fontSize: 13,
    color: light_text_color
  },
  otherInfo: {
    flex: 1
  },
  creationTime: {
    fontFamily: status_text_font,
    fontWeight: 'normal',
    fontSize: 12,
    color: light_text_color
  },
  tweetText: {
    fontFamily: status_text_font,
    fontWeight: '500',
    fontSize: 14,
    color: dark_text_color,
    marginLeft: 5,
    marginTop: 0
  },
  urls: {
    flex: 1,
    marginTop: 20,
    width: 400,
    height: 400
  },
  textHighlight: {
    fontFamily: status_text_font,
    fontWeight: '500',
    fontSize: 14,
    color: highlight_color
  }
})
