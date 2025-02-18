import React from 'react'
import { useEffect, useState } from 'react'
import './TransactionsList.css'
import TransactionCard from '../TransactionCard/TransactionCard';
import { getAllTransactions } from '../../api/transactions';

function TransactionsList() {

  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const data = await getAllTransactions();
        setTransactions(data);
      } catch (error) {
        console.error("Error:", error);
      }
    }
    fetchTransactions();
  }, []);

  function mapTransactions () {
    return transactions.map((item, index) => {
      return (<TransactionCard key={index} transaction={item} />);
    });
  }

  return (
    <div className="transactions">
      <h2 className="transactions__h2">Transactions List</h2>
      { mapTransactions() }
    </div>
  )
}

export default TransactionsList
