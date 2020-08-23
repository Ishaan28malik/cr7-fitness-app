import React from 'react';

/* core*/
import CalenderCard from './CalenderCard';
import ClockCard from './Clockcard';

/*style*/
import { BiMoon } from 'react-icons/bi';
import { BsMoon } from 'react-icons/bs';
import { FiActivity } from 'react-icons/fi';

const Toggle = (darkMode) => {
  console.log({ darkMode });

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

export default Toggle;
