import React from 'react';

/* core */
import moment from 'moment';
import { VscBellDot } from 'react-icons/vsc';
import { MdLocalPostOffice } from 'react-icons/md';
import { HiDotsHorizontal } from 'react-icons/hi';

/* style */
import '../index.scss';


const ClockCard = () => {
  return (
    <div className='clock-main-card'>
      <div className='inner-clock-card'>
        <h1>{moment().format("h:mm")}</h1>
        <h5>Monday</h5>
        <h6 style={{ color: 'gray' }}>10 january 2020</h6>
        <div className='clock-card-icons'>
          <div className='clock-card-icon1'>
            <MdLocalPostOffice />
          </div>
          <div className='clock-card-icon2'>
            <VscBellDot />
          </div>
        </div>
        <div className='clock-dots'>
          <HiDotsHorizontal />
        </div>
      </div>
    </div>
  );
};

export default ClockCard;
