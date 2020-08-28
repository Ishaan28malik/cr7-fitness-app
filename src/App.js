import React from 'react';

/* Core */
import LightMainCard from './components/LightMainCard';
// import DarkMainCard from './components/DarkMaincard';
// import Toggle from './components/ToggleSwitch';
import useDarkMode from 'use-dark-mode';
import Phoneview from './components/PhoneView';


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
    <div className='container'>
      <LightMainCard {...darkMode} />
      <Phoneview />
      {/* <div style={{ margin: '50px' }}></div> */}
      {/* <DarkMainCard /> */}
    </div>
  );
};

export default App;
