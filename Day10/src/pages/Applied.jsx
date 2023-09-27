import React from 'react'
import { Link } from "react-router-dom";
import Layout from '../components/Layout'
import  '../assets/css/Applied.css'
import { Button } from '@mui/material'



function Applied() {
    const [value, setValue] = React.useState();

    const handleChange = (event) => {
   
      setValue(event.target.value);
   
    };
  
    return (
        <>

            <Layout />
            <div className='main-wrapper'>
                <div className='apply'>
                <h1>Congatulations !! You have joined the class successfully</h1>
                </div>
                <div className='bill-container'>
   <div className='billform'>
   <div className='bhead'>
   <h1>BILLING</h1>
   </div>
  
   <br/>
   <label>
   INVOICE NO : <input type  ="number" placeholder="invoice no" className='invoice'/>
   </label>
   <label>
   PAYMENT TYPE : 
   <select value={value} onChange={handleChange}>
   <option value="cash">cash</option>
   <option value="card">card</option>
   </select>
   </label>
   <br/>
   <label>AMOUNT : <input type="number" placeholder="amount" className='invoice'/>
   </label>
   <br/>
   <br/>
   <Button className='list1'>
   <Link to='/Payment'><div className='button1'>
   PAYMENT
   </div></Link>
   <br/>
   <Link to='/Dashboard'><div className='button2'>
    CANCEL 
   </div></Link>
   </Button>
  
   </div>
   </div>
   </div>

             
                

            
        </>
    )
}

export default Applied