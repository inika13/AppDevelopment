import React from 'react'
import Layout from '../components/Layout'

function Payment() {
    return (
        <>

            <Layout />
            <div className='main-wrapper'>
            <div className='welcome-container'>
            <h1> Thank you !! </h1><br/><br/>
        <div className='form'>
        <p> Payment is Successfull</p>
        </div>  
       <br/>
        <div className='confirm'>
        <h1>You will receive a mail for confirmation</h1>
        </div>
            </div>
            </div>
        </>
    )
}

export default Payment