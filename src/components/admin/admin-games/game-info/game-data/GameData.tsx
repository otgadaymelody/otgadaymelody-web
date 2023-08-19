import React, { FC, useEffect, useState } from 'react';
import arrowBack from '@assets/images/admin/arrow-back.svg';
import './GameData.css';
// import axios from 'axios';

const GameData: FC = () => {
  //   const [gameData, setGameData] = useState();

  //   useEffect(() => {
  //     axios.get(`/api/admin/game-info?gameId=${gameId}`);
  //   });

  return (
    <div className="game-info__gamedata gamedata">
      <div className="gamedata__top">
        <button className="gamedata__back-btn">
          <img src={arrowBack} alt="стрелка влево" />
        </button>
        <h3 className="gamedata__title">Информация об игре</h3>
      </div>
      <div className="gamedata__container">
        <p>Караоке Эдишн</p>
        <p>дата</p>
        <p>Название игры</p>
        <p>Новогодний Караоке Эдишн</p>
        <p>Описание игры</p>
        <p>Встречаем Новый 2023 Год самыми известными и любимыми караоке хитами!</p>
        <p>Место проведения</p>
        <p>Бар “Пивзавод”</p>
        <p>Зеленский Съезд, 10</p>
        <p>Стоимость за одного игрока</p>
        <p>500 р</p>
        <p>Мест на игре</p>
        <progress id="seats-progress" value={0.25}></progress>
        <p>126 / 500</p>
        <p>Зарегистрировано</p>
        <span>8 команд</span>
        <span>126 человека</span>
      </div>
    </div>
  );
};

export default GameData;
