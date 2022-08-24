import React from 'react'
import './Roomdetail.css'

const Roomdetail = ({a,b,c,d}) => {
  return (
    <div>
        <div className='first3'>
            <div className="y1">{a}</div>
            <div className="z">{b}</div>
            <div className="z">{c}</div>
            <div className="z">{d}</div>
          </div>
    </div>
  )
}

export default Roomdetail