import React, { type FC } from 'react';
import { type GameRulesSlideProps } from './GameRulesSlideProps';
import './GameRulesSlide.css';

const GameRulesSlide: FC<GameRulesSlideProps> = ({ title, description }): React.ReactElement => {
  return (
    <section className="game-rules-slide">
      <h1 className="game-rules-slide__title">{title}</h1>
      <p className="game-rules-slide__description">{description}</p>
    </section>
  );
};

export default GameRulesSlide;
