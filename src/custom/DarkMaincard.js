import React from "react";
import "../index.scss";
import CalendarCard from "../components/CalendarCard";
import ClockCard from "../components/Clockcard";

const DarkMainCard = (type) => {
  return (
    <div className="dark-main-card">
      <ClockCard />
      <CalendarCard />
    </div>
  );
};

export default DarkMainCard;
