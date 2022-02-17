import { useState, useEffect } from 'react'
import TodoItem from '../components/TodoItem'
import EditForm from '../components/EditForm'
import AddTodoForm from '../components/AddTodoForm'
import { useAuth } from '../contexts/AuthProvider'
import { Navigate } from 'react-router-dom'
import Nav from '../components/Nav'


const Dashboard = () => {

  const { token } = useAuth()

  // useEffect(() => {
  //   console.log(token)
  //   if (token) {
  //     console.log("you have token")
  //   }else{
  //     console.log(token,'here')
  //     adminLogout();
  //   }
  // },[])

  // return (
    
    
//     <div>Dashboard
//       <div class="topnav">
//   <a class="active" href="/home">STARBOOK</a>
// </div>


   const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos')

    if (savedTodos) {
      return JSON.parse(savedTodos)
    } else {
      return []
    }
  }) 

  const [todo, setTodo] = useState('')
  const [table, setTable] = useState('')
  const [tel, setTel] = useState('')

  const [isEditing, setIsEditing] = useState(false)
  const [currentTodo, setCurrentTodo] = useState({})

  function handleEditInputChange(e) {
    setCurrentTodo({ ...currentTodo, text: e.target.value })
    console.log('Current Todo ', currentTodo)
  }

  function handleEditTableChange(e) {
    setCurrentTodo({ ...currentTodo, table: e.target.value })
    console.log('Current Todo ', currentTodo)
  }
  function handleEditTelChange(e) {
    setCurrentTodo({ ...currentTodo, tel: e.target.value })
    console.log('Current Todo ', currentTodo)
  }
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  function handleInputChange(e) {
    setTodo(e.target.value)
  }

  function handleTableChange(e) {
    setTable(e.target.value)
  }
  function handleTelChange(e) {
    setTel(e.target.value)
  }
  function handleFormSubmit(e) {
    e.preventDefault()

    if (todo !== '') {
      setTodos([
        ...todos,
        {
          id: todos.length + 1,
          text: todo.trim(),
          table: table,
          tel: tel,
        },
      ])
    }

    setTodo('')
    setTable('')
    setTel('')
  }

  function handleDeleteClick(id) {
    const removeItem = todos.filter((todo) => {
      return todo.id !== id
    })

    setTodos(removeItem)
  }

  function handleEditClick(todo) {
    setIsEditing(true)
    setCurrentTodo({ ...todo })
  }

  function handleUpdateTodo(id, updatedTodo) {
    const updatedItem = todos.map((todo) => {
      return todo.id === id ? updatedTodo : todo
    })

    setIsEditing(false)
    setTodos(updatedItem)
  }

  function handleEditFormSubmit(e) {
    e.preventDefault()
    handleUpdateTodo(currentTodo.id, currentTodo)
  }
  console.log('todos is ', todos)

  return (
    <div className="Dashboard">
      <Nav></Nav>
      <h1>SHOWQUEUE</h1>
      {/* <h1>
        ที่เหลือ คือ 1. คนจองซ้ำกันกรณีเพื่อนจองซ้ำกัน 2.
        ดึงข้อมูลเริ่มต้นจาก database มาใช้
      </h1> */}
      {isEditing ? (
        <EditForm
          currentTodo={currentTodo}
          setIsEditing={setIsEditing}
          onEditInputChange={handleEditInputChange}
          onEditTableChange={handleEditTableChange}
          onEditTelChange={handleEditTelChange}
          onEditFormSubmit={handleEditFormSubmit}
        />
      ) : (
        <AddTodoForm
          todo={todo}
          table={table}
          tel={tel}
          onAddFormSubmit={handleFormSubmit}
          onAddInputChange={handleInputChange}
          onAddTableChange={handleTableChange}
          onAddTelChange={handleTelChange}
        />
      )}

      <ul className="todo-list">
        {todos.map((todo) => (
          <TodoItem
            todo={todo}
            onEditClick={handleEditClick}
            onDeleteClick={handleDeleteClick}
          />
        ))}
      </ul>

    </div>
    



  )
}

export default Dashboard
