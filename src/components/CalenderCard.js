import React from 'react';

/* core */
import moment from 'moment';
import { HiDotsHorizontal } from 'react-icons/hi';

/* style */
import '../index.scss';

const CalenderCard = () => {
  return (
    <div className='calender-main-card'>
      <div className='inner-calender-card'>
        <h6>{moment().format("h:mm")}</h6>
        <h5>Calender</h5>
        <div className='calender-sub-cards'>
          <div className='calender-card-card1'>
            <h6 style={{ fontWeight: 'bolder', fontSize: 'initial' }}>2</h6>
            <hr class='solid'></hr>
            <h6 style={{ fontWeight: '100', fontSize: 'xx-small' }}>work</h6>
          </div>
          <div className='calender-card-card2'>
            <h6 style={{ fontWeight: 'bolder', fontSize: 'initial' }}>3</h6>
            <hr class='solid'></hr>
            <h6 style={{ fontWeight: '100', fontSize: 'xx-small' }}>
              Personal
            </h6>
          </div>
        </div>
        <h6>-> Meeting 08:15</h6>
        <div className='calender-dots'>
          <HiDotsHorizontal />
        </div>
      </div>
    </div>
  );
};

export default CalenderCard;
