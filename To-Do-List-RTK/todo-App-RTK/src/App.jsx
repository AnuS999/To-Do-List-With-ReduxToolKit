import { useState } from 'react'
import Todos from './components/Todos'
import AddTodos from './components/AddTodo'

function App() {


  return (
    <>
      <div>This is todo app with redux toolkit</div>
    <AddTodos />
      <Todos />

    </>
  )
}

export default App
