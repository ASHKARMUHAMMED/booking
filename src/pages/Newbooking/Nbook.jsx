import React from 'react'
import Button from '../../component/Button/Button'
import Input from '../../component/Input/Input'
import './Nbook.css'
import {useNavigate} from 'react-router-dom'
import Htop from '../../component/Header/Htop'
import { useState,useEffect } from 'react'

const Nbook = () => {
  const navigate= useNavigate();
  const [click,setClick]=useState(false);
  const [book,setBook]=useState({lastname:"",firstname:"",checkedin:"",checkedout:"",adultnumber:"",childnumber:""})
  const [input,setInput]=useState([]);
  async function Sign(e){
    e.preventDefault();
    try{
    
  
      let result=await fetch("https://localhost:7002/booking",{
      method:'POST',
      body:JSON.stringify(book),
      headers:{
        "Content-Type":'application/json',
        "Accept":'application/json'
      }  
     
    })
    alert("Successfully")
    // throw("");
    
    result=await result.json() 
  }
  catch{
    alert('Error');
  }
  }
  function onChange(value,key){
    setBook((prev)=>({...prev,[key]:value}))
  }
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
      
    <div className='container1'>
      <h1>New Booking</h1>
        <div className='main'>
          <Input label='Gust Last Name' type='text'onchange={(e)=>{onChange(e.target.value, 'lastname')}} value={book.lastname}/>
          <Input label='Gust First Name' type='text' onchange={(e)=>{onChange(e.target.value, 'firstname')}} value={book.firstname}/>
          <Input label='Checked In Date' type='date'onchange={(e)=>{onChange(e.target.value, 'checkedin')}} value={book.checkedin}/>
          <Input label='Checked Out Date' type='date' onchange={(e)=>{onChange(e.target.value, 'checkedout')}} value={book.checkedout}/>
          <Input label='Number Of Adults' type='number' onchange={(e)=>{onChange(e.target.value, 'adultnumber')}} value={book.adultnumber}/>
          <Input label='Number Of Children' type='number' onchange={(e)=>{onChange(e.target.value, 'childnumber')}} value={book.number}/>
          <div className='roomdetails'>Room</div>
          <div className='press1'>
          <Button label='Get Avilable Room' type='primary' onclick={()=>setClick(true)}/>
            <div><Button label='Book Room' type='secondary'/></div>
            <div className='back' onClick={()=>navigate(-1)}>Back</div>
          </div>
          <div className={click?'press':'disableclick'}>
           <form onSubmit={Sign}>
            <Button label='Check-In' type='secondary'/>
            </form>
            <Button label='Check-Out' type='secondary'/>
            <Button label='Cancel' type='secondary'/>

          </div>

        </div>
    </div>
    
    </div>
  )
}

export default Nbook