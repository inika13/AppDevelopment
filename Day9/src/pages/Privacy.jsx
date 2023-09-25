import React from 'react'
import Layout from '../components/Layout'

function Privacy() {
    return (
        <>

            <Layout />
            <div className='main-wrapper'>
            <div className='term'>
            <h1>Privacy & Policy </h1>
            </div>
                <div className='privacy'>
                <h1>Right to access:</h1>
                <p>You may ask to confirm whether we process your data and if so, to provide you with the scope of</p> 
                <p>such processing and a copy of the data stored concerning you by Us.</p>
                </div>
                <div className='privacy1'>
                <h1>Right to rectification:</h1>
                <p>You have the right to request correction of inaccurate personal data concerning you and the completion of incomplete data. We try to allow you to correct/add data through the Product’s settings to the extent possible, e.g. you can login to your user profile and correct, amend, or delete information about yourself. We will also inform recipients of your data in case of rectification of your data.</p>
                </div>
                <div className='privacy2'>
                <h1>Right to erasure:</h1>
                <p>You may request the erasure of your personal data stored by Us. Please note, however, that the right to erasure is not absolute and shall be fulfilled by Us only provided specific legal requirements are met. You may request data erasure only if:

                your personal data is no longer necessary for the purposes for which it was initially collected,
                
                you have withdrawn your consent to personal data processing, and the consent was the sole legal basis for the processing,
                
                you have successfully objected to the processing based on a balancing of interests ground relating to your particular situation,
                
                your personal data have been unlawfully processed,
                
                your personal data have to be erased for compliance with a legal obligation, or
                
                you are an underage person and used Our Product by mistake.</p>
                </div>

            </div>
        </>
    )
}

export default Privacy