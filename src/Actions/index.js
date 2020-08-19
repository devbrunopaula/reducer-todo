import * as actions from './types'

export const addTodo = (todo) => ({
  type: actions.ADD_TODO,
  payload: todo,
})
