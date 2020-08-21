import React from 'react';
import '../index.scss';
import { VscBellDot } from 'react-icons/vsc';
import { MdLocalPostOffice } from 'react-icons/md';
import { HiDotsHorizontal } from 'react-icons/hi';

const ClockCard = (type) => {
  return (
    <div className='clock-main-card'>
      <div className='inner-clock-card'>
        <h1>9:23</h1>
        <h3>Monday</h3>
        <h5>10 january 2020</h5>
        <div className='clock-card-icons'>
          <MdLocalPostOffice />
          <VscBellDot />
        </div>
        <div className='clock-dots'>
          <HiDotsHorizontal />
        </div>
      </div>
    </div>
  );
};

export default ClockCard;
