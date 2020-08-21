import React from 'react';
import '../index.scss';
import { HiDotsHorizontal } from 'react-icons/hi';
import { AiOutlineMinus } from 'react-icons/ai';

const CalenderCard = (type) => {
  return (
    <div className='calender-main-card'>
      <div className='inner-calender-card'>
        <h6>9:23</h6>
        <h5>Calender</h5>
        <div className='calender-sub-cards'>
          <div className='calender-card-card1'>
            <div>2</div>
            <AiOutlineMinus />
            <div>
              <h6>work</h6>
            </div>
          </div>
          <div className='calender-card-card2'>
            <div>3</div>
            <AiOutlineMinus />
            <div>
              <h6>Personal</h6>
            </div>
          </div>
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
