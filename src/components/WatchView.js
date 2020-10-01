import React from "react";

/* core */
import withAutoplay from "react-awesome-slider/dist/autoplay";
import AwesomeSlider from "react-awesome-slider";
import GoalCard from "./GoalCard";
import CalendarCard from "./CalendarCard";
import ClockCard from "./Clockcard";
import applewatch2 from "../assets/apple-watch-2.png";

/* style */
import "../index.scss";
import "react-awesome-slider/dist/styles.css";

const AutoplaySlider = withAutoplay(AwesomeSlider);

// Need to add dark theme mode in Watch View

const WatchView = (darkMode) => {
  return (
    <div className="watch-view">
      <div
        style={{
          position: "relative",
          display: "inline-block",
        }}
      >
        <img
          align="right"
          valign="top"
          alt="Apple Watch"
          style={{
            width: "900px",
            height: "570px",
            marginLeft: "-250px",
            marginTop: "-550px",
            position: "relative",
          }}
          src={applewatch2}
        />
      </div>
      <div
        style={{
          position: "absolute",
          marginLeft: "-692px",
          marginTop: "-385px",
        }}
      >
        <div className="light-main-card">
          <AutoplaySlider
            play={true}
            autoPlay
            style={{
              width: "185px",
              height: "170px",
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

export default WatchView;
