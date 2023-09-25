import React from 'react'
import Layout from '../components/Layout'
import { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'

function Join() {
    const navigate = useNavigate()
  const [formdata, setFormdata] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    message:'',
  })
  const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.id]: e.target.value })
  }

  const handleSubmit = (e)=>{
    e.preventDefault();

    navigate('/')
  }

    return (
        <>

            <Layout />
            <div className='main-wrapper'>
               <div className='join'>
               <h1>Apply Now</h1><br/>
               <h2>! Good Life Begins With A Good Company !</h2>
               </div>
               <div className='auth-container'>
        <div className='auth-wrapper'>
          <form className='auth-form app-x-shadow' onSubmit={handleSubmit}>
            <h1 className='auth-heading'>Application Form</h1>
              <input type="text" name="firstname" id="firstname" value={formdata.firstname} placeholder='First Name' onChange={handleChange} className='auth-field' required />
              <input type="text" name="lastname" id="lastname" value={formdata.lastname} placeholder='Last Name' onChange={handleChange} className='auth-field' required />
              <input type="email" name="email" id="email" value={formdata.email} placeholder='Email' onChange={handleChange} className='auth-field' required />
              <input type="number" name="phone" id="phone" value={formdata.phone} placeholder='Phone' onChange={handleChange} className='auth-field' required />
              <input type="text" name="message" id="message" value={formdata.message} placeholder='Message' onChange={handleChange} className='auth-field' required />
              <Link to='/Applied'><button type='submit' className='auth-btn app-x-shadow'> JOIN </button></Link>
          </form>

          <Link to='/Events' className='auth-links'>Back</Link>
        </div>
      </div>


            </div>
        </>
    )
}

export default Join
