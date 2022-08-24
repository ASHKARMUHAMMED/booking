import React from 'react'
import './Input.css'

const Input = ({label,type,onchange,value}) => {
  return (
    <div className='inputnew'>
        <label>{label}</label>
        <input type={type} required onChange={onchange} value={value} />
    </div>
  )
}

export default Input