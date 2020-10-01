import React from 'react';

/* core */
import LightMainCard from './components/LightMainCard';
import useDarkMode from 'use-dark-mode';
import Phoneview from './components/PhoneView';
import WatchView from './components/WatchView';
import cr7 from './assets/cr7.png'


/* style */
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
  const darkMode = useDarkMode(false);
  return (
    <>
      <img alt="CR7" style={{
        width: '60px',
        height: '60px',
        marginLeft: '300px',
      }} src={cr7} />
      <h1 style={{ marginTop: '-50px' }}>CR7 Fitness App</h1>
      <div className='container'>
        <LightMainCard {...darkMode} />
        <Phoneview {...darkMode}/>
        <WatchView {...darkMode}/>
      </div>
    </>
  );
};

export default App;
