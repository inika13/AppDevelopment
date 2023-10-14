import React from 'react'
import Layout from '../components/Layout'

import pelvic from '../assets/pelvic.jpeg'
import cat from '../assets/cat.jpg'
import low from '../assets/low.jpg'
import pigeon from '../assets/pigeon.jpg'
import corpse from '../assets/corpse.jpg'



function Activities() {
    return (
        <>

            <Layout />
            <div className='main-wrapper'>
            <div className='activity'>
            
            <h1>PELVIC TILTS</h1><br/>
            <img src={pelvic} alt='pelvic' className='act'/>
         
            </div>
            <div className='activity1'>
            
            <h1>CAT COW POSTURE</h1>
            <img src={cat}alt='cat' className='act'/>
            
            <p></p>
            </div>
            <div className='activity2'>
            
            <h1>LOW LUNGE</h1>
            <img src={low}alt='low' className='act'/>
           
            </div>
            <div className='activity3'>
           
            <h1>PIGEON</h1>
            <img src={pigeon} alt='pigeon' className='act'/>
            </div>
            <div className='activity4'>
       
            <h1>CORPSE POSE</h1>
            <img src={corpse} alt='corpse' className='act'/>
            </div>
               
   
   </div>
            
        </>
    )
}

export default Activities