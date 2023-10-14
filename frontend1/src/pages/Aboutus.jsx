import React from 'react'
import { Link } from 'react-router-dom';
import Layout from '../components/Layout'
import Footer from '../components/Footer'



function Aboutus() {
    
    return (
        <>

            <Layout />
            <div className='abouts'>
            <div className='main-wrapper'>
                
                <section className='contact padding'>
                <div className='container shadow flexSB'>
                <div className='right row'>
                <p>Ready to find out more?<br/>
                To find out more information then call on 8796546756 or contact us for further details.</p><br/><br/>
                <div className='items grid2'>
                <div className='box'>
                <h4> Call Us:</h4>
                <p>8796547561</p>
                </div><br/>
                <div className='box'>
                <h4>Email Us:</h4>
                <p>grooveyoga@gmail.com</p>
                </div><br/>
                <div className='box'>
                <h4>Find Us at:</h4>
                <p>Groove yoga, Anna Nagar, Chennai</p>
                </div><br/>
                <div className='felxSB'>
                
               <Link to='/Feedback'><button type='submit' className='auth-btn app-x-shadow'>FEEDBACK</button></Link>
               
                </div>
              
              
                </div>
                </div>
                </div>
                </section>
               
            
            </div>
            <div className='faq'>
            <h1>FAQ's</h1>
            <h2>What is Power Yoga ?</h2>
            <p>Unlike other types of yoga, power yoga is a fast-paced and dynamic activity that emphasizes the flow from one pose to the</p>
            <p>next, rather than a single pose at a time.Power yoga is a low-impact, bodyweight exercise meaning it makes it accessible to</p>
            <p>everyone.You can get the best possible combination of physical power, strength, and flexibility of any other workout out there.</p>
            <br/>
            <h2>Is Yoga a Good Full Body Workout ?</h2>
            <p>Yes! Yoga can be a great full-body workout. Mixing and matching various poses, techniques, and practices can provide a</p>
            <p>full-body workout that is not only physically challenging, but mentally tough.If you haven’t tried it,you might find this hard</p>
            <p>to believe, but yoga can be an extremely strenuous workout, leaving you sweating and begging for a rest.</p>
           <br/>
            <h2>Tips for Beginners ?</h2>
            <p>If you’re new to yoga online, we’ve got some tips for you to get started on the right foot…</p>
            <p>We recently asked some yoga experts what advice they could offer for newcomers who are looking to try yoga at home.</p><br/>
            <p>TIP 1 – “DECIDE IF IT’S RIGHT FOR YOU”</p>
            <p>TIP 2 – “CHOOSE ONLINE YOGA CLASSES DESIGNED  FOR BEGINNERS”</p>
            <p>TIP 3 – “SET UP EVERYTHING YOU NEED BEFORE YOU START YOUR BEGINNER’S YOGA WORKOUT”</p>
            <p>TIP 4 –“MINIMIZE DISTRACTIONS”</p>
            <br/>
            <h2>What Diet Complements a Daily Yoga Regime?</h2>
            <p>The yogic diet is vegetarian and wholesome. The food we eat affects not just our body, but our mind also.Intake of </p>
            <p>the right amount of food is important - not too little, or too much. Fresh, light,and balanced food are high in prana or </p>
            <p>energy.The yogic diet consists of fresh fruits, vegetables, nuts, whole grains, lentils, and a small quantity of milk and milk products.</p>
            <br/>
            <h2>Which Is The Best time For Practising Yoga?</h2>
            <p>The best time to do yoga practice is early in the morning, when your stomach is empty, and you have a minimum number</p>
             <p>of distractions. It is also recommended that you repeat your practices late in the afternoon, or early evening before</p> 
             <p>dinner. Morning practices keep your enthusiasm and energy levels higher during the day, and evening practices help you</p>
             <p> get rid of stresses and tensions accumulated during the day – refreshing you.</p>
            </div>
            </div>
           <Footer/>
            
            
        </>
    )
}

export default Aboutus