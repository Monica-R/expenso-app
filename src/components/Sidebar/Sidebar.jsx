import React from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <aside className='aside'>
      <ul className='aside__ul'>
        <li><Link className='aside__link' to="/">Add expense</Link></li>
        <li><Link className='aside__link' to="/">Test 1</Link></li>
        <li><Link className='aside__link' to="/">Test 2</Link></li>
        <li><Link className='aside__link' to="/">About</Link></li>
      </ul>
    </aside>
  )
}

export default Sidebar
