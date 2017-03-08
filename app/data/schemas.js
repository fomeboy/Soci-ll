export const tweetSchema = {
  name: 'Tweet',
  primaryKey: 'id',
  properties: {
    id: 'int',
    tweet: 'string',
    reply: {type: 'bool', default: false},
    retweet: {type: 'bool', default: false},
    like: {type: 'bool', default: false}
  }
}

export const tweetReqParamsSchema = {
  name: 'ReqParams',
  primaryKey: 'id',
  properties: {
    id: 'int',
    count: 'int',
    since_id: 'int',
    max_id: 'int'
  }
}
