import React from 'react'
import logo from '../../assets/images/logo.png'

const NavBar = () => {
  return (
    <nav className='flex items-center px-[5.5rem] py-[1rem]'>
      <img src={logo} className='w-[12rem]'/>
      <ul className='nav-item'>
        <li className='nav-items'><a href='#' className='nav-a'>ABOUT</a></li>
        <li className='nav-items'><a href='#' className='nav-a'>MIRROR TRADE</a></li>
        <li className='nav-items'><a href='#' className='nav-a'>INVESTMENT PRODUCT</a></li>
        <li className='nav-items'><a href='#' className='nav-a'>PLANING SERVICES</a></li>
        <li className='nav-items'><a href='#' className='nav-a'>INSIGHT</a></li>
      </ul>
      <button className='nav-btn'>GET STARTED</button>
    </nav>
  )
}

export default NavBar