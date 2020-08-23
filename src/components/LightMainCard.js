import React from 'react';
import '../index.scss';
import CalenderCard from './CalenderCard';
import ClockCard from './Clockcard';
import { BiMoon } from 'react-icons/bi';
import { BsMoon } from 'react-icons/bs';
import { FiActivity } from 'react-icons/fi';

const LightMainCard = (darkMode) => {
  return (
    <div className='Navbar'>
      <div className='navbar-middle'>
      <FiActivity /> Fitness Tracker
        <div className='light-main-card'>
        
        <ClockCard />
        <CalenderCard/>
    </div>
      
    </div>
    <div className='navbar-right' onClick={darkMode.toggle}>
      {darkMode.value ? <BiMoon color='white' /> : <BsMoon />}
    </div>
  </div>
  );
};

export default LightMainCard;
