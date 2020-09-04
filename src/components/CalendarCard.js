import React from "react";

/* core */
import moment from "moment";
import { HiDotsHorizontal } from "react-icons/hi";

/* style */
import "../index.scss";

const CalendarCard = () => {
  return (
    <div className="calendar-main-card">
      <div className="inner-calendar-card">
        <h6>{moment().format("h:mm")}</h6>
        <h5>Calendar</h5>
        <div className="calendar-sub-cards">
          <div className="calendar-card-card1">
            <h6 style={{ fontWeight: "bolder", fontSize: "initial" }}>2</h6>
            <hr class="solid"></hr>
            <h6 style={{ fontWeight: "100", fontSize: "xx-small" }}>work</h6>
          </div>
          <div className="calendar-card-card2">
            <h6 style={{ fontWeight: "bolder", fontSize: "initial" }}>3</h6>
            <hr class="solid"></hr>
            <h6 style={{ fontWeight: "100", fontSize: "xx-small" }}>
              Personal
            </h6>
          </div>
        </div>
        <h6>-> Meeting 08:15</h6>
        <div className="calendar-dots">
          <HiDotsHorizontal />
        </div>
      </div>
    </div>
  );
};

export default CalendarCard;
