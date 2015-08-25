import { ADD_TODO, DELETE_TODO, COMPLETE_TODO } from '../constants/ActionTypes'

export default (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [{
        id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
        completed: false,
        text: action.text
      }, ...state]

    case DELETE_TODO:
      return state.filter(todo => todo.id !== action.id)

    case COMPLETE_TODO:
      return state.map(todo => {
        todo.id === action.id ?
          Object.assign({}, todo, {text: action.text}) :
          todo
      })

    default:
      return state
  }
}
