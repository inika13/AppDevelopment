import React from 'react'
import Layout from '../components/Layout'
import tr1 from '../assets/tr1.jpg'
import tr2 from '../assets/tr2.jpeg'
import tr3 from '../assets/tr3.jpg'
import tr4 from '../assets/tr4.jpg'
import tr5 from '../assets/tr5.jpg'
import Footer from '../components/Footer'
function Trainers() {
    return (
        <>

            <Layout />
            
            <div className='main-wrapper'>
           
            <div className='expltext'>
            <img src={tr1} alt='tr1' className='tr'/>
            <h1>Elizabeth</h1><br/>
            <p>OWNER / HEAD COACH</p>
            </div>
            <div className='expltext1'>
            <img src={tr2}alt='tr2' className='tr'/>
            <h1>Scarlett Torres</h1>
            <p>OWNER / HEAD COACH</p>
            <p></p>
            </div>
            <div className='expltext2'>
            <img src={tr3}alt='tr3' className='tr'/>
            <h1>Richard</h1>
            <p>OWNER / HEAD COACH</p>
            </div>
            <div className='expltext3'>
            <img src={tr4} alt='tr4' className='tr'/>
            <h1>Malhotra</h1>
            <p>OWNER / HEAD COACH</p>
            </div>
            <div className='expltext4'>
            <img src={tr5} alt='tr5' className='tr'/>
            <h1>Daniel</h1>
            <p>OWNER / HEAD COACH</p>
            </div>
           
            </div><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <Footer/>
            
        </>
    )
}

export default Trainers