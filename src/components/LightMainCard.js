import React from 'react';
import '../index.scss';
import CalenderCard from './CalenderCard';
import ClockCard from './Clockcard';

const LightMainCard = (type) => {
  return (
    <div className='light-main-card'>
      <ClockCard />
      <CalenderCard />
    </div>
  );
};

export default LightMainCard;
