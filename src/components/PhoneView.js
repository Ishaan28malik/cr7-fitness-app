import React from "react";

/* core */
import iphone from "../assets/IPhone-X.svg";
import AwesomeSlider from "react-awesome-slider";
import GoalCard from "./GoalCard";
import CalendarCard from "./CalendarCard";
import ClockCard from "./Clockcard";

/* style */
import "../index.scss";
import "react-awesome-slider/dist/styles.css";
import withAutoplay from "react-awesome-slider/dist/autoplay";

const AutoplaySlider = withAutoplay(AwesomeSlider);

// Need to add dark theme mode in Mobile View

const PhoneView = (darkMode) => {
  return (
    <div className="phone-view">
      <div
        style={{
          position: "relative",
          display: "inline-block",
        }}
      >
        <img
          align="right"
          valign="top"
          alt="IPhone X"
          style={{
            width: "500px",
            height: "470px",
            marginLeft: "300px",
            marginTop: "30px",
            position: "relative",
          }}
          src={iphone}
        />
      </div>
      <div
        style={{
          position: "absolute",
          marginLeft: "-350px",
          marginTop: "-370px",
        }}
      >
        <div className="light-main-card">
          <AutoplaySlider
            play={true}
            autoPlay
            style={{
              width: "200px",
              height: "300px",
              marginLeft: "800px",
            }}
            cancelOnInteraction={false}
            interval={1000}
          >
            <div>
              <ClockCard />
            </div>
            <div>
              <CalendarCard />
            </div>
            <div>
              <GoalCard />
            </div>
          </AutoplaySlider>
        </div>
      </div>
    </div>
  );
};

export default PhoneView;
