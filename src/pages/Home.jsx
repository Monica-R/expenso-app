import React from 'react'
import TrackerMiniCard from '../components/TrackerMiniCard/TrackerMiniCard';

function Home() {

  const fruits = ['banana', 'apple', 'orange', 'grape', 'pineapple'];
  const mapFruits = () => {
    const result = fruits.map((item, index) => <TrackerMiniCard key={index} info={item} />);
    return result;
  }
  return (
    <div className="content">
      <section className="content-graphics">
        <div className="credit-card"></div>
      </section>
      <section className="content-info">
        <h3 className='content-info__h3'>Recent transactions</h3>
        <div className="recent-list">
          { mapFruits() }
        </div>
      </section>
    </div>
  )
}

export default Home
