import React from 'react';
import LightMainCard from './components/LightMainCard';
import DarkMainCard from './components/DarkMaincard';
import './index.scss';

// const Card = [
//   {
//     type: 'Card1',
//   },
//   {
//     type: 'Card2',
//   },
// ];

const App = (type) => {
  return (
    <div className='container'>
      <LightMainCard />
      <div style={{ margin: '50px' }}></div>
      <DarkMainCard />
    </div>
  );
};

export default App;
