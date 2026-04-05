import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { removeTodo } from '../featues/todo/todoSlice'
const Todos = () => {
    
    const todes = useSelector(state => state.todes)
    const dispatch = useDispatch()
  return (
    <>
    <div>Todos</div>
    {
        todes.map((todo) =>(
            <li key={todo.id}>
            {todo.text}
            <delete onClick={()=> dispatch(removeTodo(todo.id)) }>Delete</delete> 
            </li>

        ))
    }
    </>
  )
}

export default Todos