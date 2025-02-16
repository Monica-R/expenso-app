import './App.css'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Sidebar from './components/Sidebar/Sidebar';
import Home from './pages/Home';
import AddExpense from './pages/AddExpense';
import EditExpense from './pages/EditExpense';
import ExpenseDetails from './pages/ExpenseDetails';
import Summary from './pages/Summary';
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <Header />
      <Sidebar />
      <Routes>
        <Route path="/" element={ <Home /> } />
      </Routes>
      <Footer />
    </>
  )
}

export default App
