import React from 'react'
import { useEffect, useState } from 'react';
import BarChartComponent from '../components/BarChartComponent/BarChartComponent';
import TrackerMiniCard from '../components/TrackerMiniCard/TrackerMiniCard';
import RadialBarChartComponent from '../components/RadialBarChartComponent/RadialBarChartComponent';
import { getAllTransactions, getInitialBalance } from '../api/transactions';

function Home() {

  const [transactions, setTransactions] = useState([]);
  const [balance, setBalance] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const data =  await getAllTransactions();
        setTransactions(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchTransactions();
  },[]);

  useEffect(() =>{
    const fetchBalance = async () => {
      try {
        const data = await getInitialBalance();
        setBalance(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchBalance();
  }, []);
  const mapRecentTransactions = () => {
    const recentTransactions = transactions
        .sort((prev, next) => new Date(next.date) - new Date(prev.date))
        .slice(0, 5)
        .map(tranItem => ({
          ...tranItem,
          date: new Date(tranItem.date).toLocaleDateString("es-ES") // Reformateando fecha
        }));
    return recentTransactions.map((transaction, index) => <TrackerMiniCard key={index} info={transaction} />);
  }
  /****** DATOS PARA LOS GRÁFICOS ******/

  const incomeData = transactions
        .filter(item => item.type === "income")
        .map(({ date, amount }) => ({ date, amount }));

  const expenseData = transactions
        .filter(item => item.type === "expense")
        .map(({ date, amount }) => ({ date, amount }));
  
  const getCategoriesAmount = transactions
        .filter(item => item.type === "expense")
        .map(({ amount, category }) => ({ amount, category }));

  return (
    <div className="content">
      <section className="content-graphics">
        <BarChartComponent data={incomeData} color="#11BB80"/>
        <BarChartComponent data={expenseData} color="#EC2C55"/>
        <RadialBarChartComponent data={getCategoriesAmount}/>
      </section>
      <section className="content-info">
        <div className="credit-card">{ balance } €</div>
        <h3 className='content-info__h3'>Activity</h3>
        <div className="recent-list">
          { mapRecentTransactions() }
        </div>
      </section>
    </div>
  )
}

export default Home
