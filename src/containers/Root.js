import React, { Component } from 'react'
import { Provider } from 'react-redux'
import TodoApp from './TodoApp'
import configureStore from '../store/configureStore'

const store = configureStore()

export default class Root extends Component {
  render () {
    return (
      <Provider store={store}>
        {() => <TodoApp />}
      </Provider>
    )
  }
}
