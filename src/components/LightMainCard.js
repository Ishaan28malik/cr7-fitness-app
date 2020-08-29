import React from 'react';

/* core */
import GoalCard from './GoalCard';
import CalenderCard from './CalenderCard';
import ClockCard from './Clockcard';
import { BiMoon } from 'react-icons/bi';
import { BsMoon } from 'react-icons/bs';
import { FiActivity } from 'react-icons/fi';

/* style */
import '../index.scss';


const LightMainCard = (darkMode) => {
  return (
    <>
      <div className='Navbar'>
        <div className='navbar-middle'>

          <div className='navbar-right' onClick={darkMode.toggle}>
            {darkMode.value ? <BiMoon color='white' /> : <BsMoon />}
          </div>
          <div
            style={{
              margin: 'auto',
            }}
          >
            <FiActivity /> Fitness Tracker
        </div>
          <div className='light-main-card'>
            <ClockCard />
            <CalenderCard />
            <GoalCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default LightMainCard;
