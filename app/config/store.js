import { createStore, combineReducers } from 'redux'
import combinedReducers from '../reducers/index.js'

const store = createStore(combinedReducers)

export default store

