import React, { FC, useEffect, useState } from 'react';
import arrowBack from '@assets/images/admin/arrow-back.svg';
import './GameData.css';
// import axios from 'axios';

const GameData= (): React.ReactElement => {
  return (
    <div className="game-info__gamedata gamedata">
      <div className="gamedata__top">
        <button className="gamedata__back-btn">
          <img src={arrowBack} alt="стрелка влево" />
        </button>
        <h3 className="gamedata__title">Информация об игре</h3>
      </div>
      <div className="gamedata__container">
        <dl>
          <dt>Караоке Эдишн</dt>
          <dd>дата</dd>
          <dt>Название игры</dt>
          <dd>Новогодний Караоке Эдишн</dd>
          <dt>Описание игры</dt>
          <dd>Встречаем Новый 2023 Год самыми известными и любимыми караоке хитами!</dd>
          <dt>Место проведения</dt>
          <dd>Бар “Пивзавод”</dd>
          <dd>Зеленский Съезд, 10</dd>
          <dt>Стоимость за одного игрока</dt>
          <dd>500 р</dd>
          <dt>Мест на игре</dt>
          <progress id="seats-progress" value={0.25}></progress>
          <dd>126 / 500</dd>
          <dt>Зарегистрировано</dt>
          <dd>
            <span>8 команд</span>
            <span>126 человека</span>
          </dd>
        </dl>
      </div>
    </div>
  );
};

export default GameData;
