import React, { type FC } from 'react';
import GameRegistrationButton from '../../ui/game-reg-button/GameRegistrationButton';
import './FutureGame.css';
import { ReactComponent as LocationImg } from '../../../assets/images/future-game/Location.svg';
import { ReactComponent as PriceImg } from '../../../assets/images/future-game/Ticket.svg';
import DateInfoBlock from './date-info-block/DateInfoBlock';
import { concatStyles } from '../../../utils/concat-styles';
import { type FutureGameProps } from './FutureGameProps';
import { Link } from 'react-router-dom';

const FutureGame: FC<FutureGameProps> = ({ game, className }): React.ReactElement => {
  const path = `/game-registration/${game.id}`;
  const scrollToTop = (): void => {
    window.scrollTo(0, 0);
  };

  return (
    <div className={className != null ? concatStyles('future-game', className) : 'future-game'}>
      <div className="future-game__title-block">
        <h3 className="future-game__title">{game.gameName}</h3>
        <DateInfoBlock
          className={'future-game__date'}
          dateInfo={game.gameDate}
          gameTime={game.gameTime}
          gameNumber={game.id}
        />
      </div>
      <div className="future-game__description-block">
        <div className="future-game__description">
          <div className="future-game__main-description">
            <div className="future-game__place">
              <LocationImg />
              <span>{game.gameLocationName}</span>
            </div>
            <div className="future-game__price">
              <PriceImg />
              <span>{game.priceValue}</span>
              <span>р</span>
            </div>
          </div>
          <address className="future-game__address">{game.address}</address>
        </div>
      </div>
      <div>
        <Link to={path}>
          <GameRegistrationButton onClick={scrollToTop} />
        </Link>
      </div>
    </div>
  );
};

export default FutureGame;
