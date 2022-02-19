import React, { createContext, useContext, useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

const AuthContext = createContext({})

const AuthProvider = ({ children }) => {
  //   const [user, setUser] = useState({})
  const [token, setToken] = useState()
  const [queue, setQueue] = useState({})
  const location = useLocation()

  const navigate = useNavigate()

  const setAdminInfo = (token) => {
    // localStorage.setItem("user", JSON.stringify(user))
    localStorage.setItem('token', JSON.stringify(token))
    setToken(token)
    // setUser(user)
    navigate('/dashboard')
  }

  const adminLogout = () => {
    // localStorage.removeItem("user")
    localStorage.removeItem('token')
    // setUser({})
    setToken()
    navigate('/home')
  }

  const setQueueInfo = (tel) => {
    localStorage.setItem("phone", JSON.stringify(tel))
    setQueue(tel)
    // setUser(user)
    navigate('/queue')
  }

  const queueLogout = () => {
    // localStorage.removeItem("user")
    localStorage.removeItem('queue')
    // setUser({})
    setQueue()
    navigate('/home')
  }

  useEffect(() => {
    // const oldUser = localStorage.getItem("user")

    const oldAdmin = localStorage.getItem('token')
    const oldQueue = localStorage.getItem('queue')
    if (oldAdmin !== null) {
      //   setUser(JSON.parse(oldUser))
      setToken(JSON.parse(oldAdmin))
      if (location.pathname.toString() === '/login') {
        console.log('already login')
        navigate('/dashboard')
      }
    } else if (oldQueue) {
      setToken(JSON.parse(oldQueue))
    } else if (
      oldAdmin === null &&
      location.pathname.toString() === '/dashboard'
    ) {
      console.log('im hacker')
      navigate('/home')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <AuthContext.Provider
      value={{
        queue,
        token,
        setAdminInfo,
        setQueueInfo,
        adminLogout,
        queueLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)

export default AuthProvider
