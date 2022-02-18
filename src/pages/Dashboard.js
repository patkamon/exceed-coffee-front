import { useState, useEffect } from 'react'
import TodoItem from '../components/TodoItem'
import EditForm from '../components/EditForm'
import AddTodoForm from '../components/AddTodoForm'
import { useAuth } from '../contexts/AuthProvider'
import { Navigate } from 'react-router-dom'
import Nav from '../components/Nav'


import "./style/Dashboard.scss"
import { getQueueList, removeQueue } from '../service/dashboard'
import Collapsible from 'react-collapsible'
import { getObjForm } from '../utils/form'
import { queueLogin } from '../service/auth'


const Dashboard = () => {

 
  const [token, setToken] = useState()

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

  const [queueList, setQueueList] = useState()

  function handleEditInputChange(e) {
    setCurrentTodo({ ...currentTodo, text: e.target.value })
    // console.log('Current Todo ', currentTodo)
  }

  function handleEditTableChange(e) {
    setCurrentTodo({ ...currentTodo, table: e.target.value })
    // console.log('Current Todo ', currentTodo)
  }
  function handleEditTelChange(e) {
    setCurrentTodo({ ...currentTodo, tel: e.target.value })
    // console.log('Current Todo ', currentTodo)
  }
  // useEffect(() => {
  //   localStorage.setItem('todos', JSON.stringify(todos))
  // }, [todos])
  const {adminLogout, setAdminInfo} = useAuth()
  
  const [error, setError] = useState()


  useEffect(() => {
    const checkToken = setInterval(()=>{
      const token_t = JSON.parse(localStorage.getItem("token"))
      if (token_t === null){
        console.log('hi')
        setToken()
        adminLogout()
      }
    }
    ,10000)
  },[])


  useEffect(() => {
    const token_t = JSON.parse(localStorage.getItem("token"))
    setToken(token_t)
    getQueueList(token_t).then((data)=> {
      setQueueList(data)
    }).catch((e) =>{
      console.log(e)
      setToken()
      adminLogout()
    })

  },[queueList])


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


  function clickBTN(ob){
    console.log(ob.target.value)
    if (window.confirm(`Are you sure to delete queue: ${ob.target.value}`)) {
     
      removeQueue(token,ob.target.value)
      getQueueList(token).then((data)=> {
        setQueueList(data)
      })
      console.log('deleted')

    } else {
      console.log('cancel')
    }

  }

  function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }
  

  function handleSubmit(e) {
    e.preventDefault()
    const data = getObjForm(e.target)
    console.log(data)

    // wating for backend
    queueLogin(data)
    .then((data) => {
      console.log(data)
    }).catch((e)=>{
      if (e.response.status=== 406){
        setError('this phone number already in queue!')
      }
    })

}



const [show, setShow] = useState(true)

const controlNavbar = () => {
  if (window.scrollY > 100){
    setShow(false)
  } else {
    setShow(true)
  }
}

  useEffect(() => {
    window.addEventListener('scroll',
    controlNavbar)
    return () => {
      window.removeEventListener('scroll',controlNavbar)
    }
  },[])


  return (

    <div className="dashboard">
    {show && <Nav className='nav'></Nav>}
      <h1 className='dashboard-title'>QUEUE</h1>
      {/* <h1>
        ที่เหลือ คือ 1. คนจองซ้ำกันกรณีเพื่อนจองซ้ำกัน 2.
        ดึงข้อมูลเริ่มต้นจาก database มาใช้
      </h1> */}
      {/* {isEditing ? (
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

      </ul> */}

        <div className='last-element'>
      {queueList && queueList.map(d => (
              <div className='list'>

                <Collapsible className='btn-col' key={d.phone} trigger={d.name}><p>
                QUEUE NO. {d.queue_number} NAME: {d.name} PHONE: {d.phone} AMOUNT: {d.willsit}
      </p></Collapsible>
                <input type='button' className='remove-btn' key={d.queue_number} onClick={clickBTN} value={d.queue_number}></input>
                <p className='close'>X</p>


                </div>))}
      </div>
      
        

      <button className="open-button" onClick={openForm}>Add queue</button>

<div className="form-popup" id="myForm">
  <form action="/action_page.php" autocomplete='off' onSubmit={handleSubmit} className="form-container">
    <h2>Add queue</h2>

    <input className='customer-name-d' name='name' type='text' placeholder='Name' ></input><br/>
        <input className='phone-number-d' name='phone' type='tel' placeholder='ex.088-777-3333'pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required/><br/> 

        <input className='num-seat-d' name='willsit'  type="number" min="1" max="8" placeholder='seat' required></input>
        <button className='submit-btn' type='submit' hidden>Submit</button>
        


      <h5>{error}</h5>
    <button type="submit" className="btn">Add</button>
    <button type="button" className="btn cancel" onClick={closeForm}>Close</button>
  </form>
  </div>
        



        <div className='last'></div>

    </div>
    



  )
}

export default Dashboard
