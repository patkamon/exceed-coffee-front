import { useState, useEffect } from 'react'
import TodoItem from '../components/TodoItem'
import EditForm from '../components/EditForm'
import AddTodoForm from '../components/AddTodoForm'
import { useAuth } from '../contexts/AuthProvider'
import { Navigate } from 'react-router-dom'

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


  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos')

    if (savedTodos) {
      return JSON.parse(savedTodos)
    } else {
      return []
    }
  })
  const [todo, setTodo] = useState('')
  const [isEditing, setIsEditing] = useState(false)
  const [currentTodo, setCurrentTodo] = useState({})

  function handleEditInputChange(e) {
    setCurrentTodo({ ...currentTodo, text: e.target.value })
    console.log('Current Todo ', currentTodo)
  }

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  function handleInputChange(e) {
    setTodo(e.target.value)
  }

  function handleFormSubmit(e) {
    e.preventDefault()

    if (todo !== '') {
      setTodos([
        ...todos,
        {
          id: todos.length + 1,
          text: todo.trim(),
        },
      ])
    }

    setTodo('')
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
  function handleDetailClick(todo) {}
  console.log(todos)

  return (
    <div
      className="Dashboard
  "
    >
      <h1>SHOWQUEUE</h1>
      <h1>
        {' '}
        ที่เหลือ คือ 1. คนจองซ้ำกันกรณีเพื่อนจองซ้ำกัน 2.
        เพิ่มรายละเอียดของคนที่จอง(เบอร์ จำนวนคน) ~ คล้ายregister 3.
        ดึงข้อมูลเริ่มต้นจาก database มาใช้{' '}
      </h1>
      {isEditing ? (
        <EditForm
          currentTodo={currentTodo}
          setIsEditing={setIsEditing}
          onEditInputChange={handleEditInputChange}
          onEditFormSubmit={handleEditFormSubmit}
        />
      ) : (
        <AddTodoForm
          todo={todo}
          onAddFormSubmit={handleFormSubmit}
          onAddInputChange={handleInputChange}
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
