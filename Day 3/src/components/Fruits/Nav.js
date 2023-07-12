import React from 'react'
import { Link } from 'react-router-dom'

import "./fruits.css"

export default function Nav() {
  return (
    <>

        <div className='nav-wrap'>
            <div className='nav-content'>


         
                <div className='title'>
                    <h1>Farm House</h1>
                </div>

                <div className='searchBar'>
                        <select name="location" id="location">
                            <option value="cbe">Coimbatore</option>
                            <option value="select">Select Location</option>
                        </select>
                        <form>
                            <input type='text' />
                        </form>
                </div>

                <div className='Account'>
                    <h3>
                        <Link to="/sigin" >Signin</Link>
                    </h3>
                    <h3>
                        <Link to="/sigin" >Signup</Link>
                    </h3>
                </div>
            </div>
        </div>
      
    </>
  )
}
