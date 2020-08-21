import React from 'react';

/* core*/

/*style*/
import { BiMoon } from 'react-icons/bi';
import { BsMoon } from 'react-icons/bs';

const Toggle = (darkMode) => {
  console.log({ darkMode });

  return (
    <div className='Navbar'>
      <div className='navbar-left'></div>

      {/* <div className='navbar-middle'>
        <Activity /> Fitness Tracker
      </div> */}

      <div className='navbar-right' onClick={darkMode.toggle}>
        {darkMode.value ? <BsMoon color='white' /> : <BiMoon />}
      </div>
    </div>
  );
};

export default Toggle;
