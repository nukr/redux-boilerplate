import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import MainSection from '../components/MainSection'
import * as TodoActions from '../actions/todos'

class TodoApp extends Component {
  render () {
    const {todos, dispatch} = this.props
    const actions = bindActionCreators(TodoActions, dispatch)
    return (
      <div>
        <MainSection todos={todos} actions={actions} />
      </div>
    )
  }
}

TodoApp.propTypes = {
  todos: PropTypes.array.isRequired,
  dispatch: PropTypes.func
}

function select (state) {
  return {
    todos: state.todos
  }
}

export default connect(select)(TodoApp)