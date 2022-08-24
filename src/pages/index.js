import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Book from './Booking/Book';
import Main from './Home/Main';
import Nbook from './Newbooking/Nbook';
import Room from './Room/Room';


const index = () => {
  return (
    <div>
        <BrowserRouter>
        <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/booking' element={<Nbook/>}/>
        
        <Route path='/book' element={<Book/>}/>
        <Route path='/room' element={<Room/>}/>

       
        
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default index