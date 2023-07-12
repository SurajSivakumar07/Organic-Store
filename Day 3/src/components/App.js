import React from 'react'
import Login from './Login/Login'
import "./app.css"

import FrontPage from './FrontPage/FrontPage'
 
import { Route ,Routes} from 'react-router'
import Fruits from './Fruits/Fruits'
export default function App() {
  return (
    <>
    <Routes >

      <Route path='/sigin' element={<Login />} />
      <Route path='/' element={<FrontPage />} />
      <Route path='/fruits' element={<Fruits />} />
  
    </Routes>
    </>
  )
}
