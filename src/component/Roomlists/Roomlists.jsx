import React from 'react'
import './Roomlists.css'

const Roomlists = ({label,data}) => {
  return (
    <div className='Roomitem'>
        <div>{label}</div>
        <div className='data'>{data}</div>
    </div>
  )
}

export default Roomlists