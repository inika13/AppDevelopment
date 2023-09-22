import React from 'react'
import { Link } from 'react-router-dom';
import Layout from '../components/Layout'
import Footer from '../components/Footer'
function Aboutus() {
    return (
        <>

            <Layout />
            <div className='main-wrapper'>
                <div className='welcome-container'>
                    <h1> Contact us </h1>
                </div>
                <section className='contact padding'>
                <div className='container shadow flexSB'>
                <div className='right row'>
                <p>Ready to find out more?<br/>
                To find out more information then call on 8796546756 or contact us for further details.</p><br/><br/>
                <div className='items grid2'>
                <div className='box'>
                <h4>Call us:</h4>
                <p>8796547561</p>
                </div><br/>
                <div className='box'>
                <h4>Email us:</h4>
                <p>grooveyoga@gmail.com</p>
                </div><br/>
                <div className='box'>
                <h4>Find Us at:</h4>
                <p>Groove yoga, Anna Nagar, Chennai</p>
                </div><br/>
                <div className='felxSB'>
                <form action="/submit" method="post">
                <input type="text" placeholder="Name" /><br/>
                <input type="text" placeholder="Email" /><br/>
                <input type="text" placeholder="Create a message here" />
               <Link to='/Success'><button type="submit">Submit</button></Link>
                </form>
                </div>
              
              
                </div>
                </div>
                </div>
                </section>
            
            </div>
            <Footer/>
            
            
        </>
    )
}

export default Aboutus