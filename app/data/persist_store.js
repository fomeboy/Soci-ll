import Realm from 'realm'
import { tweetSchema, tweetReqParamsSchema } from './schemas.js'

let persistStore = new Realm({schema: [tweetSchema, tweetReqParamsSchema]})

export default persistStore
