import React from 'react'
import './TransactionCard.css'
import { Link } from 'react-router-dom';

function TransactionCard({transaction}) {
  const { id, date, amount } = transaction;
  return (
    <div className='transation-card'>
      <span className="date">{ date }</span>
      <span className='amount'>$ { amount }</span>
      <div className="options">
        <button className='delete-button'>
          <ion-icon name="trash-outline"></ion-icon>
        </button>
        <Link to={`/transactions/edit/${id}`}>
          <ion-icon name="create-outline"></ion-icon>
        </Link>
      </div>
    </div>
  )
}

export default TransactionCard