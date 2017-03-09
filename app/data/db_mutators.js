import persistStore from './persist_store.js'

function cleanRealm () {
  persistStore.write(() => {
    persistStore.delete(persistStore.objects('AppSettings'))
    persistStore.delete(persistStore.objects('ReqParams'))
    persistStore.delete(persistStore.objects('Tweet'))
  })
}

export const initializeDatabase = function (user) {
  let filter = 'user = \"' + user + '\"'
  let tweetReqParams = persistStore.objects('ReqParams').filtered(filter)
  let appSettings = persistStore.objects('AppSettings')

  // cleanRealm()

  if (tweetReqParams.length === 0) {
    persistStore.write(() => {
      persistStore.create('ReqParams', {
        count: 500,
        since_id: 0,
        max_id: 0,
        user: user
      })
    })
  }

  if (appSettings.length === 0) {
    persistStore.write(() => {
      persistStore.create('AppSettings', {
        num_tweets_stored: 1000,
        mem_threshold: 20
      })
    })
  }
}

export const update_max_id = function (val, user) {
  let filter = 'user = \"' + user + '\"'
  let param = persistStore.objects('ReqParams').filtered(filter)
  persistStore.write((val) => {
    param.max_id = val
  })
}

export const update_since = function (val, user) {
  let filter = 'user = \"' + user + '\"'
  let param = persistStore.objects('ReqParams').filtered(filter)
  persistStore.write((val) => {
    param.since_id = val
  })
}

export const update_count = function (val, user) {
  let filter = 'user = \"' + user + '\"'
  let param = persistStore.objects('ReqParams').filtered(filter)
  persistStore.write((val) => {
    param.count = val
  })
}

export const storeTweets = function (data, user) {
  if (data.length !== 0) {
    data.map((rec, i) => {
      persistStore.write(() => {
        persistStore.create('Tweet', {
          id: rec.id,
          tweet: JSON.stringify(rec),
          user: user
        })
      })
    })
  }
}

export const get_max_id = function (user) {
  let filter = 'user = \"' + user + '\"'
  return persistStore.objects('ReqParams').filtered(filter).max_id
}

export const get_since_id = function (user) {
  let filter = 'user = \"' + user + '\"'
  return persistStore.objects('ReqParams').filtered(filter).since_id
}

export const get_count = function (user) {
  let filter = 'user = \"' + user + '\"'
  return persistStore.objects('ReqParams').filtered(filter).count
}
