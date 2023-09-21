import React from 'react'
import Layout from '../components/Layout'

import { useSelector } from 'react-redux'
import { selectUser } from '../redux/userSlice'
function Dashboard() {
    const user=useSelector(selectUser)
    return (
        <>
            <Layout />
           
           
            <div className='main-wrapper'>
                <div className='welcome-container'>
                    <h1> Welcome <span className=' username-color'>{user.username} </span> ! </h1>
           </div>
           <div className='container'>
           <div className='hero_wrapper'>

           <div className='hero_content'>
           <div className='section_title'>
           <h2 className='one'>Excercise is the key to a Healthy Lifestyle</h2>
           <p>Believe it or not, Yoga can give you the power that you could never have thought.</p>
           <div className='hero_btns'>
           <button className='register_btn'>Get Started</button>
           <button className='watch_btn'>Postures</button>
           <button className='class_btn'>Classes</button>
           <button className='Schedule_btn'>Schedule</button>
           </div>
           </div>

          
          
           
          
           </div>
           </div>
           </div>
          

           
           

           </div>
           
          
          
          
          
            
            
        </>
    )
}

export default Dashboard