import React, { use } from 'react'
import { useEffect } from 'react'
import './TransactionsList.css'
import '/src/api/transactions.js'
import { getAllTransactions } from '../../api/transactions';

function TransactionsList() {

  useEffect(() => {
    getAllTransactions();
  }, []);
  return (
    <div className="transactions">
      <h2 className="transactions__h2">Transactions List</h2>
    </div>
  )
}

export default TransactionsList
