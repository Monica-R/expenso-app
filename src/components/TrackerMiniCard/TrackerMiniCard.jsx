import React from 'react'
import './TrackerMiniCard.css'

function TrackerMiniCard({ info }) {
  return (
    <>
      <div className='recent-item'>
        <p>{ info.description }</p>
        <span>{ info.date }</span>
        <span className={ info.type === 'income' ? "success" : "danger"}>
          { info.type === 'expense' ? <ion-icon name="trending-down-outline"></ion-icon> : <ion-icon name="trending-up-outline"></ion-icon> } { info.amount } €
        </span>
      </div>
    </>
  )
}

export default TrackerMiniCard