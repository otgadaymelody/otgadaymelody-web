import React from 'react';
import './GameInfo.css';
import GameData from './game-data/GameData';

const GameInfo = (): React.ReactElement => {
  return (
    <section className="game-info">
      <GameData />

      <div className="game-info__photos">
        <h3 className="game-info__title">Фотоотчет</h3>
        <div className="game-info__block">блок заявок</div>
      </div>

      <div className="game-info__requests">
        <h3 className="game-info__title">Заявки на игру</h3>
        <div className="game-info__block">блок заявок</div>
      </div>
    </section>
  );
};

export default GameInfo;
