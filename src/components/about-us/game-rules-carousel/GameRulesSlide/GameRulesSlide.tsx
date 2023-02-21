import React, { type FC } from 'react';
import { type GameRulesSlideProps } from './GameRulesSlideProps';
import './GameRulesSlide.css';

const GameRulesSlide: FC<GameRulesSlideProps> = ({ title, description }): React.ReactElement => {
  return (
    <div className="game-rules-slide">
      <div className="game-rules-slide__title">{title}</div>
      <div className="game-rules-slide__description">{description}</div>
    </div>
  );
};

export default GameRulesSlide;
