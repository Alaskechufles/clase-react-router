import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
    const navigate = useNavigate()

    const handleLogin = () =>{
        localStorage.setItem("auth","true")
        navigate("/dashboard") 
    }

  return (
    <div>
        <h2>Login</h2>
        <button onClick={handleLogin}>Iniciar Sesión</button>
    </div>
  )
}
