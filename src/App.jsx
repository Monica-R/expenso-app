import './App.css'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Sidebar from './components/Sidebar/Sidebar';
import TransactionsList from './components/TransactionsList/TransactionsList';
import Home from './pages/Home';
import AddExpense from './pages/AddExpense';
import EditExpense from './pages/EditExpense';
import ExpenseDetails from './pages/ExpenseDetails';
import Transactions from './pages/Transactions';
import About from './pages/About';
import ErrorPage from './pages/ErrorPage';
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <Header />
      <main className="main">
        <Sidebar />
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/add" element={<AddExpense />} />
          <Route path='/transactions/edit/:transactionId' element={<EditExpense />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
