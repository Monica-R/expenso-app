import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import TransactionDetail from '../components/TransactionDetail/TransactionDetail'
import { getTransactionById } from '../api/transactions';

function TransactionDetails() {

  const { transactionId } = useParams();
  const [transactionItem, setTransactionItem] = useState({});

  useEffect(() => {
    const fetchTransaction = async () => {
      try {
        const data = await getTransactionById(transactionId);
        setTransactionItem(data);
      } catch (error) {
        console.log('Houston, tenemos un problema.', error);
      }
    }
    fetchTransaction();
  }, []);

  return (
    <>
      <TransactionDetail transaction={transactionItem}/>
    </>
  )
}

export default TransactionDetails
