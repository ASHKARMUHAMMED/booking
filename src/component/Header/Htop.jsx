import React from 'react'
import './Htop.css'
import bag from '../../Assets/Icon/bag.svg'
import user from '../../Assets/Icon/user.svg'
import exit from '../../Assets/Icon/exit.svg'
import { useState } from 'react'
import {Link,useNavigate} from 'react-router-dom'

const Htop = () => {
  const [click,setClick]=useState(false);
  return (
    <div className='top'>
        <div className='left'>
        <div className='req1'><img src={bag} alt="bag" width="25px"/></div>
        <div >Bookings</div>
        <div ><Link to={'/'} className='link'>Homepage</Link></div>
        <div ><Link to={'/room'} className='link'>Room</Link></div>
          <div className='req4' onClick={()=>{setClick(!click)}}>Booking</div>
          <div className={click?'click2':'disableclick'}>
            <div><Link to={'/book'} className='link'>Booking</Link></div>
            <div><Link to={'/booking'} className='link'>New Bookings </Link></div>
          </div>
        </div>
        <div className='right'>
        <div className="req2"><img src={user} alt="user" width="25px"/></div>
        <div className="req3">Administrator</div>
        <div className="req3"><img src={exit} alt="exit" width="25px" /></div>
        </div>
        
    </div>
  )
}

export default Htop