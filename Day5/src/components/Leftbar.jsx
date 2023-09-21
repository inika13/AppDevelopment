import React from 'react'
import logo from '../assets/logo.jpg'
import dashboards from '../assets/dashboards.jpg'
import activity from '../assets/activity.jpg'
import settings from '../assets/settings.png'
import out from '../assets/out.jpg'
import about from '../assets/about.jpg'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { logout } from '../redux/userSlice';

function Leftbar() {

    const dispatch= useDispatch();
    const navigate=useNavigate();

const dashboardHandler = ()=>{
    navigate('/Dashboard')
}
const settingsHandler = ()=>{
    navigate('/Settings')
}
const usersHandler = () =>{
    navigate('/Activities')
}
const aboutusHandler=()=>{
    navigate('/Aboutus')
}


const logoutHandler = () =>{
    dispatch(logout())
    navigate('/')
}
    return (
        <>
            
            <div className='left-bar'>
            <div className='logoContainer'>
            <img src={logo} alt='logo' className='logo'/>
            <h2 className='title'> GROOVE </h2>
                <div className='left-bar-container'>
                    <button className='left-bar-button nav-btn' onClick={dashboardHandler}>
                    <img src={dashboards} alt='dashboards' className='icons'/>
                       <div className='t1'> Home </div>
                    </button>
                    <button className='left-bar-button nav-btn' onClick={usersHandler}>
                    <img src={activity} alt='activity' className='icons'/>
                        <div className='t1'>Activities</div>
                    </button>
                    <button className='left-bar-button nav-btn' onClick={settingsHandler}>
                    <img src={settings} alt='settings' className='icons'/>
                    <div className='t1'> Settings</div>
                    </button>
                    <button className='left-bar-button nav-btn' onClick={aboutusHandler}>
                    <img src={about} alt='about' className='icons'/>
                    <div className='t1'> About us</div>
                    </button>
                    
                    <button className='left-bar-button-logout nav-btn' onClick={logoutHandler}>
                    <img src={out} alt='out' className='icons'/>
                    <div className='t1'>  Logout</div>
                    </button>

                </div>
            </div>
            </div>
        </>
    )
}

export default Leftbar