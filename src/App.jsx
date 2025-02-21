import './App.css'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import AddExpense from './pages/AddExpense';
import EditExpense from './pages/EditExpense';
import TransactionDetails from './pages/TransactionDetails';
import Transactions from './pages/Transactions';
import About from './pages/About';
import ErrorPage from './pages/ErrorPage';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';


function App() {

  return (
    <>
      <ToastContainer position="top-right" autoClose={2000}
      />
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/add" element={<AddExpense />} />
          <Route path="/transactions/edit/:transactionId" element={<EditExpense />} />
          <Route path="/transactions/:transactionId/details" element={<TransactionDetails />}/>
          <Route path="/about" element={<About />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
