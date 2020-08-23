import React from 'react';
import '../index.scss';
import { VscBellDot } from 'react-icons/vsc';
import { MdLocalPostOffice } from 'react-icons/md';
import { HiDotsHorizontal } from 'react-icons/hi';

const GoalCard = (type) => {
  return (
    <div className='calender-main-card'>
      <div className='inner-calender-card'>
        <h6>9:23</h6>
        <h5>Goals</h5>
        <div className='calender-sub-cards'>
          <div className='calender-card-card1'>
            <h1>60%</h1>
          </div>
        </div>
        <h6>4 goals to do</h6>
        <div className='calender-dots'>
          <HiDotsHorizontal />
        </div>
      </div>
    </div>
  );
};

export default GoalCard;
