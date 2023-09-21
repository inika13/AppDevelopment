import React from 'react'
import Layout from '../components/Layout'
import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux'
import { selectUser } from '../redux/userSlice'
function Dashboard() {
    const user = useSelector(selectUser);
    const username = user.user && user.user.username ? user.user.username : 'Guest';
    //const user=useSelector(selectUser)
    return (
        <>
            <Layout />
           
           <div className='main-wrapper'>
                <div className='welcome-container'>
                    <h1> Welcome {username} </h1>
           </div>
           <div className='container'>
           <div className='hero_wrapper'>

           <div className='hero_content'>
           <div className='section_title'>
           <h2 className='one'>Excercise is the key to a Healthy Lifestyle</h2>
           <p>Believe it or not, Yoga can give you the power that you could never have thought.</p>
           <div className='hero_btns'>
           <Link to='/Start'><button className='register_btn'>Get Started</button></Link>
           <Link to='/Postures'><button className='watch_btn'>Postures</button></Link>
          <Link to='/Class'><button className='class_btn'>Classes</button></Link>
           <Link to='/Schedule'><button className='Schedule_btn'>Schedule</button></Link>
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