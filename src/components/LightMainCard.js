import React from 'react';

/* core */
import GoalCard from './GoalCard';
import CalenderCard from './CalenderCard';
import ClockCard from './Clockcard';

/* style */
import '../index.scss';
import { BiMoon } from 'react-icons/bi';
import { BsMoon } from 'react-icons/bs';
import { FiActivity } from 'react-icons/fi';

const LightMainCard = (darkMode) => {
  return (
    <div className='Navbar'>
      <div className='navbar-middle'>
      <div className='navbar-right' onClick={darkMode.toggle}>
      {darkMode.value ? <BiMoon color='white' /> : <BsMoon />}
        </div>
        <FiActivity /> Fitness Tracker
        <div className='light-main-card'>
          <ClockCard />
          <CalenderCard />
          <GoalCard/>
    </div>
    </div>
  </div>
  );
};

export default LightMainCard;
