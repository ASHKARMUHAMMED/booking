import React from 'react'
import Button from '../../component/Button/Button'
import Input from '../../component/Input/Input'
import './Nbook.css'
import {useNavigate} from 'react-router-dom'
import Htop from '../../component/Header/Htop'
import { useState } from 'react'

const Nbook = () => {
  const navigate= useNavigate();
  const [click,setClick]=useState(false);
  return (
    <div>
      <div>
        <Htop/>
      </div>
    <div className='container1'>
      <h1>New Booking</h1>
        <div className='main'>
          <Input label='Gust Last Name' type='text'/>
          <Input label='Gust First Name' type='text'/>
          <Input label='Checked In Date' type='date'/>
          <Input label='Checked Out Date' type='date'/>
          <Input label='Number Of Adults' type='number'/>
          <Input label='Number Of Children' type='number'/>
          <div className='roomdetails'>Room</div>
          <div className='press1'>
          <Button label='Get Avilable Room' type='primary' onclick={()=>setClick(true)}/>
            <div><Button label='Book Room' type='secondary'/></div>
            <div className='back' onClick={()=>navigate(-1)}>Back</div>
          </div>
          <div className={click?'press':'disableclick'}>
            <Button label='Check-In' type='secondary'/>
            <Button label='Check-Out' type='secondary'/>
            <Button label='Cancel' type='secondary'/>

          </div>

        </div>
    </div>
    </div>
  )
}

export default Nbook