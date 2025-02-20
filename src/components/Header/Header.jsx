import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
  return (
    <header className='header'>
      <div className="logo">
        <Link to="/" className='logo-link'>
          <img src="/logo-icon.png" alt="expenso-logo" title='Home' />
        </Link>
      </div>
      <div className="options">
        <h1 className='greeting'>Welcome, <span>Admin</span></h1>
      </div>
      <ul className='header__ul'>
        <li><Link className='header__link' to="/add">Add transaction</Link></li>
        <li><Link className='header__link' to="/transactions">All transactions</Link></li>
        <li><Link className='header__link' to="/about">About</Link></li>
      </ul>
    </header>
  )
}

export default Header
