import React, { type FC } from 'react';
import './GameInfographicItem.css';
import contentBgImg from '../../../../assets/images/home-page/upcoming-game/game-infographic/bg-red.svg';
import { type GameInfographicItemProps } from './GameInfographicItem.interface';

const GameInfographicItem: FC<GameInfographicItemProps> = ({ title, path }): React.ReactElement => {
  return (
    <div className="game-infographic-item">
      <img className="game-infographic-item__mediator" src={path} />
      <div className="game-infographic-item__content">
        <span className="game-infographic-item__description">{title || ''}</span>
        <img className="game-infographic-item__description-bg" src={contentBgImg} />
      </div>
    </div>
  );
};

export default GameInfographicItem;
