import React from 'react'
import { GrAdd } from 'react-icons/gr'
const AddTodoForm = ({
  todo,
  table,
  tel,
  onAddFormSubmit,
  onAddInputChange,
  onAddTableChange,
  onAddTelChange,
}) => {
  console.log(todo)
  return (
    <div className='add-todo-form'>
      <form onSubmit={onAddFormSubmit}>
        <input
          type="text"
          name="todo"
          placeholder="เพิ่มชื่อ"
          value={todo}
          onChange={onAddInputChange}
        />
        <input
          type="text"
          name="todo"
          placeholder="เพิ่มจำนวนโต๊ะ"
          value={table}
          onChange={onAddTableChange}
        />
        <input
          type="text"
          name="todo"
          placeholder="เพิ่มเบอร์"
          value={tel}
          onChange={onAddTelChange}
        />
        <button type="submit">
          <GrAdd />
        </button>
      </form>
    </div>
  )
}

export default AddTodoForm
