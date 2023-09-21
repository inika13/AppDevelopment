import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Activities from './pages/Activities'
import Settings from './pages/Settings'
import Home from './pages/Home'
import Aboutus from './pages/Aboutus'
import Success from './pages/Success'

function App() {
  return (
   <>
   <Routes>
    <Route exact path='/' element={<Home/>}/>
    <Route exact path='/Login' element={<Login/>}/>
    <Route exact path='/Register' element={<Register/>}/>
    <Route exact path='/Dashboard' element={<Dashboard/>} />
    <Route exact path='/Activities' element={<Activities/>}/>
    <Route exact path='/Settings' element={<Settings/>}/>
    <Route exact path='/Aboutus' element={<Aboutus/>}/>
    <Route exact path='/Success' element={<Success/>}/>
   
 
    
   </Routes>
   
   </>
  )
}

export default App