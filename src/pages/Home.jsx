import React from 'react'
import TrackerMiniCard from '../components/TrackerMiniCard/TrackerMiniCard';

function Home() {

  const fruits = ['banana', 'apple', 'orange', 'grape', 'pineapple'];
  const mapFruits = () => {
    const result = fruits.map((item) => <TrackerMiniCard info={item} />);
    return result;
  }
  return (
    <div className="content">
      <section className="content-graphics"></section>
      <section className="content-info">
        <div className="credit-card"></div>
        <div className="recent-list">
          { mapFruits() }
        </div>
      </section>
    </div>
  )
}

export default Home
