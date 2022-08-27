import React from 'react'
import Detail from '../../component/Bookingdetails/Detail'
import Htop from '../../component/Header/Htop'
import Roomdetail from '../../component/Roomdetail/Roomdetail'
import './Room.css'
import {useNavigate} from 'react-router-dom'
import { useState,useEffect } from 'react'
import Input from '../../component/Input/Input'
import Button from '../../component/Button/Button'
import Roomlists from '../../component/Roomlists/Roomlists'

const Room = () => {
  const [click,setClick]=useState(false);
  const navigate= useNavigate();
  const [item,setItem]=useState({roomno:"",adultno:"",childno:"",price:""})
  const [data,setData]=useState([]);
  async function Signup(e){
    e.preventDefault();
    try{
    
  
      let result=await fetch("https://localhost:7002/rooms",{
      method:'POST',
      body:JSON.stringify(item),
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
    setItem((prev)=>({...prev,[key]:value}))
  }
  async function getData(){
    
  
      let respond=await fetch("https://localhost:7002/rooms",{
      method:'GET',
      headers:{
        "Content-Type":'application/json'
      } 
     
    })
    
    return  respond.json();
  }
    useEffect(()=>{
      const userData =async()=>{
      const respond= await getData();
      setData(respond);
    };
    userData();
  },[]
  );
  


  return (
    
    <div>
        <div className='toproom'>
            <Htop/>
        </div>
        <div className='roomcontainer'>
          <div className="main3">
            <h1>Room</h1>
            <h3 onClick={()=>{setClick(true)}}>Create Room</h3>
            </div>
            <div className={click?'click5':'disableclick'}>
            <div className='mainroom1'>
        <h1>ROOM </h1>
        <div className='roomno'>
        <form onSubmit={Signup}>
            <Input type='number' label='Room Number' onchange={(e)=>{onChange(e.target.value, 'roomno')}} value={item.roomno}/>
            <Input type='number' label='Adults Capacity' onchange={(e)=>{onChange(e.target.value, 'adultno')}} value={item.adult}/>
            <Input type='number' label='Childern Capacity' onchange={(e)=>{onChange(e.target.value, 'childno')}} value={item.children}/>
            <Input type='number' label='Price' onchange={(e)=>{onChange(e.target.value, 'price')}} value={item.price}/>
            <div className="bottomroom">
            <Button label='Save' type='primary' onclick={()=>{setClick(false)}} />
            <div>or</div>
            <div className='cancel' onClick={()=>{setClick(false)}}>Cancel</div>
            </div>
            <div className="amenities">
              <Input type='text' label='Add Amenities'/>
              <Button label='Add New' type='primary'/>
            </div>
        </form>
            
            <div className="amenitieslist">
              <div className='name'>Ameneity</div>
              <div className='scroll'>
              <Roomlists label='Television' data='Delete'/>
              <Roomlists label='Internet Access' data='Delete'/>
              <Roomlists label='Hair Dryer' data='Delete'/>
              <Roomlists label='Premium Towels' data='Delete'/>
              <Roomlists label='Cribe' data='Delete'/>
              <Roomlists label='Safe' data='Delete'/>
              <Roomlists label='Television' data='Delete'/>
              <Roomlists label='Internet Access' data='Delete'/>
              <Roomlists label='Hair Dryer' data='Delete'/>
              <Roomlists label='Premium Towels' data='Delete'/>
              <Roomlists label='Cribe' data='Delete'/>
              <Roomlists label='Safe' data='Delete'/>
              
              </div>
            </div>
        </div>
            </div>
            </div>
            
            <div className='first2'>
            <div className="y">Room Number</div>
            <div className="y">Adults Capacity</div>
            <div className="y">Childern Capacity</div>
            <div className="y">price</div>
            <div className="y">Edit</div>

          </div>
          <div className='roomback'>
            {data.map((value,index)=>(
          <Roomdetail a={value.roomno} b={value.adultno} c={value.childno} d={value.price}/>
          ))}
          </div>
    
        </div>
    </div>
  )
}

export default Room