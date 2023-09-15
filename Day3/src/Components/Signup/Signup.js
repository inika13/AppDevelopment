//import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Signup.css';
export default function() 
{
  const[firstname,setFirstname]=useState('');
  const[lastname,setLastname]=useState('');
  const[emailid,setEmailid]=useState('');
  const[phno,setPhno]=useState('');
  const[password,setPassword]=useState('');
  const[confirmpassword,setConfirmpassword]=useState('');
  const list={firstname,lastname,emailid,phno,password,confirmpassword}
  const navigate=useNavigate('');

  const formHolder=(event)=>
  {
    //axios.post("http://localhost:8080/signuppost",list).then((console.log(formHolder)))
    navigate("/details")
  }
  return (
    <div>
      <div className='img2'>
       <img src="https://t3.ftcdn.net/jpg/04/87/48/66/360_F_487486623_CatNgUbulZ6rOpENckeTzRfY7IzrqOKd.jpg" height="750px" width="1500px"/>
      </div>
      <div className='rectangle2'></div>
      <div className='head2'>
       <p>Sign up</p>
      </div>
      <div className='form2'>
       <form onSubmit={formHolder}>

      First Name&nbsp;&nbsp;: <input type="text200" value={firstname} placeholder="firstname...." onChange={(e)=>setFirstname(e.target.value)}/><br/><br/>

      Last Name&nbsp;: <input type="text200" value={lastname} placeholder="lastname...." onChange={(e)=>setLastname(e.target.value)}/><br/><br/>

      Email Id&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : <input type="text300" value={emailid} placeholder="email...." onChange={(e)=>setEmailid(e.target.value)}/><br/><br/>
       
      Ph.No&nbsp;: <input type="text300" value={phno} placeholder="phno..." onChange={(e)=>setPhno(e.target.value)}/><br/><br/>
       
      Password&nbsp;&nbsp;: <input type="Password400" value={password} placeholder="password...."onChange={(e)=>setPassword(e.target.value)}/><br/><br/>

      Confirm Password&nbsp;&nbsp;: <input type="Password400"  value={confirmpassword} placeholder="confirm password...." onChange={(e)=>setConfirmpassword(e.target.value)}/><br/><br/>
       
      <button type="submit" class="but2">Create Account</button>
       </form>
      </div>
</div>
)
}