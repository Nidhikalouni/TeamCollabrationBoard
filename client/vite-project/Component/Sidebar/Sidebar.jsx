import React from 'react'
import './Sidebar.css'
import {Link} from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <Link to ={'/addboard'} style={{textDecoration:"none"}}>
        <div >
           
            <p>Add Board</p>
        </div>
        
        </Link>

        <Link to ={'/listboard'} style={{textDecoration:"none"}}>
        <div >
            
            <p>Board List</p>
        </div>
        
        </Link>
      
    </div>
  )
}

export default Sidebar
