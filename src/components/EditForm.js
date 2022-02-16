import React from 'react'
import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai'
const EditForm = ({
  currentTodo,
  setIsEditing,
  onEditInputChange,
  onEditTableChange,
  onEditTelChange,
  onEditFormSubmit,
}) => {
  return (
    <form onSubmit={onEditFormSubmit}>
      <h2>แก้ไขคิว</h2>
      <label htmlFor="editTodo">แก้ไขรายละเอียด </label>
      <input
        type="text"
        name="editTodo"
        placeholder="Edit Name"
        value={currentTodo.text}
        onChange={onEditInputChange}
      />
      <input
        type="table"
        name="editTable"
        placeholder="Edit Table"
        value={currentTodo.table}
        onChange={onEditTableChange}
      />
      <input
        type="tel"
        name="editTel"
        placeholder="Edit Tel"
        value={currentTodo.tel}
        onChange={onEditTelChange}
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
