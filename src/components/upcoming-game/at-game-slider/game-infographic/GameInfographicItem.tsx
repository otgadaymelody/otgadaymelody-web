import React, { type FC } from 'react';
import './GameInfographicItem.css';
import mediatorImg from '../../../../assets/images/home-page/upcoming-game/game-infographic/mediator-1.svg';
import contentBgImg from '../../../../assets/images/home-page/upcoming-game/game-infographic/bg-red.svg';
import { type GameInfographicItemProps } from './GameInfographicItem.interface';

const GameInfographicItem: FC<GameInfographicItemProps> = ({ title }): React.ReactElement => {
  return (
    <div className="game-infographic-item">
      <img className="game-infographic-item__mediator" src={mediatorImg} />
      <div className="game-infographic-item__content">
        <span className="game-infographic-item__description">{title || ''}</span>
        <img className="game-infographic-item__description-bg" src={contentBgImg} />
      </div>
    </div>
  );
};

export default GameInfographicItem;
