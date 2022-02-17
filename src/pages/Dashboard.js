import { useState, useEffect } from 'react'
import TodoItem from '../components/TodoItem'
import EditForm from '../components/EditForm'
import AddTodoForm from '../components/AddTodoForm'
import { useAuth } from '../contexts/AuthProvider'
import { Navigate } from 'react-router-dom'

import "./style/Dashboard.css"
import { getQueueList } from '../service/dashboard'


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
  const [table, setTable] = useState('')
  const [tel, setTel] = useState('')

  const [isEditing, setIsEditing] = useState(false)
  const [currentTodo, setCurrentTodo] = useState({})

  const [queueList, setQueueList] = useState({})

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


  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('token'));
    getQueueList(token).then((data)=> {
      setQueueList(data)
      console.log(queueList,'q')
    })

  },[])


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


  
  


  return (
    <div className="dashboard">

      <h1>QUEUE</h1>
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


        <ul className='last-element'>
      {queueList && queueList.map(d => (
              <div className='list'>
              <button classNmae='collapsible' key={d.phone}>{d.name}</button>
              <div className='content'>
                <p>Lorem ipsum...</p> 
                </div>
                </div>))}
      </ul>
      
 
        





    </div>
  )
}

export default Dashboard
