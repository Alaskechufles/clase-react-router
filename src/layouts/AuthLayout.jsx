import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

export default function AuthLayout() {
    const isAuthenticated = localStorage.getItem("auth") === "true"
    if(!isAuthenticated){
        return <Navigate to="/login" replace/>
    }
  return (
    <div>
        <Outlet/>
    </div>
  )
}
