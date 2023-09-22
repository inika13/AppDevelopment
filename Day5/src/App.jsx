import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Activities from './pages/Activities'
import Home from './pages/Home'
import Aboutus from './pages/Aboutus'
import Success from './pages/Success'
import Start from './pages/Start'
import Postures from './pages/Postures'
import Class from './pages/Class'
import Schedule from './pages/Schedule'
function App() {
  return (
   <>
   <Routes>
    <Route exact path='/' element={<Home/>}/>
    <Route exact path='/Login' element={<Login/>}/>
    <Route exact path='/Register' element={<Register/>}/>
    <Route exact path='/Dashboard' element={<Dashboard/>} />
    <Route exact path='/Activities' element={<Activities/>}/>
    <Route exact path='/Aboutus' element={<Aboutus/>}/>
    <Route exact path='/Success' element={<Success/>}/>
    <Route exact path='/Start' element={<Start/>}/>
    <Route exact path='/Postures' element={<Postures/>}/>
    <Route exact path='/Class' element={<Class/>}/>
    <Route exact path='/Schedule' element={<Schedule/>}/>
    

   
 
    
   </Routes>
   
   </>
  )
}

export default App