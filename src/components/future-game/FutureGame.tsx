import React from 'react';
import GameRegistrationButton from '../ui/game-reg-button/GameRegistrationButton';
import './FutureGame.css';
import { ReactComponent as LocationImg } from '../../assets/images/future-game/Location.svg';
import { ReactComponent as PriceImg } from '../../assets/images/future-game/Ticket.svg';
import DateInfoBlock from './date-info-block/DateInfoBlock';
import { concatStyles } from '../../utils/concat-styles';

const FutureGame = (props: any): React.ReactElement => {
  return (
    <div className={concatStyles('future-game', props.className)}>
      <div className="future-game__title-block">
        <div className="future-game__title">Title Game</div>
        <DateInfoBlock />
      </div>
      <div className="future-game__description-block">
        <div className="future-game__description">
          <div className="future-game__main-description">
            <div className="future-game__place">
              <LocationImg />
              <span>Price</span>
            </div>
            <div className="future-game__price">
              <PriceImg />
              <span>$$$</span>
            </div>
          </div>
          <div className="future-game__address">Address</div>
        </div>
        <GameRegistrationButton icon={false} />
      </div>
    </div>
  );
};

export default FutureGame;
