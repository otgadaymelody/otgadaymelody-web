import React, { type FC } from 'react';
import './FranchiseeGames.css';
import BaseButton from '../../ui/base-button/BaseButton';
import FranciseeGamesTable from './franchisee-games-table/FranchiseeGamesTable';

const FranciseeGames: FC = () => {
  return (
    <section className="franchisee-games">
      <div className="franchisee-games__bar bar">
        <div className="bar__wrapper">
          <h2 className="franchisee-games__title">Игры</h2>
          <div className="games-toggle-btn">
            <input type="radio" className="toggle-switch" />
          </div>
          <BaseButton title="Добавить игру" />
        </div>
      </div>
      <FranciseeGamesTable />
    </section>
  );
};

export default FranciseeGames;
