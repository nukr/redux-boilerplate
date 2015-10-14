import { createStore, applyMiddleware } from 'redux'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'
import reducers from '../reducers'

const logger = createLogger({
  level: 'info',
  collapsed: true
})

let createStoreWithMiddleware = applyMiddleware(thunk, logger)(createStore)

export default function configureStore (initialState) {
  return createStoreWithMiddleware(reducers, initialState)
}
