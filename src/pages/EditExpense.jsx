import React from 'react'
import { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom'
import { toast } from 'react-toastify';
import { getTransactionById, updateTransaction } from '../api/transactions';
import Modal from '../components/Modal/Modal';
import './EditExpense.css';

function EditExpense() {

  const { transactionId } = useParams();
  const [transactionItem, setTransactionItem] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  /* UNIQUE FORM STATE */ 
  const [ inputForm, setInputForm ] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    const fetchTransaction = async () => {
      try {
        const data = await getTransactionById(transactionId);
        setTransactionItem(data);
      } catch (error) {
        console.error('Houston, tenemos un problema.', error);
        toast.error("Error editing transaction");
      }
    }
    fetchTransaction();
  }, []);

  function handleChange (event) {
    const { name, value } = event.target;
      setInputForm({
        ...inputForm,
        [name] : value
      });
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setIsModalOpen(true);
  }

  const onUpdate = async () => {
    try {      
      await updateTransaction(
        transactionId,
        inputForm.amount,
        inputForm.date,
        inputForm.category,
        inputForm.type,
        inputForm.description
      );
      toast.success("Transaction successfully edited.");
      setTimeout(() => {
        navigate("/transactions");
      }, 2000);
    } catch (error) {
      console.error('Houston, we have a problem', error);
      toast.error("We have a problem related to editing transaction.")
    } finally {
      setIsModalOpen(false);     
    }
  }

  //console.log('objeto', transactionItem)
  return (
    <section className='edit-section'>
      <h2 className="edit-section__h2">Edit transaction</h2>
      <form className='edit-form' onSubmit={handleFormSubmit}>
        <label htmlFor="amount">
          <input 
          type="number" 
          name="amount" 
          id="amount" 
          placeholder={transactionItem.amount}
          onChange={(e) => handleChange(e)}/>
        </label>
        <label htmlFor="date">
          <input type="date" name="date" id="date" onChange={(e) => handleChange(e)}/>
        </label>
        <label htmlFor="category">
          <select name="category" id="category" onChange={(e) => handleChange(e)}>
            <option value="#">Select an option</option>
            <option value="Entertaiment">Entertaiment</option>
            <option value="Food">Food</option>
            <option value="Freelance">Freelance</option>
            <option value="Gift">Gift</option>
            <option value="Health">Health</option>
            <option value="Other">Other</option>
            <option value="Salary">Salary</option>
            <option value="Shopping">Shopping</option>
            <option value="Transport">Transport</option>
            <option value="Utilities">Utilities</option>
          </select>
        </label>
        <label htmlFor="type">
        <label htmlFor="ingreso">
          <input 
            type="radio" 
            name="type" 
            value="Income" 
            onChange={(e) => handleChange(e)} 
          /> Ingreso
        </label>
        <label htmlFor="gasto">
          <input 
            type="radio" 
            name="type" 
            value="Expense" 
            onChange={(e) => handleChange(e)} 
          /> Gasto
        </label>
        </label>
        <label htmlFor="description">
          <textarea 
          name="description" 
          id="description" 
          cols="30" rows="10" 
          placeholder={transactionItem.description}
          onChange={(e) => handleChange(e)}></textarea>
        </label>
        <input className='button-6' type="submit" value="Send" />
        <Link to="/transactions">Back</Link>
      </form>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h3>Are you sure you want to save the changes?</h3>
        <button onClick={onUpdate}>Confirm</button>
        <button onClick={() => setIsModalOpen(false)}>Cancel</button>
      </Modal>
    </section>
  )
}

export default EditExpense
