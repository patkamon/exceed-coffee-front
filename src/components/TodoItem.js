import React, { useState } from 'react'
import { GrEdit } from 'react-icons/gr'
import { MdRemove } from 'react-icons/md'
import { BiDetail } from 'react-icons/bi'
const TodoItem = ({ todo, onEditClick, onDeleteClick }) => {
  const [show, setShow] = useState(false)
  return (
    <div className='todo-item'>
    <li key={todo.id}>
      {todo.text}{' '}
      <button onClick={() => onEditClick(todo)}>
        <GrEdit />
      </button>
      <button onClick={() => onDeleteClick(todo.id)}>
        <MdRemove />
      </button>
      <button onClick={() => setShow(!show)}>
        {' '}
        <BiDetail />{' '}
      </button>
      {show ? (
        <div>
          <div> Table: {todo.table}</div>
          <div>TEL: {todo.tel}</div>
        </div>
      ) : null}
    </li>
    </div>
  )
}

export default TodoItem
