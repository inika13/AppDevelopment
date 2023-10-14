import React from 'react'
import { Link } from "react-router-dom";
import Layout from '../components/Layout'
import eve1 from '../assets/eve1.jpg'
import eve2 from '../assets/eve2.jpg'
import eve3 from '../assets/eve3.jpg'
import eve4 from '../assets/eve4.jpeg'
import eve5 from '../assets/eve5.jpg'
import eve6 from '../assets/eve6.jpg'
function Events() {
    return (
        <>

            <Layout />
            
            <div className='main-wrapper'>
               <div className='eve1'>
               <img src={eve1} alt='eve1' className='ev'/>
               <h1>1) Lole White Yoga </h1>
               <p>On 10th Oct</p>
               <p>@ Sea Breeze,Banglore</p>
               <Link to='/Applied'><button type='submit' className='auth-btn app-x-shadow'>Book Now</button></Link>
               </div>
               <div className='eve2'>
               <img src={eve2} alt='eve2' className='ev'/>
               <h1>2) Free Yoga Madrid</h1>
               <p>On 19th Oct </p>
               <p>@ Lawn 4,Madurai</p>
               <Link to='/Applied'><button type='submit' className='auth-btn app-x-shadow'>Book Now</button></Link>
               </div>
               <div className='eve3'>
               <img src={eve3} alt='eve3' className='ev'/>
               <h1>3) One Love Dallas</h1>
               <p>On 2nd Nov</p>
               <p>@ Lawn 2,Ambattur,Chennai</p>
               <Link to='/Applied'><button type='submit' className='auth-btn app-x-shadow'>Book Now</button></Link>
               </div>
               <div className='eve4'>
               <img src={eve4} alt='eve4' className='ev'/>
               <h1>4) Time Square</h1>
               <p>On 17th Nov</p>
               <p>@ SPP Gardens,Maduravoyal,Chennai</p>
               <Link to='/Applied'><button type='submit' className='auth-btn app-x-shadow'>Book Now</button></Link>
               </div>
               <div className='eve5'>
               <img src={eve5} alt='eve5' className='ev'/>
               <h1>5) Get On Your Mat</h1>
               <p>On 8th Dec</p>
               <p>@ Ficus Lawn, Coimbatore</p>
               <Link to='/Applied'><button type='submit' className='auth-btn app-x-shadow'>Book Now</button></Link>
               </div>
               <div className='eve6'>
               <img src={eve6} alt='eve6' className='ev'/>
               <h1>6) SunSet Yoga</h1>
               <p>On 11th Dec</p>
               <p>@ Marina Beach, Chennai</p>
               <Link to='/Applied'><button type='submit' className='auth-btn app-x-shadow'>Book Now</button></Link>
               </div>

               <div className='rem'>
               <h1>Hurry Up!! Participate the Events And Refresh</h1>
               <h2>The details will be visible on the website!!</h2>
               <h3>Fill The Spot, Get On The Spot</h3>
               </div>

             

            </div>
        </>
    )
}

export default Events