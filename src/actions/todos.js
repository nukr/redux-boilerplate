import * as types from '../constants/ActionTypes'
import fetch from 'isomorphic-fetch'
import uuid from 'node-uuid'

let headers = {
  'X-Meepcloud-Service-Id': '105f9269-c15c-446e-89d0-237dc3e66475',
  'X-Meepcloud-Access-Token': 'e3ec5274-3112-447e-8015-9c014b222756'
}

function requestAddTodo (text) {
  return { type: types.REQUEST_ADD_TODO, text }
}

function receiveAddTodo (text) {
  return { type: types.RECEIVE_ADD_TODO, text }
}

export function addTodo (text) {
  return (dispatch, getState) => {
    dispatch(requestAddTodo(text))
    return fetch('http://localhost:12345/classes/todos', {
      method: 'post',
      headers,
      body: JSON.stringify({
        text
      })
    })
    .then(response => response.json())
    .then(result => dispatch(receiveAddTodo(result)))
  }
}

function requestTodos () {
  return { type: types.REQUEST_TODOS }
}

function receiveTodos (todos) {
  return { type: types.RECEIVE_TODOS, todos }
}

export function fetchTodos () {
  return (dispatch) => {
    dispatch(requestTodos())
    return fetch('http://localhost:12345/classes/todos', {
      method: 'get',
      headers
    })
    .then(response => response.json())
    .then(result => dispatch(receiveTodos(result)))
  }
}

function requestDeleteTodo (id) {
  return { type: types.REQUEST_DELETE_TODO, id }
}

function receiveDeleteTodo (result) {
  return { type: types.RECEIVE_DELETE_TODO, result }
}

export function deleteTodo (id) {
  return (dispatch) => {
    dispatch(requestDeleteTodo(id))
    return fetch(`http://localhost:12345/classes/todos/${id}`, {
      headers,
      method: 'delete'
    })
      .then(response => response.json())
      .then(result => dispatch(receiveDeleteTodo(result)))
  }
}

export function completeTodo (id) {
  return { type: types.COMPLETE_TODO, id }
}
