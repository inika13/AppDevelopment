import React, { useState } from 'react';
import Layout from '../components/Layout';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Join() {
  const navigate = useNavigate();

  // Define the initial state for the form data
  const initialFormState = {
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    message: '',
  };

  // Use the useState hook to manage the form data
  const [formdata, setFormdata] = useState(initialFormState);

  // Define a function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormdata({
      ...formdata,
      [name]: value,
    });
  };

  // Define a function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send a POST request to your backend API
      await axios.post("http://localhost:8080/join/post", formdata);

      // Clear the form after submission
      setFormdata(initialFormState);

      // Redirect to a success page or route
      navigate('/Applied');
    } catch (error) {
      console.error('Error submitting the form:', error);
    }
  };

  return (
    <>
      <Layout />
      <div className='main-wrapper'>
        <div className='join'>
          <h1>Apply Now</h1><br />
          <h2>! Good Life Begins With A Good Company !</h2>
        </div>
        <div className='auth-container'>
          <div className='auth-wrapper'>
            <form className='auth-form app-x-shadow' onSubmit={handleSubmit}>
              <h1 className='auth-heading'>Application Form</h1>
              <input
                type="text"
                name="firstname"
                value={formdata.firstname}
                placeholder='First Name'
                onChange={handleInputChange}
                className='auth-field'
                required
              />
              <input
                type="text"
                name="lastname"
                value={formdata.lastname}
                placeholder='Last Name'
                onChange={handleInputChange}
                className='auth-field'
                required
              />
              <input
                type="email"
                name="email"
                value={formdata.email}
                placeholder='Email'
                onChange={handleInputChange}
                className='auth-field'
                required
              />
              <input
                type="number"
                name="phone"
                value={formdata.phone}
                placeholder='Phone'
                onChange={handleInputChange}
                className='auth-field'
                required
              />
              <input
                type="text"
                name="message"
                value={formdata.message}
                placeholder='Message'
                onChange={handleInputChange}
                className='auth-field'
                required
              />
              <Link to='/Applied'><button type='submit' className='auth-btn app-x-shadow'>JOIN</button></Link>
            </form>
            <Link to='/Events' className='auth-links'>Back</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Join;
