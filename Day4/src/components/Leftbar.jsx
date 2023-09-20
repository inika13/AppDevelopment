import React from 'react'
import logo from '../assets/logo.jpg'
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
    navigate('/Users')
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
                        Dashboard
                    </button>
                    <button className='left-bar-button nav-btn' onClick={usersHandler}>
                        Activities
                    </button>
                    <button className='left-bar-button nav-btn' onClick={settingsHandler}>
                        Settings
                    </button>
                    <button className='left-bar-button nav-btn' onClick={settingsHandler}>
                    About us
                </button>
                    <button className='left-bar-button-logout nav-btn' onClick={logoutHandler}>
                        Logout
                    </button>

                </div>
            </div>
            </div>
        </>
    )
}

export default Leftbar