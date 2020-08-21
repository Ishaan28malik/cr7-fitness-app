import React from 'react';
import '../index.scss';
import CalenderCard from './CalenderCard';
import ClockCard from './Clockcard';

const DarkMainCard = (type) => {
  return (
    <div className='dark-main-card'>
      <ClockCard />
      <CalenderCard />
    </div>
  );
};

export default DarkMainCard;
