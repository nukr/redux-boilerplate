import { createStore, applyMiddleware, compose } from 'redux'
import { persistState } from 'redux-devtools'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'
import reducers from '../reducers'
import DevTools from '../containers/DevTools'

const logger = createLogger({
  level: 'info',
  collapsed: true
})

let finalCreateStore = compose(
  applyMiddleware(thunk, logger),
  DevTools.instrument(),
  persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
)(createStore)

export default function configureStore (initialState) {
  const store = finalCreateStore(reducers, initialState)

  if (module.hot) {
    module.hot.accept('../reducers', () =>
                      store.replaceReducer(reducers)
                     )
  }

  return store
}
