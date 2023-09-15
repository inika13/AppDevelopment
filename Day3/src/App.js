import React from 'react';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css';
import Loginpage from './Components/Login/Login';
import Signup from './Components/Signup/Signup';

function App()
{
    return(
        <div className="App">
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Loginpage/>}/>
        <Route path="/signup" element={<Signup/>}/>
        
        </Routes>
        </BrowserRouter>
        
   
       

    </div>
   );
}
export default App;