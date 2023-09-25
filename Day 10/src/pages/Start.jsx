import React from 'react'
import { Link } from "react-router-dom";
import Layout from '../components/Layout'
import start from '../assets/start.jpeg'
import photo2 from '../assets/photo2.jpg';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


function Start() {
  
  
    return (
        <>

            <Layout />
            <div className='main-wrapper'>
            <img src={photo2} alt='photo2'className='photo'/>
            <img src={start} alt="start" style={{ flex: 0.1 }} className='photo'/><br/>
            <div className='text1'>Welcome to GROOVE!
            <p className='text2'>Hello There!</p>
            <p className='text3'>Yoga is a great gift to mankind which helps us keep better and maintain our health.</p>
            <p className='text4'>It's is a method of inquiry into the nature of the mind, </p>
            <p className='text5'>which emphasises practice and direct experience.</p><br/>
            <p className='text6'>Fill your details:</p><br/>
            
            <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
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
  <Box
  component="form"
  sx={{
    '& > :not(style)': { m: 1, width: '25ch' },
  }}
  noValidate
  autoComplete="off"
>
  <TextField id="filled-basic" label="Enter Your Age" variant="filled" />
  <TextField id="filled-basic" label="Enter Your Height" variant="filled" />
  <TextField id="filled-basic" label="Enter Your Weight" variant="filled" />
</Box>
    
  </Box>
  <Link to='/Explore'>
  <button type='submit' className='auth-btn app-x-shadow'>Explore More</button>
  </Link>
            </div>
            </div>
           
        </>
    )
}

export default Start