import React from 'react'
import { useAuth } from '../contexts/AuthProvider'

const Dashboard = () => {

  const { token } = useAuth()


  return (
    <div>Dashboard

      token equal to {token}

    </div>
  )
}

export default Dashboard