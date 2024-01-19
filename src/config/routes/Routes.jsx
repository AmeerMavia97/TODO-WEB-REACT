import React from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Login from '../../Screens/Login/Login'
import Register from '../../Screens/Register/Register'
import Home from '../../Screens/Home/Home'

const Routers = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/Register' element={<Register/>}/>
        <Route path='/Home' element={<Home/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default Routers