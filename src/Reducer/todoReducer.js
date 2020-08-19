import * as actions from '../Actions/types'

export const initialState = [
  {
    id: 38929 + Date.now(),
    title: 'Learn about reducers',
    completed: false,
  },
]

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_TODO:
      return [...state, action.payload]
    default:
      return state
  }
}
