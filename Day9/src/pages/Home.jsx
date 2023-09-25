import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg';

function Home() {
  return (
    <div className='home'>
      <img src={logo} alt="logo" className="logo" />
     <h2 className='mind'>Mind’s harmony at its best</h2><br/>
      <span>Let's GROOVE !</span>
      <div className="centered-link">
        <Link to='/Login'>Login</Link>
      </div>
    </div>
  );
}

export default Home;
