import React, { type FC } from 'react';
import GameRegistrationButton from '../../ui/game-reg-button/GameRegistrationButton';
import './FutureGame.css';
import { ReactComponent as LocationImg } from '../../../assets/images/future-game/Location.svg';
import { ReactComponent as PriceImg } from '../../../assets/images/future-game/Ticket.svg';
import DateInfoBlock from './date-info-block/DateInfoBlock';
import { concatStyles } from '../../../utils/concat-styles';
import { type FutureGameProps } from './FutureGameProps';

const FutureGame: FC<FutureGameProps> = ({ game, className, ...props }): React.ReactElement => {
  const onButtonClickHandler = (): void => {
    window.location.href = 'https://vk.com/wall-164712588_7623';
  };

  return (
    <div className={className ? concatStyles('future-game', className) : 'future-game'}>
      <div className="future-game__title-block">
        <div className="future-game__title">{game.gameName}</div>
        <DateInfoBlock
          className={'future-game__date'}
          dateInfo={game.gameDate}
          gameTime={game.gameTime}
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
              <span>{game.gameBasePrice}</span>
              <span>{game.gameCurrencyPrice === 'rub' ? 'р' : ''}</span>
            </div>
          </div>
          <address className="future-game__address">
            {game.gameAddress.street}, {game.gameAddress.building}
          </address>
        </div>
      </div>
      <div>
        <GameRegistrationButton onClick={onButtonClickHandler} />
      </div>
    </div>
  );
};

export default FutureGame;
