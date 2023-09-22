import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='nav-logo'>
        <Link to="/"><img src='./images/logo.png' alt='logo'></img></Link>
        </div>
        <div className='nav-icon'>
        <Link to="/login"><i class="fa-solid fa-user-plus"></i></Link>
        <Link to="/list"> <i class="fa-solid fa-cart-shopping"></i></Link>
        </div>
      
    </div>
  )
}

export default Navbar
