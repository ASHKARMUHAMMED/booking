import React from 'react'
import Button from '../Button/Button'
import './Box.css'

const Box = ({content1,content2,label,type}) => {
  return (
    <div className='box'>
        <div className="del">{content1}</div>
        <div className="del">{content2}</div>
        <Button label={label} type={type} />
    </div>
  )
}

export default Box