import React from 'react'
import { Link } from "react-router-dom";
import Layout from '../components/Layout'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import work from '../assets/work.jpg'
import sc1 from '../assets/sc1.jpg'
import sc2 from '../assets/sc2.jpg'
import sc3 from '../assets/sc3.png'
import sc4 from '../assets/sc4.jpg'
import sc5 from '../assets/sc5.jpg'
import sc6 from '../assets/sc6.jpg'

import { blue } from '@mui/material/colors';

const style = {
    width: '150%',
    maxWidth: 360,
    bgcolor: 'background.paper',
    
  };

function Schedule() {
    return (
        <>

            <Layout />
           
            <div className='main-wrapper'>
            <div className='sche'>
            <h1>Working Hours !</h1>
            <p>(Beginners & Advanced)</p>
            
            <div className='datas'>
            <List sx={style} component="nav" aria-label="mailbox folders">
            <ListItem button>
              <ListItemText primary="Monday:  5.00 AM -6:30 PM" />
            </ListItem>
            <Divider />
            <ListItem button divider>
              <ListItemText primary="Tuesday:   5.00 AM -6:30  PM" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Wednesday:   5.00 AM -6:30 PM" />
            </ListItem>
            <Divider light />
            <ListItem button>
              <ListItemText primary="Thursday:   5.00 AM -6:30 PM" />
            </ListItem>
            <Divider light />
            <ListItem button>
              <ListItemText primary="Friday:   5.00 AM -6:30 PM" />
            </ListItem>
            <Divider light />
            <ListItem button>
              <ListItemText primary="Saturday:  07:30 AM -6:30 PM" />
            </ListItem>
            <Divider light />
            <ListItem button>
              <ListItemText primary="Sunday:  07:30 AM -6:30 PM" />
            </ListItem>
          </List>
         <div className='work'>
         <img src={work} alt='work' width={430} height={300} style={{position:"absolute",top:"10%",left:'70%'}}/>
         </div>
          </div><br/>
          <div className='sche'>
          <h1>Schedule</h1>
          </div>
          <div className='schtxt'>
            <img src={sc1} alt='sc1' className='sc'/>
            <h1>Private & Group Lessons</h1><br/>
            <p>Time: 5am - 7am</p>
            <Link to='/Join2'><button type='submit' className='auth-btn app-x-shadow'>Join Now</button></Link>
            </div><br/>
            <div className='schtxt1'>
            <img src={sc2}alt='sc2' className='sc'/>
            <h1>Yoga For Prenatal</h1>
            <p>Time: 7.10am - 8.30am</p>
            <Link to='/Join2'><button type='submit' className='auth-btn app-x-shadow'>Join Now</button></Link>
            <p></p>
            </div><br/>
            <div className='schtxt2'>
            <img src={sc3}alt='sc3' className='sc'/>
            <h1>Yoga For Beginners</h1>
            <p>Time: 8.45am - 10am</p>
            <Link to='/Join2'><button type='submit' className='auth-btn app-x-shadow'>Join Now</button></Link>
            </div><br/>
            <div className='schtxt3'>
            <img src={sc4} alt='sc4' className='sc'/>
            <h1>Yoga Barre</h1>
            <p>Time: 4pm - 5.15pm</p>
            <Link to='/Join2'><button type='submit' className='auth-btn app-x-shadow'>Join Now</button></Link>
            </div><br/>
            <div className='schtxt4'>
            <img src={sc5} alt='sc5' className='sc'/>
            <h1>Yoga Core</h1>
            <p>Time: 4.15pm - 5.40pm</p>
            <Link to='/Join2'><button type='submit' className='auth-btn app-x-shadow'>Join Now</button></Link>
            </div><br/>
            <div className='schtxt5'>
            <img src={sc6} alt='sc6' className='sc'/>
            <h1>Yoga Restore</h1>
            <p>Time: 4pm - 6pm</p>
            <Link to='/Join2'><button type='submit' className='auth-btn app-x-shadow'>Join Now</button></Link>
            </div>
          </div>
          
            </div>
            
            
        </>
    )
}

export default Schedule