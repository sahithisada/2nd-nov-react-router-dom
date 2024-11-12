import React from 'react'
import { Link } from 'react-router-dom'

function Navigation() {
  return (
    <nav>
        <Link to="/">Login</Link>
        <Link to="/signup">Signup</Link>
        <Link to="/leaves">Leaves</Link>
        <Link to="/tasks">Tasks</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/editprofile">EditProfile</Link>
    </nav>
  )
}

export default Navigation
