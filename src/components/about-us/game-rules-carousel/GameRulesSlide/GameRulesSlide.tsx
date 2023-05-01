import React, { type FC } from 'react';
import { type GameRulesSlideProps } from './GameRulesSlideProps';
import './GameRulesSlide.css';

const GameRulesSlide: FC<GameRulesSlideProps> = ({ title, description }): React.ReactElement => {
  const newDesc = description.split('\n');
  return (
    <section className="game-rules-slide">
      <h1 className="game-rules-slide__title">{title}</h1>
      {newDesc.map((item, index) => (
        <p className="game-rules-slide__description" key={index}>
          {item}
        </p>
      ))}
    </section>
  );
};

export default GameRulesSlide;
