import React from 'react';
import DateInfoBlock from '../../future-games-list/future-game/date-info-block/DateInfoBlock';
import './GameInformationBanner.css';
import { ReactComponent as LocationImg } from '../../../assets/images/home-page/upcoming-game/Location.svg';
import { ReactComponent as PriceImg } from '../../../assets/images/home-page/upcoming-game/Ticket.svg';

const GameInformationBanner = (): React.ReactElement => {
  const dateInfo = {
    day: '12',
    month: 'Апр',
    time: '19:00',
    dayOfWeek: 'Четверг',
  };
  return (
    <div className="game-information-banner">
      <DateInfoBlock dateInfo={dateInfo} className="game-information-banner__date-info" />
      <div className="game-information-banner__game-description">
        <div className="game-information-banner__main-description">
          <div className="game-information-banner__place">
            <LocationImg />
            <span>Пивзавод</span>
          </div>
          <div className="game-information-banner__price">
            <PriceImg />
            <span>500р</span>
          </div>
        </div>
        <address className="game-information-banner__address">Зеленский съезд</address>
      </div>
    </div>
  );
};

export default GameInformationBanner;
