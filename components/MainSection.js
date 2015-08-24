import React, { Component, PropTypes } from 'react'

class MainSection extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      text: this.props.text || ''
    }
  }

  handleSubmit (e) {
    if (e.which === 13) {
      const text = e.target.value.trim()
      this.props.actions.addTodo(text)
      this.setState({ text: '' })
    }
  }

  handleChange (e) {
    this.setState({ text: e.target.value })
  }

  handleRemove (id) {
    this.props.actions.deleteTodo(id)
  }

  render () {
    return (
      <div>
        <input
          type='text'
          autoFocus='true'
          placeholder='input'
          value={this.state.text}
          onKeyDown={this.handleSubmit.bind(this)}
          onChange={this.handleChange.bind(this)}
        />
        {this.props.todos.map(todo => {
          return <div>{todo.text} <button onClick={this.handleRemove.bind(this, todo.id)}>x</button></div>
        })}
      </div>
    )
  }
}

MainSection.propTypes = {
  text: PropTypes.string,
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

export default MainSection
