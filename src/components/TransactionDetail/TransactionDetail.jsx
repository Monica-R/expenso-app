import { Link } from 'react-router-dom';
import './TransactionDetail.css'

function TransactionDetail({transaction}) {
  const { description, amount, date, category } = transaction;
  console.info('desde TransactionDetail.jsx - components', transaction);
  return (
    <div className='transaction-item'>
      <h4 className='transaction-item__h4'>{ description }</h4>
      <span>{ amount }</span>
      <span>{ date }</span>
      <span>{ category }</span>
      <Link to="/transactions">Back to transactions</Link>
    </div>
  )
}

export default TransactionDetail
