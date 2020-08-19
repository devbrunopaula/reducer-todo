import React, { useReducer } from 'react'
import { addTodo } from './Actions/index'

import './App.css'
import { todoReducer, initialState } from './Reducer/todoReducer'

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState)
  console.log(state)
  return (
    <div className='App'>
      hello
      <button
        onClick={() =>
          dispatch(addTodo({ id: Date.now(), title: 'hello', completed: true }))
        }>
        Todo
      </button>
    </div>
  )
}

export default App
