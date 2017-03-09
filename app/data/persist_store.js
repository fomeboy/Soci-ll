import Realm from 'realm'
import { tweetSchema, tweetReqParamsSchema, appSettingsSchema } from './schemas.js'

let persistStore = new Realm({schemaVersion: 3, path: 'cacatua.realm', schema: [tweetSchema, tweetReqParamsSchema, appSettingsSchema]})

export default persistStore
