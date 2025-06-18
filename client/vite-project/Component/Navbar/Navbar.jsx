import React from 'react'
import './Navbar.css'


const Navbar = () => {
 
  const CreateNew = (e)=>{
        
  }
  
  return (
    <div className='navbar'>
      <h1>Team Collabration Board</h1>
      <div className="nav-items">
        
        <a href="/">Home</a>
        <a href="/board">All Board</a>
        <a href="/login">Login</a>
        <a href="/createboard"><button onClick={CreateNew}>Create New Board</button></a>
        
        </div>
    </div>
  )
}

export default Navbar
