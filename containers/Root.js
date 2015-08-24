import React, { Component } from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import TodoApp from './TodoApp'
import rootReducer from '../reducers'

const store = createStore(rootReducer)

export default class Root extends Component {
  render () {
    return (
      <Provider store={store}>
        {() => <TodoApp />}
      </Provider>
    )
  }
}
