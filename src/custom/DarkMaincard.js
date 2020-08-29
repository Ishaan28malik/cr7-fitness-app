import React from 'react';
import '../index.scss';
import CalenderCard from '../components/CalenderCard';
import ClockCard from '../components/Clockcard';

const DarkMainCard = (type) => {
  return (
    <div className='dark-main-card'>
      <ClockCard />
      <CalenderCard />
    </div>
  );
};

export default DarkMainCard;
