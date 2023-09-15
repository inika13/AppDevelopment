import React, { useState } from 'react'
import Button from '@mui/material/Button';
import './Login.css';
//import axios from 'axios';
import { Link,NavLink,useNavigate } from 'react-router-dom';

function Loginpage() 
{

  const[emailid,setEmailid]=useState('');
  const[password,setPassword]=useState('');
  const navigate=useNavigate('');
  
  const formHandler=(event)=>
  {
    const logindetails={emailid,password}
    event.preventDefault();
    if(emailid.length==0)
    {
      alert("Email Id is required");
    }
    else if(password.length==0)
    {
      alert("Password is required");
    }
    //axios.post("http://localhost:8080/loginpost",logindetails)
  }


  return (
    <div className='body1'>
    <div className='pic'>
    <img src="https://images.template.net/125320/international-yoga-day-image-background-92son.png" height="720px" width="1525px"></img></div>
    <div className='rectangle'></div>
    <div className='login'>
    <b>LOGIN</b></div> 

    <div className='form'>
    <form onSubmit={formHandler}>
    
    Email Id:<input type="text100" value={emailid} placeholder="EMAIL-ID" onChange={e=>setEmailid(e.target.value)}/><br/>
    
    <br/>
    Password:<input type="password300" value={password} placeholder="PASSWORD" onChange={e=>setPassword(e.target.value)}/><br/>
    
    <br/>
    <h5><Button type="submit" class='but'>LOGIN</Button></h5><br/>
    <h5>Don't have an account?</h5>
    <Link to="/signup">  <h5><Button type="submit" class='but'>SIGNUP</Button></h5></Link> <br/>
    </form></div>
    </div>

)
}
 export default Loginpage