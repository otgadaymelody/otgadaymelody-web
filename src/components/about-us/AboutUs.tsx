import React from 'react';
import aboutUsPreview from '../../assets/images/home-page/about-us-preview.png';
import BaseButton from '../ui/base-button/BaseButton';
import './AboutUs.css';

const AboutUs = (): React.ReactElement => {
  const regBtnStyles = {
    buttonForm: 'game-rules__reg-btn',
    buttonTitle: 'game-rules__reg-btn-title',
  };

  return (
    <div className="about-us">
      <div className="game-rules">
        <h1 className="game-rules__title">Как проходят игры?</h1>
        <img src={aboutUsPreview} className="game-rules__preview-img" />
        <span className="game-rules__description">
          Командная игра победить в которой помогут эрудиция логика и сообразительность. отгадай
          мелодию - хороший способ командная игра победить в которой помогут эрудиция логика и
          сообразительность
        </span>
        <h2 className="game-rules__subtitle">Нет команды?</h2>
        <span className="game-rules__description">
          Не проблема - регистрируйся на игру, а мы найдем команду!
        </span>
        <BaseButton title="Регистрация на игру" styles={regBtnStyles} />
      </div>

      <div className="infographic-block">Блок с инфографикой</div>

      <div className="game-rules-carousel">Карусель с правилами</div>
    </div>
  );
};

export default AboutUs;
