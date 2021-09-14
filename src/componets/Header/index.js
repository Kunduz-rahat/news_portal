import React from "react";
import './style.css'
import {NavLink} from "react-router-dom";


const Header = () => {
  return (
    <header className='header'>
      <nav>
        <NavLink to="/" className='nav_link'>Home</NavLink>
        <NavLink to="/news" className='nav_link'>News</NavLink>
        <NavLink to="/signin" className='nav_link'>Signin</NavLink>
      </nav>
      <h1 className='text-center text-secondary'>euro<span className='font-weight-bold'>news.</span></h1>
    </header>
  )
}
export default Header