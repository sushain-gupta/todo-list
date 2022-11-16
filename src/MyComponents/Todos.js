import React from 'react'
import {TodoItem} from './TodoItem'

export default function Todos(props) {
  const containerStyle = {
    "minHeight": "48.9vh"
  }
  return (
    <div className='container' style={containerStyle}>
        {props.todos.length===0? <p className="text-center">There's nothing to do :)</p>:
        props.todos.map((todo) => {
          return <TodoItem todo = {todo} key={todo.sno} onDel={props.del}/>
        })}
    </div>
  )
}
