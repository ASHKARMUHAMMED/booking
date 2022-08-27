import React from 'react'
import Button from '../../component/Button/Button'
import './Book.css'
import {Link,useNavigate} from 'react-router-dom'
import Htop from '../../component/Header/Htop'
import Detail from '../../component/Bookingdetails/Detail'
import { useState,useEffect } from 'react'


const Book = () => {
  const [input,setInput]=useState([]);
  async function getDetail(){
    
  
    let respond=await fetch("https://localhost:7002/booking",{
    method:'GET',
    headers:{
      "Content-Type":'application/json'
    } 
   
  })
  
  return  respond.json();
}
useEffect(()=>{
  const user =async()=>{
  const respond= await getDetail();
  setInput(respond);
};
user();
},[]
);
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
            <div className="d">Check In Date</div>
            <div className="d">Check Out Date</div>
            <div className="d">Adult Number</div>
            <div className="d">Child Number</div>
            <div className="d">Status</div>
          </div>
          {input.map((value,index)=>(
          
          <Detail detil1={value.lastname} detil2={value.firstname} detil3={value.checkedin} detil4={value.checkedout} detil5={value.adultnumber} detil6={value.childnumber} detil7='In'/>
          ))}
          
        </div>
        </div>

    </div>
    </div>
  )
}

export default Book