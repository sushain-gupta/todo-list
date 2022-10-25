import React from 'react'

export const TodoItem = ({todo, onDel}) => {
  let TodoItemStyle = {
    background: "#e5e7eb"
  }

  return (
  <div className='container py-3 my-4 rounded-1' style={TodoItemStyle}>
   <h4>{todo.title}</h4>
   <p>{todo.desc}</p>
   <button className="btn btn-sm btn-danger" onClick={() => {onDel(todo)}}>Delete</button>
  </div>
  )
}
