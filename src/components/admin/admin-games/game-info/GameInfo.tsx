import React from 'react';
import './GameInfo.css';
import GameData from './game-data/GameData';
import TeamBidsBlock from './team-bids-block/TeamBidsBlock';

const GameInfo = (): React.ReactElement => {
  return (
    <article className="game-info">
      <div className="game-info__leftblock">
        <GameData />
        <div className="game-info__photos">
          <h3 className="game-info__title">Фотоотчет</h3>
          <div className="game-info__block">Добавить фотоотчет</div>
        </div>
      </div>

      <TeamBidsBlock />
    </article>
  );
};

export default GameInfo;