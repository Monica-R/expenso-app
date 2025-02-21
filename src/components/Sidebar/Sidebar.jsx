import React from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <aside className='aside'>
      <ul className='aside__ul'>
        <li><Link className='aside__link' to="/add">Add expense</Link></li>
        <li><Link className='aside__link' to="/transactions">All transactions</Link></li>
        <li><Link className='aside__link' to="/about">About</Link></li>
      </ul>
    </aside>
  )
}

export default Sidebar
