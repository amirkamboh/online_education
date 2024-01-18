import React from 'react'
import './style.css'
import logo from '../../media/Images/Logo_Education.png'

const Header = () => {
  return (
    <>
       <header>
        <div className="img">
          <img src={logo} alt='Logo' /> 
        </div>
        <nav>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Courses</li>
            <li>Our Service</li>
            <li>Contact us</li>
            <li className='header_btn'>Sign up</li>
          </ul>
        </nav>
       </header>
    </>
  )
}

export default Header
