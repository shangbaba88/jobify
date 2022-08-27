import React from 'react'
import { useAppContext } from '../context/appContext'
import { Navigate } from 'react-router-dom'

function ProtectedRoute({ children }) {
  const { user } = useAppContext()
  if (!user) {
    //   跳转到landing
    return <Navigate to="/landing" />
  }

  return children
}

export default ProtectedRoute
