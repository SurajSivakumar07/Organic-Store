import React from 'react'

import "./login.css"
import { useNavigate } from 'react-router'
export default function UserLogin() {
    //navigation
    const navigate = useNavigate();
    const formHandler=(e)=>{
        

        e.preventDefault();

        navigate("/"); 


    }
  return (
    <>

        <div className='userLogin'>

            <div className='userContent'>

                <form className='loginForm' onSubmit={formHandler}> 

                    <label>Welcome Back!</label>

                    
                    <input type='text' placeholder='Enter Your Username' />
                    <br></br>
                    <input type='text' placeholder='Enter your Password'/>
                        <br></br>
                    <input type='submit' id='submit' />

                    <br></br>

                 

                    <div className='social-logo'>

                         <i class="fa-brands fa-instagram"></i>
                         <i class="fa-brands fa-facebook"></i>
                         <i class="fa-brands fa-whatsapp"></i>

                    </div>

                </form>
            </div>
        </div>
          
      
    </>
  )
}
