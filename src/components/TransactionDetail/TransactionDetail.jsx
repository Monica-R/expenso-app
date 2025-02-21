import { Link } from 'react-router-dom';
import './TransactionDetail.css'

function TransactionDetail({transaction}) {
  const { description, amount, date, category } = transaction;
  console.info('desde TransactionDetail.jsx - components', transaction);
  return (
    <div className="transaction-container">
      <div className='transaction-item'>
        <h4 className='transaction-item__h4'>{ description }</h4>
        <div className="layer">
          <span>{ date }</span>
          <span>{ category }</span>
        </div>
        <span className='amount-info'>{ amount } €</span>
        <Link className='back-link button-6' to="/transactions">Back</Link>
      </div>
    </div>
  )
}

export default TransactionDetail
