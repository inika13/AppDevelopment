import React from 'react'
import { Link } from "react-router-dom";
import Layout from '../components/Layout'
import ex1 from '../assets/ex1.jpg'
import ex2 from '../assets/ex2.jpg'
import ex3 from '../assets/ex3.jpg'
import ex4 from '../assets/ex4.jpg'
import ex5 from '../assets/ex5.jpg'

function Explore() {
    return (
        <>

            <Layout />
           
            <div className='main-wrapper'>
            <Link to='/Start'><button type='submit' className='auth-btn app-x-shadow'>Back</button></Link>
            <div className='expltext'>
            <img src={ex1} alt='ex1' className='expl'/>
            <h1>Power Yoga</h1><br/>
            <p>"A power yoga class may</p>
            <p>seem more like an aerobics</p> 
            <p>class than a relaxed, mindful</p> 
            <p>yoga experience."</p>
            </div>
           <div className='expltext1'>
           <img src={ex2} alt='ex2' className='expl'/>
           <h1>Community</h1><br/>
            <p>"Community is when people </p>
            <p>begin to care about one another,</p> 
            <p>and when they begin to share</p>
            <p> things that are important to</p>
            <p> one another." </p>
           </div>
           <div className='expltext2'>
           <img src={ex3} alt='ex3' className='expl'/>
           <h1>Foundation</h1><br/>
           <p>"IYA will provide the Syllabi</p>
            <p>for the Various Courses and</p>
            <p>Accredit Member Institutes</p>
             <p>for conducting the courses."</p>
           </div>
           <div className='expltext3'>
           <img src={ex4} alt='ex4' className='expl'/>
           <h1>Prenatal yoga</h1><br/>
           <p>"Prenatal yoga is an</p>
           <p>ideal low-impact fitness routine</p>
           <p>to start when you’re expecting,</p> 
            <p>even if you’re not used to regularly</p>
           <p>working out."</p>
           </div>

           <div className='expr'><br/><br/>
           <h1>EXPERIENCE OF YOGA</h1>
           </div>
           <br/>
           <div className='pic'>
           <img src={ex5} alt='ex5' width={390} height={350} style={{position:"absolute",left:"20%"}} ></img>
           </div>
           <div className='bal'>
           <p>- Balance Body & Mind</p>
           <p>- Healthy Daily Life</p>
           <p>- Improves your flexibility</p>
           <p>- Protects your spine</p>
           <p>- Betters your bone health</p>
           <p>- Increases your blood flow</p>
           <p>- Keep a practice journal</p>
           <p>- Builds muscle strength</p>
           </div>

           
          </div>
            
            
            
            
            
           
        </>
    )
}

export default Explore