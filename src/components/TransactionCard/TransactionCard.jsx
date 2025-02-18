import React from 'react'
import './TransactionCard.css'
import { Link } from 'react-router-dom';
import { deleteTransaction } from '../../api/transactions';

function TransactionCard({transaction}) {
  const { id, date, amount } = transaction;

  const deleteButton = (id) => {
    deleteTransaction(id);
  }

  return (
    <div className='transation-card'>
      <span className="date">{ date }</span>
      <span className='amount'>$ { amount }</span>
      <div className="options">
        <button className='delete-button' onClick={ () => deleteButton(id) }>
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