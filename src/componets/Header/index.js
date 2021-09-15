import React from "react";
import './style.css'
import {NavLink} from "react-router-dom";


const Header = () => {
  return (
    <header className='header'>
      <div className='d-flex justify-content-between align-items-center'>
        <a href='#'><i className="fas fa-globe me-2"></i>English</a>
        <nav>
          <NavLink exact to="/" className='nav_link me-3'>Home</NavLink>
          <NavLink to="/news" className='nav_link me-3'>News</NavLink>
          <NavLink to="/signin" className='nav_link me-3'>Sign In</NavLink>
          <NavLink to="/signup" className='nav_link me-3'>Sign Up</NavLink>
        </nav>

      </div>
      <h1 className='text-center text-secondary'>euro<b>news.</b></h1>
    </header>
  )
}
export default Header