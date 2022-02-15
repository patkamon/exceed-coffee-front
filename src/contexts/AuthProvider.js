import React, { createContext, useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const AuthContext = createContext({})

const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState({})
  const [token, setToken] = useState({})
  const [queue, setQueue] = useState({})

  const navigate = useNavigate()

  const setAdminInfo = (token) => {
    // localStorage.setItem("user", JSON.stringify(user))
    localStorage.setItem("token", JSON.stringify(token))
    setToken(token)
    // setUser(user)
    navigate("/dashboard")
  }

  const adminLogout = () => {
    // localStorage.removeItem("user")
    localStorage.removeItem("token")
    // setUser({})
    setToken({})
    navigate("/home")
  }

  const setQueueInfo = (queue) => {
    // localStorage.setItem("user", JSON.stringify(user))
    localStorage.setItem("queue", JSON.stringify(queue))
    setQueue(queue)
    // setUser(user)
    navigate("/queue")
  }

  const queueLogout = () => {
    // localStorage.removeItem("user")
    localStorage.removeItem("queue")
    // setUser({})
    setQueue({})
    navigate("/home")
  }


  useEffect(() => {
    // const oldUser = localStorage.getItem("user")
    const oldAdmin = localStorage.getItem("token")
    const oldQueue = localStorage.getItem("queue")
    if (oldAdmin) {
      navigate("/dashboard")
    //   setUser(JSON.parse(oldUser))
      setToken(JSON.parse(oldAdmin))
    } else if (oldQueue) {
      navigate("/queue")
      setToken(JSON.parse(oldQueue))
    } else {
      // navigate("/login")
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <AuthContext.Provider value={{queue, token, setAdminInfo, setQueueInfo, adminLogout, queueLogout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)

export default AuthProvider