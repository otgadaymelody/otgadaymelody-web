import React, { type FC } from 'react';
import './DateInfoBlock.css';
import { type DateInfoBlockProps } from './DateInfoBlockProps';
import { dateReformatted } from '../../../../utils/dateReformatted';
import badge1_1 from '@assets/images/future-game/badge1-1.svg';
import badge1_2 from '@assets/images/future-game/badge1-2.svg';
import badge2_1 from '@assets/images/future-game/badge2-1.svg';
import badge2_2 from '@assets/images/future-game/badge2-2.svg';

const DateInfoBlock: FC<DateInfoBlockProps> = ({
  dateInfo,
  gameTime,
  className,
  gameNumber,
  ...props
}): React.ReactElement => {
  const fullDate = dateReformatted(dateInfo);
  const oddGameNumberCount = gameNumber && gameNumber > 0 && gameNumber % 2 === 0;
  const evenGameNumberCount = gameNumber && gameNumber > 0 && gameNumber % 2 !== 0;

  return (
    <div className={className ? `${className} date-info-block` : 'date-info-block'}>
      {oddGameNumberCount && (
        <>
          <img className="date-info-block__badge date-info-block__badge_left" src={badge2_1} />
          <img className="date-info-block__badge date-info-block__badge_right" src={badge2_2} />
        </>
      )}

      {evenGameNumberCount && (
        <>
          <img className="date-info-block__badge date-info-block__badge_left" src={badge2_1} />
          <img className="date-info-block__badge date-info-block__badge_right" src={badge2_2} />
        </>
      )}
      <div
        className={
          className
            ? `${className}-block date-info-block__date-block`
            : 'date-info-block__date-block'
        }
      >
        <span
          className={className ? `${className}-day date-info-block__day` : 'date-info-block__day'}
        >
          {fullDate.date}
        </span>
        <span
          className={
            className ? `${className}-month date-info-block__month` : 'date-info-block__month'
          }
        >
          {fullDate.month}
        </span>
      </div>
      <div
        className={
          className
            ? `${className}-time-block date-info-block__time-block`
            : 'date-info-block__time-block'
        }
      >
        <span
          className={
            className ? `${className}-time date-info-block__time` : 'date-info-block__time'
          }
        >
          {gameTime}
        </span>
        <span
          className={
            className
              ? `${className}-day-of-week date-info-block__day-of-week`
              : 'date-info-block__day-of-week'
          }
        >
          {fullDate.weekDay}
        </span>
      </div>
    </div>
  );
};

export default DateInfoBlock;
