import React from 'react'
import Layout from '../components/Layout'


import {Container} from 'react-bootstrap'

function Class() {
    
    return (
        <>

            <Layout />
            <div className='main-wrapper'>
            <div className='vidtxt'>
            
              
                    <div className="ratio ratio-16x9">
                          <iframe src="https://www.youtube.com/embed/VaoV1PrYft4" title="YouTube video" allowfullscreen></iframe>
                          
                    </div>
                    <div className="ratio ratio-16x9">
                          <iframe src="https://www.youtube.com/embed/s6XgAhHNO2k" title="YouTube video" allowfullscreen></iframe>
                         
                    </div>
                    </div>
                    
            </div>
        </>
    )
}

export default Class