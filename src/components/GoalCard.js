import React from 'react';

/* core */
import { CircularProgressbar } from 'react-circular-progressbar';
import moment from 'moment';
import { HiDotsHorizontal } from 'react-icons/hi';
import 'react-circular-progressbar/dist/styles.css';

/* style */
import '../index.scss';


const percentage = 60;

const GoalCard = () => {
  return (
    <div className='goal-main-card'>
      <div className='inner-goal-card'>
        <h6>{moment().format("h:mm")}</h6>
        <h5>Goals</h5>
        <div className='goal-sub-card'>
          <div className='goal-card'>
            <h1>
              <CircularProgressbar
                value={percentage}
                text={`${percentage}%`}
                style={{ fontSize: '18px' }}
              />
            </h1>
          </div>
        </div>
        <h6>4 goals to do</h6>
        <div className='goal-dots'>
          <HiDotsHorizontal />
        </div>
      </div>
    </div>
  );
};

export default GoalCard;
