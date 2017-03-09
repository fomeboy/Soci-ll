export const tweetSchema = {
  name: 'Tweet',
  primaryKey: 'id',
  properties: {
    id: 'int',
    tweet: 'string',
    reply: {type: 'bool', default: false},
    retweet: {type: 'bool', default: false},
    like: {type: 'bool', default: false},
    user: {type: 'string', default: false}
  }
}

export const tweetReqParamsSchema = {
  name: 'ReqParams',
  properties: {
    count: 'int',
    since_id: 'int',
    max_id: 'int',
    user: 'string'
  }
}

export const appSettingsSchema = {
  name: 'AppSettings',
  properties: {
    num_tweets_stored: 'int',
    mem_threshold: 'int'
  }
}
