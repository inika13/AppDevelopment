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
import Events from './pages/Events'
import Class from './pages/Class'
import Schedule from './pages/Schedule'
import Trainers from './pages/Trainers'
import Join from './pages/Join'
import Applied from './pages/Applied'
import Payment from './pages/Payment'

import Explore from './pages/Explore'
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
    <Route exact path='/Explore' element={<Explore/>}/>
     <Route exact path='/Events' element={<Events/>}/>
     <Route exact path='/Class' element={<Class/>}/>
     <Route exact path='/Schedule' element={<Schedule/>}/>
     <Route exact path='/Trainers' element={<Trainers/>}/>
    <Route exact path='/Join' element={<Join/>}/>
     <Route exact path='/Applied' element={<Applied/>}/>
    <Route exact path='/Payment' element={<Payment/>}/>
    </Routes>
   
   </>
  )
}

export default App