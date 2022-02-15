import React from 'react'
import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai'
const EditForm = ({
  currentTodo,
  setIsEditing,
  onEditInputChange,
  onEditFormSubmit,
}) => {
  return (
    <form onSubmit={onEditFormSubmit}>
      <h2>แก้ไขคิว</h2>
      <label htmlFor="editTodo">แก้ไขรายละเอียด </label>
      <input
        type="text"
        name="editTodo"
        placeholder="Edit todo"
        value={currentTodo.text}
        onChange={onEditInputChange}
      />

      <button type="submit">
        <AiOutlineCheck />
      </button>
      <button onClick={() => setIsEditing(false)}>
        <AiOutlineClose />
      </button>
    </form>
  )
}

export default EditForm
