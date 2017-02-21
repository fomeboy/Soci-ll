export const tweetSchema = {
  name: 'tweet',
  properties: {
    id: 'int',
    tweet: 'string',
    reply: {type: 'bool', default: false},
    retweet: {type: 'bool', default: false},
    like: {type: 'bool', default: false}
  }
}
