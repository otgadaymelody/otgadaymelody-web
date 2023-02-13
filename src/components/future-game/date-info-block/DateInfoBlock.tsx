import React from 'react';
import './DateInfoBlock.css';

const DateInfoBlock = (): React.ReactElement => {
  return (
    <div className="date-info-block">
      <div className="date-info-block__date-block">
        <span className="date-info-block__day">Day</span>
        <span className="date-info-block__month">Month</span>
      </div>
      <div className="date-info-block__time-block">
        <span className="date-info-block__time">Time</span>
        <span className="date-info-block__day-of-week">DayOfWeek</span>
      </div>
    </div>
  );
};

export default DateInfoBlock;
