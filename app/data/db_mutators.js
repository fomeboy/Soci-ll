import persistStore from './persist_store.js'

export const initializeDatabase = function () {
  let tweetReqParams = persistStore.objects('ReqParams')

  if (tweetReqParams.length === 0) {
    persistStore.write(() => {
      persistStore.create('ReqParams', {
        id: 1,
        count: 500,
        since_id: 0,
        max_id: 0
      })
    })
  }
}

export const update_max_id = function (val) {
  persistStore.write((val) => {
    persistStore.create('ReqParams', {
      id: 1,
      max_id: val
    },
    true
    )
  })
}

export const update_since = function (val) {
  persistStore.write((val) => {
    persistStore.create('ReqParams', {
      id: 1,
      since_id: val
    },
    true
    )
  })
}

export const update_count = function (val) {
  persistStore.write((val) => {
    persistStore.create('ReqParams', {
      id: 1,
      count: val
    },
    true
    )
  })
}

export const storeTweets = function (data) {
  if (data.length !== 0) {
    data.map((rec, i) => {
      persistStore.write(() => {
        persistStore.create('Tweet', {
          id: rec.id,
          tweet: JSON.stringify(rec)
        })
      })
    })
  }
}

export const get_max_id = function () {
  return persistStore.objects('ReqParams')[0].max_id
}

export const get_since_id = function () {
  return persistStore.objects('ReqParams')[0].since_id
}

export const get_count = function () {
  return persistStore.objects('ReqParams')[0].count
}
