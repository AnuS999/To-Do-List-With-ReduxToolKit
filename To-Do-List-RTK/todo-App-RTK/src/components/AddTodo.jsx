import { use, useState } from "react";
import { useDispatch } from "react-redux";
import {addTodo} from '../featues/todo/todoSlice'

function AddTodos (){
const [todo,setTodo] = useState('')
const dispatch = useDispatch()

const addTodoHandler = (e)=>{
e.preventDefault()
dispatch(addTodo(todo))
setTodo('')
}
    return(
<>
<form onSubmit={addTodoHandler}>
<div>Add Todo</div>
<input type="text" placeholder="Add Todo" value={todo} onChange={(e) => setTodo(e.target.value)} />
<button type="submit">Add</button>
</form>
</>
    )
}

export default AddTodos