import React, { useState } from 'react';
import Layout from '../components/Layout';
import start from '../assets/start.jpeg';
import photo2 from '../assets/photo2.jpg';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Start() {
  const navigate = useNavigate();
  const [gender, setGender] = useState('female');
  const [age, setAge] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [error, setError] = useState(''); // Initialize an error state

  const handleSubmit = (event) => {
    event.preventDefault();
    setError(''); // Clear any previous errors

    // Basic validation
    if (!age || isNaN(age) || age <= 0) {
      setError('Please enter a valid age.');
      return;
    }

    if (!height || isNaN(height) || height <= 0) {
      setError('Please enter a valid height.');
      return;
    }

    if (!weight || isNaN(weight) || weight <= 0) {
      setError('Please enter a valid weight.');
      return;
    }

    const formData = {
      gender,
      age,
      height,
      weight,
    };

    const apiUrl = 'http://localhost:8080/auth/api/start';

    axios
      .post(apiUrl, formData)
      .then((response) => {
        console.log('Data sent to the backend:', response.data);
        navigate('/Explore');
      })
      .catch((error) => {
        console.error('Error sending data to the backend:', error);
      });
  };

  return (
    <>
      <Layout />
      <div className="main-wrapper">
        <img src={photo2} alt="photo2" className="photo" />
        <img src={start} alt="start" style={{ flex: 0.1 }} className="photo" /><br />
        <div className="text1">Welcome to GROOVE!
          <p className="text2">Hello There!</p>
          <p className="text3">Yoga is a great gift to mankind which helps us keep better and maintain our health.</p>
          <p className="text4">It's is a method of inquiry into the nature of the mind, </p>
          <p className="text5">which emphasizes practice and direct experience.</p><br />
          <p className="text6">Fill in your details:</p><br />

          <form onSubmit={handleSubmit}>
            <FormControl>
              <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <FormControlLabel value="female" control={<Radio />} label="Female" />
                <FormControlLabel value="male" control={<Radio />} label="Male" />
                <FormControlLabel value="other" control={<Radio />} label="Other" />
              </RadioGroup>
            </FormControl>
            <Box
              component="form"
              sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="filled-basic"
                label="Enter Your Age"
                variant="filled"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
              <TextField
                id="filled-basic"
                label="Enter Your Height"
                variant="filled"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              />
              <TextField
                id="filled-basic"
                label="Enter Your Weight"
                variant="filled"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            </Box>
            {error && <p className="error-message">{error}</p>}
            <button type="submit" className="auth-btn app-x-shadow">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Start;
