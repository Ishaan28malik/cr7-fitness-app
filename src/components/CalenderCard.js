import React from 'react';
import '../index.scss';
import { HiDotsHorizontal } from 'react-icons/hi';

const CalenderCard = (type) => {
  return (
    <div className='calender-main-card'>
      <div className='inner-calender-card'>
        <h4>9:23</h4>
        <h3>Calender</h3>
        <div className='calender-sub-cards'>
          <div>icon1</div>
          <div>icon2</div>
        </div>
        <h6> Meeting 08:15</h6>
        <div className='calender-dots'>
          <HiDotsHorizontal />
        </div>
      </div>
    </div>
  );
};

export default CalenderCard;
