import React from 'react'
import './Header.css'

function Header() {
  return (
    <header className='header'>
      <div className="logo">
        LOGO
      </div>
      <div className="options">
        <h1 className='greeting'>Welcome, <span>Mónica</span></h1>
      </div>
      <div className="search"><ion-icon name="search-outline"></ion-icon></div>
    </header>
  )
}

export default Header
