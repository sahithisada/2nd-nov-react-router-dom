import React from 'react'
import { Link } from "react-router-dom"
import Navigation from './Navigation'

function Login() {
  return (
    <div className='App'>
      <form>
        <h1>Login</h1>
       <div>
        <label>Email</label>
        <input></input>
       </div>
       <div>
        <label>Password</label>
        <input></input>
       </div>
       <div>
        <Link to="/dashboard">Login</Link>
       </div>
      </form>
      <br></br>
      <br></br>
      <Link to="/signup">Signup</Link>
    </div>
  )
}

export default Login
