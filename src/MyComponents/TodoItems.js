import React from 'react'
import '../MyComponentsCss/TodoItems.css'

export const TodoItems = ({todo, onDelete}) => {
  let itemContainer={
    backgroundcolor: "yellow"
  }
  return (
    <>
    <section className='TodoItemsContainer'>
    <div className='item-container' style={itemContainer}>
      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>
      <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(todo)}}>Delete</button>
    </div>
    {/* <hr /> */}
    </section>

    </>
  )
}
