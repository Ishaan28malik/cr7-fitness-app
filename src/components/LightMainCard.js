import React from "react";

/* core */
import GoalCard from "./GoalCard";
import CalendarCard from "./CalendarCard";
import ClockCard from "./Clockcard";

import { FiActivity } from "react-icons/fi";

/* style */
import "../index.scss";

const LightMainCard = (darkMode) => {
  return (
    <>
      <div className="Navbar">
        <div className="navbar-middle">

          <div
            style={{
              margin: "auto",
            }}
          >
            <FiActivity /> Fitness Tracker
          </div>
          <div className="light-main-card">
            <ClockCard />
            <CalendarCard />
            <GoalCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default LightMainCard;
