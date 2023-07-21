import React from 'react';
import DateInfoBlock from '../../future-games-list/future-game/date-info-block/DateInfoBlock';
import GameRegistrationButton from '../../ui/game-reg-button/GameRegistrationButton';
import useDeviceType from '../../../hooks/useDeviceType';
import './GameInformationBanner.css';
import { ReactComponent as LocationImg } from '../../../assets/images/home-page/upcoming-game/Location.svg';
import { ReactComponent as PriceImg } from '../../../assets/images/home-page/upcoming-game/Ticket.svg';
import GameButton from '@components/ui/game-button/GameButton';

const GameInformationBanner = (): React.ReactElement => {
  const deviceType = useDeviceType();
  const isMobile = deviceType === 'mobile';
  const onButtonClickHandler = (): void => {
    window.location.href = 'https://vk.com/wall-164712588_7623';
  };
  const dateInfo = {
    day: '6',
    month: 'Янв',
    time: '19:00',
    dayOfWeek: 'Пятница',
  };
  const addressInfo = {
    location: 'Пивзавод',
    address: 'Зеленский Съезд, 10',
  };
  const price = 500;

  return (
    <div className="game-information-banner">
      <div className="game-information-banner__info">
        <div className="game-information-banner__date-place">
          <DateInfoBlock dateInfo={dateInfo} className="game-information-banner__date-info" />
          <hr />
          <div className="game-information-banner__price">
            <div>
              <PriceImg />
              <span>{price} р </span>
            </div>
            <span>С человека</span>
          </div>
        </div>
        {!isMobile && <hr />}
        <div className="game-information-banner__place">
          <div>
            <LocationImg />
            <span>{addressInfo.location}</span>
          </div>
          <address className="game-information-banner__address">{addressInfo.address}</address>
        </div>
      </div>
      <div className="game-information-banner__buttons">
        <GameButton styles="game-information-banner__btn-more" title="Подробнее" />
        <GameButton
          styles="game-information-banner__btn-registration"
          title="Регистрация на игру"
          onClick={onButtonClickHandler}
        />
      </div>
    </div>
  );
};

export default GameInformationBanner;
