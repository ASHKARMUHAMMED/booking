import React from 'react'
import './Button.css'

const Button = ({label,type,onclick,onsubmit}) => {
  return (
    <button onClick={onclick} onSubmit={onsubmit}
    className={`button1 ${
      type==="primary"?"primary":type==="secondary"?"secondary":"teritiory"}`}>
      {label}</button>
  )
}

export default Button