import React from 'react'
import { useState } from 'react';
import './TransactionCard.css'
import { Link } from 'react-router-dom';
import { deleteTransaction } from '../../api/transactions';
import Modal from '../Modal/Modal';

function TransactionCard({transaction, fetchTransactions}) {
  const { id, date, amount } = transaction;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const deleteButton = async (id) => {
    try {
      await deleteTransaction(id);
      fetchTransactions();
    } catch (error) {
      console.error('Houston, tenemos un problema.', error);
    } finally {
      setIsModalOpen(false);
    }
  }


  return (
    <div className='transation-card'>
      <span className="date">{ date }</span>
      <span className='amount'>$ { amount }</span>
      <div className="options">
        <button className='delete-button' onClick={ () => setIsModalOpen(true) }>
          <ion-icon name="trash-outline"></ion-icon>
        </button>
        <Link to={`/transactions/edit/${id}`}>
          <ion-icon name="create-outline"></ion-icon>
        </Link>
        <Link to={`/transactions/${id}/details`}>
          <ion-icon name="eye-outline"></ion-icon>
        </Link>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h3>¿Estás seguro de que quieres eliminar esta transacción?</h3>
        <button onClick={() => deleteButton(id)}>Sí, eliminar</button>
        <button onClick={() => setIsModalOpen(false)}>Cancelar</button>
      </Modal>
    </div>
  )
}

export default TransactionCard