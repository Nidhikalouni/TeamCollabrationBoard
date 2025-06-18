import React from 'react'
import './CreateNew.css'
const CreateNew = () => {
  return (
    <div>
        <h1 className='heading'>Welcome User,Create Your New Board</h1>
        <form action="/addboard" className='container'>
         <input  className="input-text"type="text" placeholder='Enter Your Title' name="" id="" /><br/><br/>
          <input className="input-text"type="text" placeholder='Enter Your Description' name="" id="" /><br/><br/>
          <input className="input-text"type="text" placeholder='Enter Your Status' name="" id="" /><br/><br/>
          <button>Add Board</button>

    </form>
      
    </div>
  )
}

export default CreateNew
