import React, { type FC } from 'react';
import useDeviceType from '../../../hooks/useDeviceType';
import './GameInformationBanner.css';
import { ReactComponent as LocationImg } from '../../../assets/images/home-page/upcoming-game/Location.svg';
import { ReactComponent as PriceImg } from '../../../assets/images/home-page/upcoming-game/Ticket.svg';
import GameButton from '@components/ui/game-button/GameButton';
import { type GameInformationBannerProps } from '@components/upcoming-game/UpcomingGameProps';
import DateInfoBlock from '@components/future-games-list/future-game/date-info-block/DateInfoBlock';
import { Link } from 'react-router-dom';

const GameInformationBanner: FC<GameInformationBannerProps> = ({
  game,
  className,
  ...props
}): React.ReactElement => {
  const deviceType = useDeviceType();
  const isMobile = deviceType === 'mobile';
  const path = `/game-registration/${game.id}`;

  return (
    <div className="game-information-banner">
      <div className="game-information-banner__info">
        <div className="game-information-banner__date-place">
          <DateInfoBlock
            dateInfo={game.gameDate}
            gameTime={game.gameTime}
            className="game-information-banner__date-info"
            gameNumber={0}
          />
          <hr />
          <div className="game-information-banner__price">
            <div className="game-information-banner__price-amount">
              <PriceImg />
              <span>{game.gameBasePrice}</span>
              <span>{game.gameCurrencyPrice === 'rub' ? 'р' : ''}</span>
            </div>
            <span className="game-information-banner__price-person">С человека</span>
          </div>
        </div>
        {!isMobile && <hr />}
        <div className="game-information-banner__place">
          <div className="game-information-banner__location">
            <LocationImg />
            <span>{game.gameLocationName}</span>
          </div>
          <address className="game-information-banner__address">
            {game.gameCityName}, {game.gameAddress.street}, {game.gameAddress.building}
          </address>
        </div>
      </div>
      <div className="game-information-banner__buttons">
        <GameButton styles="game-information-banner__btn-more" title="Подробнее" grey />
        <Link to={path}>
          <GameButton
            styles="game-information-banner__btn-registration"
            title="Регистрация на игру"
          />
        </Link>
      </div>
    </div>
  );
};

export default GameInformationBanner;
