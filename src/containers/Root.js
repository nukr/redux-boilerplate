import React, { Component } from 'react'
import { Provider } from 'react-redux'
import TodoApp from './TodoApp'
import DevTools from './DevTools'

export default class Root extends Component {
  render () {
    const { store } = this.props
    return (
      <Provider store={store}>
        <div>
          <TodoApp />
          <DevTools />
        </div>
      </Provider>
    )
  }
}

Root.propTypes = {
  store: React.PropTypes.any
}
