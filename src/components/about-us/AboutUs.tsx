import React from 'react';
import aboutUsPreview from '../../assets/images/home-page/about-us-preview.png';
import BaseButton from '../ui/base-button/BaseButton';
import './AboutUs.css';

const AboutUs = (): React.ReactElement => {
  return (
    <div className="about-us">
      <div className="game-rules">
        <h1 className="game-rules__title">Как проходят игры?</h1>
        <img src={aboutUsPreview} className="game-rules__preview-img" />
        <span>
          Командная игра победить в которой помогут эрудиция логика и сообразительность. отгадай
          мелодию - хороший способ командная игра победить в которой помогут эрудиция логика и
          сообразительность
        </span>
        <h2>Нет команды?</h2>
        <span>Не проблема - регистрируйся на игру, а мы найдем команду!</span>
        <BaseButton title="Регистрация на игру" />
      </div>

      <div className="infographic-block">Блок с инфографикой</div>

      <div className="game-rules-carousel">Карусель с правилами</div>
    </div>
  );
};

export default AboutUs;
