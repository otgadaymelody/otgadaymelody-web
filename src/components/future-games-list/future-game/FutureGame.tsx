import React, { type FC } from 'react';
import GameRegistrationButton from '../../ui/game-reg-button/GameRegistrationButton';
import './FutureGame.css';
import { ReactComponent as LocationImg } from '../../../assets/images/future-game/Location.svg';
import { ReactComponent as PriceImg } from '../../../assets/images/future-game/Ticket.svg';
import DateInfoBlock from './date-info-block/DateInfoBlock';
import { concatStyles } from '../../../utils/concat-styles';
import { type FutureGameProps } from './FutureGameProps';
import { useNavigate } from 'react-router-dom';

const FutureGame: FC<FutureGameProps> = ({ game, className, ...props }): React.ReactElement => {
  const navigate = useNavigate();
  const onButtonClickHandler = (): void => {
    window.location.href = 'https://vk.com/wall-164712588_7382';
  };

  return (
    <div className={className ? concatStyles('future-game', className) : 'future-game'}>
      <div className="future-game__title-block">
        <div className="future-game__title">{game.title}</div>
        <DateInfoBlock dateInfo={game.dateInfo} />
      </div>
      <div className="future-game__description-block">
        <div className="future-game__description">
          <div className="future-game__main-description">
            <div className="future-game__place">
              <LocationImg />
              <span>{game.location}</span>
            </div>
            <div className="future-game__price">
              <PriceImg />
              <span>{game.price}</span>
            </div>
          </div>
          <address className="future-game__address">{game.address}</address>
        </div>
        <GameRegistrationButton icon={false} onClick={onButtonClickHandler} />
      </div>
    </div>
  );
};

export default FutureGame;
