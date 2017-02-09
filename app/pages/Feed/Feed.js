import React, { Component } from 'react'
import { NativeModules,
         TouchableHighlight,
         View,
         Image,
         WebView,
         ListView,
         Text } from 'react-native'
import { styles } from './styles.js'

export default class Feed extends Component {

  constructor (props) {
    super(props)

    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})

    this._handlePress = this._handlePress.bind(this)
    this._handleTimeline = this._handleTimeline.bind(this)
    // this._calcTimePassed = this._calcTimePassed.bind(this)
  }

  componentWillMount () {
    var TwitterAPI = NativeModules.TwitterAPI

    TwitterAPI.getHomeTimelineForUser(this.props.sel_account, (error, data) => {
      if (data) {
        this._handleTimeline(data)
      } else {
        console.log(error)
      }
    })
  }

  _isEntity (idxArray, indice) {
    var res = false
    var parsedArray = JSON.parse(idxArray)

    if (parsedArray !== undefined) {
      for (var i = 0; i < parsedArray.length; i = i + 1) {
        if (parsedArray[i].indices[0] === indice) {
          res = true
        }
      }
    }
    return res
  }

  _parseText (text, hashtags, mentions, urls) {
    var renderedText = []
    var tokenized = text.split(' ')
    var isMention
    var isHash
    var isUrl
    var head = 0
    var space = ' '

    for (var i = 0; i < tokenized.length; i = i + 1) {
      if (i === tokenized.length - 1) {
        space = ''
      }
      isMention = tokenized[i].charAt(0) === '@'
      isHash = tokenized[i].charAt(0) === '#'
      isUrl = tokenized[i].substr(0, 4).toUpperCase() === 'HTTP'

      if (!isMention && !isHash && !isUrl) {
        renderedText.push({text: tokenized[i] + space, type: 'text'})
      } else {
        if (isMention) {
          if (this._isEntity(mentions, head)) {
            renderedText.push({text: tokenized[i] + space, type: 'entity'})
          }
        } else if (isHash) {
          if (this._isEntity(hashtags, head)) {
            renderedText.push({text: tokenized[i] + space, type: 'entity'})
          }
        } else if (isUrl) {
          if (this._isEntity(urls, head)) {
            renderedText.push({text: tokenized[i] + space, type: 'entity'})
          }
        }
      }

      head = head + tokenized[i].length + 1
    }
    return renderedText
  }

  _calcTimePassed (timeStr) {
    var now = new Date()
    var then = new Date(timeStr)
    var elapsed = new Date(now - then)
    var hours = elapsed.getHours()
    var mins = elapsed.getMinutes()
    var secs = elapsed.getSeconds()

    if (hours > 24) {
      return elapsed.format('MMDD')
    } else {
      if (hours > 0) {
        return hours + 'h'
      } else if (mins > 0) {
        return mins + 'm'
      } else {
        return secs + 's'
      }
    }
  }

  _handleTimeline (timeline) {
    this.props.handleSetTimeline(timeline)
  }

  _handlePress () {
    //  this.props.navigator.pop()
  }

  render () {
    return (
      <View style={styles.view}>
        {this.props.timeline !== null &&
          <ListView style={styles.listView}
            dataSource = {this.ds.cloneWithRows(this.props.timeline)}
            renderRow = {(tweet) => {
              return (
                <View>
                  <View style={styles.headerView}>
                    {tweet.user.profile_image_url &&
                    <Image
                      source={{uri: tweet.user.profile_image_url}}
                      style={styles.userImg}
                    />
                    }
                    <View style={styles.userView}>
                      <Text style={styles.userName}>{tweet.user.name}</Text>
                      <Text style={styles.screenName}>{'@' + tweet.user.screen_name}</Text>
                      <View style={styles.otherInfo}>
                        <Text style={styles.creationTime}>{this._calcTimePassed(tweet.created_at)}</Text>
                      </View>
                    </View>
                  </View>
                  <View>
                    <Text>
                      {
                        this._parseText(tweet.text, JSON.stringify(tweet.entities.hashtags),
                                        JSON.stringify(tweet.entities.user_mentions),
                                        JSON.stringify(tweet.entities.urls)).map((val, i) => {
                                          return val.type === 'text'
                                            ? (<Text key={i} style={styles.tweetText}>{val.text}</Text>)
                                            : (<Text key={i} style={styles.entityText}>{val.text}</Text>)
                                        })
                      }
                    </Text>
                    { /* {tweet.entities.urls.length > 0 &&
                      tweet.entities.urls.map((url) => {
                        return (
                        <WebView
                          source={{uri: url.expanded_url}}
                          style={styles.urls}
                          automaticallyAdjustContentInsets={false}
                          javaScriptEnabled={true}
                          domStorageEnabled={true}
                          decelerationRate='normal'
                          onNavigationStateChange={this.onNavigationStateChange}
                          onShouldStartLoadWithRequest={this.onShouldStartLoadWithRequest}
                          startInLoadingState={true}
                          scalesPageToFit={true}
                          />
                        )
                      })
                    }
                    */ }
                  </View>
              </View>
              )
            }}
         />
        }
      </View>
    )
  }
}
