import React from 'react'
import './TrackerMiniCard.css'

function TrackerMiniCard({ info }) {
  return (
    <>
      <div className='recent-item'>
        <span>{ info.amount }</span>
        <p>Aaaa</p>
        <span>{ info.date }</span>
      </div>
    </>
  )
}

export default TrackerMiniCard