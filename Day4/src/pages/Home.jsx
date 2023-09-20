import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
    <div className='home'><br/><br/> Home  </div>
    <Link to='/Login'>Login</Link>
    </>
  )
}

export default Home