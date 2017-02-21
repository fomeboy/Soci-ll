import Realm from 'realm'
import { tweetSchema } from './schemas.js'

let persistStore = new Realm({schema: [tweetSchema]})

export default persistStore
