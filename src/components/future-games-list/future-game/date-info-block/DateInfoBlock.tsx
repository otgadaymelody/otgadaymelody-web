import React, { type FC } from 'react';
import './DateInfoBlock.css';
import { type DateInfoBlockProps } from './DateInfoBlockProps';

const DateInfoBlock: FC<DateInfoBlockProps> = ({ dateInfo, ...props }): React.ReactElement => {
  return (
    <div className="date-info-block">
      <div className="date-info-block__date-block">
        <span className="date-info-block__day">{dateInfo.day}</span>
        <span className="date-info-block__month">{dateInfo.month}</span>
      </div>
      <div className="date-info-block__time-block">
        <span className="date-info-block__time">{dateInfo.time}</span>
        <span className="date-info-block__day-of-week">{dateInfo.dayOfWeek}</span>
      </div>
    </div>
  );
};

export default DateInfoBlock;
