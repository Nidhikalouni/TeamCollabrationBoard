import React, { useEffect, useState } from 'react'
import './ListBoard.css'
const ListBoard = () => {


  const[allboard,setAllBoard] = useState([]);

  const fetchInfo = async()=>{
    await fetch('http://localhost:4000/allboard')
    .then((res)=>res.json())
    .then((data)=>{setAllBoard(data)});
  }

  useEffect (()=>{
    fetchInfo();
  },[])

  const remove_board = async(id)=>{
    await fetch('http://localhost:4000/removeboard',{
      method:'POST',
      headers:{
        Accept:'application/json',
        'Content-Type':'application/json',
      },
      body:JSON.stringify({id:id})
    })
    await fetchInfo();
  }

  return (
    <div className='list-board'>
      <h1>All Board List</h1>
      <hr/>
      <div className='list-board-item' >
       
        <p>Title</p>
        <p>Description</p>
        <p>status</p>
        <p>priority</p>
         <p>assigned to</p>
         <p>due date</p>
         <p>belongs to board</p>
      </div>
      <div >
        <hr/>
        {allboard.map((board,index)=>{
          return <>
         
          <div key={index} >
            
            <p>{board.Title}</p>
            <p>{board.Description}</p>
            <p>{board.status}</p>
            <p>{board.priority}</p>
            <p>{board.assignedTo}</p>
            <p>{board.assignedTo}</p>
            <p>{board.dueDate}</p>
            <p>{board.belongsToBoard}</p>
            
          </div>
          <hr />
          </>
         
        })}
      </div>
    </div>
  )
}

export default ListBoard
