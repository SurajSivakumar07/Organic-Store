import React, { useEffect } from 'react'
import { fruitsData } from './Data'

import "./fruits.css"
export default function Slider() {
    

    console.log(fruitsData);
 
  return (
    <>

    <div className='Slider-text'>
        <h1>Inspiration for your first order</h1>
    </div>
    <div className='slider-wrap'>


    

    {fruitsData.map((items)=>
         <img src={items.img} />

    )}

    </div>
      
    </>
  )
}
