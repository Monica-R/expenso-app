import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { addTransaction } from '../api/transactions';
import Modal from '../components/Modal/Modal';
import './AddExpense.css'
function AddExpense() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  /* UNIQUE FORM STATE */ 
  const [ inputForm, setInputForm ] = useState({});

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
  
  const onSubmit = async () => {
    try {
      const transactionId = Date.now();
      addTransaction(
        transactionId,
        inputForm.amount,
        inputForm.date,
        inputForm.category,
        inputForm.type,
        inputForm.description
      );
      toast.success("Transaction added successfully.");
      setTimeout(() => {
        navigate("/transactions");
      }, 1000);
    } catch (error) {
      console.error('Houston, we have a problem', error)
      toast.error("We have a problem related to add transaction.")
    }
  }

  return (
    <section className='add-section'>
      <h2 className="add-section__h2">Add transaction</h2>
      <form className='add-form' onSubmit={handleFormSubmit}>
        <label htmlFor="amount">
          <input 
          type="number" 
          name="amount" 
          id="amount"
          required
          placeholder="Amount"
          onChange={(e) => handleChange(e)}/>
        </label>
        <label htmlFor="date">
          <input type="date" name="date" id="date" required onChange={(e) => handleChange(e)}/>
        </label>
        <label htmlFor="category">
          <select name="category" required id="category" onChange={(e) => handleChange(e)}>
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
          <input 
            type="radio" 
            name="type" 
            value="Income" 
            onChange={(e) => handleChange(e)} 
          /> Income
        </label>
        <label htmlFor="type">
          <input 
            type="radio" 
            name="type" 
            value="Expense" 
            onChange={(e) => handleChange(e)} 
          /> Expense
        </label>
        <label htmlFor="description">
          <textarea 
          name="description" 
          id="description" 
          cols="30" rows="10" 
          placeholder="Description"
          onChange={(e) => handleChange(e)}></textarea>
        </label>
        <input className='button-6' type="submit" value="Send" />
      </form>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h3>Are you sure you want to add this element?</h3>
        <button onClick={onSubmit}>Confirm</button>
        <button onClick={() => setIsModalOpen(false)}>Cancel</button>
      </Modal>
    </section>
  )
}

export default AddExpense
