import { StyleSheet } from 'react-native'
import { background_color,
         header_background_color,
         dark_text_color,
         account_msg_color,
         accent_color,
         status_text_font,
         header_font
        } from '../Styles/genericStyle.js'

export const styles = StyleSheet.create({
  view: {
    flex: 1,
    // flexDirection: 'column',
    // alignItems: 'center',
    backgroundColor: background_color
  },
  listView: {
    alignSelf: 'stretch'
  },
  headerView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    borderBottomColor: dark_text_color,
    borderBottomWidth: 1,
    paddingBottom: 5
  },
  /*
  userImg: {
    width: 48,
    height: 48,
    borderRadius: 10,
    marginLeft: 5,
  },
  */
  userNameView: {
    alignSelf: 'stretch',
    alignItems: 'flex-end',
    marginLeft: 5
  },
  userName: {
    // flex: 1,
    fontFamily: header_font,
    fontWeight: '300',
    fontSize: 13,
    marginLeft: 5,
    color: dark_text_color
  },
  screenNameView: {
    alignItems: 'flex-start'
  },
  screenName: {
    fontFamily: header_font,
    fontWeight: '500',
    fontSize: 13,
    color: accent_color
  },
  createdAtView: {
    alignItems: 'flex-end',
    alignSelf: 'stretch',
    marginRight: 10
  },
  creationTime: {
    fontFamily: header_font,
    fontWeight: '300',
    fontSize: 13,
    color: dark_text_color
  },
  textView: {
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 10
  },
  tweetText: {
    fontFamily: status_text_font,
    fontWeight: '500',
    fontSize: 14,
    color: dark_text_color
  },
  twtOptions: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    marginTop: 20,
    marginBottom: 10
  },
  replyImg: {
    width: 16,
    height: 18,
    marginRight: 20
  },
  retweetImg: {
    width: 16,
    height: 18,
    marginRight: 20
  },
  likeImg: {
    width: 16,
    height: 18
  },
  urls: {
    flex: 1,
    marginTop: 20,
    width: 400,
    height: 400
  },
  entityText: {
    fontFamily: status_text_font,
    fontWeight: '500',
    fontSize: 14,
    color: accent_color
  }
})
