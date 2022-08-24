import React from 'react'
import Button from '../../component/Button/Button'
import './Book.css'
import {Link,useNavigate} from 'react-router-dom'
import Htop from '../../component/Header/Htop'
import Detail from '../../component/Bookingdetails/Detail'


const Book = () => {
  return (
    <div>
      <div>
        <Htop/>
      </div>
    <div className='container2'>
        <div className='top1'>
            <div><h1>Bookings</h1></div>
            <div><Link to={'/booking'} className='link'><h3>New Bookings</h3> </Link></div>
        </div>
        <div className="middle">
        <div className=''><input type='text' placeholder='(Type Gust Name) '/></div>
        <div className=''><select name="" id="">
          <option value="">-Any Status-</option>
          <option value=""></option>
        </select></div>
        <div className=''><Button label='Search' type='primary' /></div>
        </div>
        <div>
        <div className='footer'>
          <div className='first'>
            <div className="d">Guest Last Name</div>
            <div className="d">Guest First Name</div>
            <div className="d">Room Number</div>
            <div className="d">Check In Date</div>
            <div className="d">Check Out Date</div>
            <div className="d">Status</div>
          </div>
          <Detail detil1='Kahn' detil2='Ajmal' detil3='101' detil4='23 Jan 2020' detil5='23 Jan 2020' detil6='IN'/>
          <Detail detil1='Sha' detil2='Ameer' detil3='255' detil4='26 Jan 2020' detil5='27 Jan 2020' detil6='Out'/>
        </div>
        </div>

    </div>
    </div>
  )
}

export default Book