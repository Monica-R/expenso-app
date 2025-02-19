import React, { use } from 'react'
import { useEffect } from 'react';
import './TransactionCard.css'
import { Link } from 'react-router-dom';
import { deleteTransaction } from '../../api/transactions';

function TransactionCard({transaction, fetchTransactions}) {
  const { id, date, amount } = transaction;

  
  const deleteButton = async (id) => {
    try {
      await deleteTransaction(id);
      fetchTransactions();
    } catch (error) {
      console.error('Houston, tenemos un problema.', error);
    }
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
        <Link to={`/transactions/${id}/details`}>
          <ion-icon name="eye-outline"></ion-icon>
        </Link>
      </div>
    </div>
  )
}

export default TransactionCard