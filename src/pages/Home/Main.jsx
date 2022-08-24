import React from 'react'
import './Main.css'
import hotel from '../../Assets/Images/hotel.jpg'
import Htop from '../../component/Header/Htop'
import menu from '../../Assets/Icon/menu.svg'
import exit from '../../Assets/Icon/exit.svg'
import checkin from '../../Assets/Icon/checkin.svg'
import checkout from '../../Assets/Icon/checkout.svg'
import {Link,useNavigate} from 'react-router-dom'
import { useState } from 'react'
import Box from '../../component/Checkingbox/Box'
const Main = () => {
  const [click,setClick]=useState(false);
  const [on,setOn]=useState(false);
  return (
    <div className='container'>
      <div className="head">
      <div className='menu'><img src={menu} alt="menu" width="15px" onClick={()=>{setOn(!on)}}/>
      <div className={on?'menu1':'disableclick'}>
        <div className='req'><b>HOMEPAGE</b></div>
        <div className='req'><Link to={'/room'} className='link'><b>Room</b></Link></div>
        <div className="req"><b>USER</b></div>
        <div className="req"><b>ADMINISTRATOR</b></div>
        <div className="req"><b>EXIT</b></div>
          <div className='req' onClick={()=>{setClick(!click)}}><b>BOOKING</b></div>
          <div className={click?'click':'disableclick'}>
            <div><Link to={'/book'} className='link'>Booking</Link></div>
            <div><Link to={'/booking'} className='link'>New Bookings </Link></div>
          </div>
        </div>
        
      </div>
      <div className="header">
        <Htop/>
        </div>
      </div>
      <div className='container0'>
        <div className='image'><img src={hotel} alt="hotel" className='photo' /></div>
        <div className='check'>
        <div className='in'>
          <div className='in1'>
            <div><img src={checkin} alt="exit" width='15px' /></div>
            <div><b>Checking in Today</b></div>
          </div>
          <div className='in2'>
        <Box content1='Silva' content2='202' label='Check In' type='primary'/>
        <Box content1='Costa' content2='101' label='Check In' type='primary'/>
        </div>
        </div>
        <div className='out'>
        <div className='in1'>
            <div><img src={checkout} alt="exit" width='15px' /></div>
            <div><b>Checking Out Today</b></div>
          </div>
          <div className="in2">
        <Box content1='John' content2='105' label='Check Out' type='primary'/>
        <Box content1='Peter' content2='210' label='Check Out' type='primary'/>
        </div>
        </div>
        </div>
        
        </div>
    </div>
  )
}

export default Main