import React from 'react';

/* core */
import mobile from '../assets/mobile.svg';
import iphone from '../assets/IPhone-X.svg';
import AwesomeSlider from 'react-awesome-slider';
import GoalCard from './GoalCard';
import CalenderCard from './CalenderCard';
import ClockCard from './Clockcard';


/* style */
import '../index.scss';
import 'react-awesome-slider/dist/styles.css';
import withAutoplay from 'react-awesome-slider/dist/autoplay';

const AutoplaySlider = withAutoplay(AwesomeSlider);

const PhoneView = (darkMode) => {
    return (
        <div>
            <div style={{
                position: 'relative',
                display: 'inline-block',
                // width: '300px',
                // height: '200px',
            }}>
                <img align="right" valign="top" style={{
                    width: '500px',
                    height: '470px',
                    // marginRight: '25vw',
                    marginLeft: '600px',
                    marginTop: '-220px',
                    position: 'relative'
                    // }} src={mobile} />
                }} src={iphone} />
            </div>
            <div style={{
                position: 'absolute',
                marginLeft: '-50px',
                marginTop: '-370px',
            }}>
                <div className='light-main-card'>
                    <AutoplaySlider
                        play={true}
                        autoPlay
                        style={{
                            width: '200px',
                            height: '300px',
                            marginLeft: '800px',
                        }}
                        cancelOnInteraction={false}
                        interval={1000}
                    >
                        <div><ClockCard /></div>
                        <div><CalenderCard /></div>
                        <div><GoalCard /></div>
                    </AutoplaySlider>
                </div>
            </div>
        </div>
    );
};

export default PhoneView;
