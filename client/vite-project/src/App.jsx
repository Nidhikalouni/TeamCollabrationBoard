
import Navbar from "../Component/Navbar/Navbar"
import Home from "../pages/Home"
import Allboard from "../pages/Allboard"
import CreateBoard from "../pages/CreateBoard"

import React from "react"
import {Routes,Route} from 'react-router-dom'
import Login from "../pages/Login"
  

const App = () => {


  return (
      <>
      <Navbar/>  
      <Routes>
        <Route path='/' element={ <Home/>}/>
         <Route path='/allboard' element={ <Allboard/>}/>
         <Route path='/Login' element={ <Login/>}/>
         <Route path='/createboard' element={ <CreateBoard/>}/>

              
      </Routes>
      
    </>
  )
}

export default App








