import React from 'react'
import { useEffect, useState } from 'react';
import { addTransaction } from '../api/transactions';
function AddExpense() {

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
    const transactionId = Date.now();
    addTransaction(
      transactionId,
      inputForm.amount,
      inputForm.date,
      inputForm.category,
      inputForm.type,
      inputForm.description
    );
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
          placeholder="Amount"
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
          /> Income
        </label>
        <label htmlFor="gasto">
          <input 
            type="radio" 
            name="type" 
            value="Expense" 
            onChange={(e) => handleChange(e)} 
          /> Expense
        </label>
        </label>
        <label htmlFor="description">
          <textarea 
          name="description" 
          id="description" 
          cols="30" rows="10" 
          placeholder="Description"
          onChange={(e) => handleChange(e)}></textarea>
        </label>
        <input type="submit" value="Send" />
      </form>
    </section>
  )
}

export default AddExpense
