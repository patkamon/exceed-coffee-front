import React from 'react'
import { GrEdit } from 'react-icons/gr'
import { MdRemove } from 'react-icons/md'
import { BiDetail } from 'react-icons/bi'
const TodoItem = ({ todo, onEditClick, onDeleteClick }) => {
  return (
    <li key={todo.id}>
      {todo.text}{' '}
      <button onClick={() => onEditClick(todo)}>
        <GrEdit />
      </button>
      <button onClick={() => onDeleteClick(todo.id)}>
        <MdRemove />
      </button>
      <button>
        {' '}
        <BiDetail />{' '}
      </button>
    </li>
  )
}

export default TodoItem
