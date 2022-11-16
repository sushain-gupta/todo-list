import React from 'react'
import {TodoItem} from './TodoItem'

export default function Todos(props) {
  const containerStyle = {
    "minHeight": "50vh",
  }
  return (
    <div className='container text-center' style={containerStyle}>
        {props.todos.length===0? "There's nothing to do :)":
        props.todos.map((todo) => {
          return <TodoItem todo = {todo} key={todo.sno} onDel={props.del}/>
        })}
    </div>
  )
}
