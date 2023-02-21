import React from 'react';
import './GameRulesCarousel.css';
import carouselImg01 from '../../../assets/images/home-page/game-rules-carousel/01.png';

const GameRulesCarousel = (): React.ReactElement => {
  return (
    <div className="game-rules-carousel">
      <div className="game-rules-carousel__image-block">
        <img className="game-rules-carousel__img" src={carouselImg01} />
      </div>
      <div className="game-rules-carousel__rules-block">
        <div className="game-rules-carousel__title">Музыкальное соревнование</div>
        <div className="game-rules-carousel__description">
          В одной игре соревнуется 20-40 команд от 4 до 15 человек <br />
          <br />
          Победившей считается та команда, игроки которой дали большее количество правильных
          ответов.
        </div>
      </div>
    </div>
  );
};

export default GameRulesCarousel;
