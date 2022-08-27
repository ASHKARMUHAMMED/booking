import React from 'react'
import './Roomdetail.css'

const Roomdetail = ({a,b,c,d,onclick}) => {
  async function edit(){
    
  
    let output=await fetch("http://192.168.1.62:3000/rooms",{
    method:'DELETE',
    headers:{
      "Content-Type":'application/json'
    } 
   
  })
  
  return  output.json();
}
  return (
    <div>
        <div className='first3'>
            <div className="y1">{a}</div>
            <div className="z">{b}</div>
            <div className="z">{c}</div>
            <div className="z">{d}</div>
            <div className="y1" onClick={onclick} >Delete</div>
            
          </div>
    </div>
  )
}

export default Roomdetail