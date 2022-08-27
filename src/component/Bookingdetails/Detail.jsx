import React from 'react'
import './Detail.css'

const Detail = ({detil1,detil2,detil3,detil4,detil5,detil6,detil7}) => {
  return (
 
        <div className='first1'>
            <div className="detail1" >{detil1}</div>
            <div className="detail">{detil2}</div>
            <div className="detail">{detil3}</div>
            <div className="detail">{detil4}</div>
            <div className="detail">{detil5}</div>
            <div className="detail">{detil6}</div>
            <div className="detail">{detil7}</div>
          </div>
    
  )
}

export default Detail