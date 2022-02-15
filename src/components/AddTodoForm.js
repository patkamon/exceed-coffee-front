import React from 'react'
import { GrAdd } from 'react-icons/gr'
const AddTodoForm = ({ todo, onAddFormSubmit, onAddInputChange }) => {
  console.log(todo)
  return (
    <div>
      <form onSubmit={onAddFormSubmit}>
        <input
          type="text"
          name="todo"
          placeholder="เพิ่มชื่อ"
          value={todo}
          onChange={onAddInputChange}
        />
        <button type="submit">
          <GrAdd />
        </button>
      </form>
    </div>
  )
}

export default AddTodoForm
