import React, { type FC } from 'react';
import GamesSwitch from './games-switch/GamesSwitch';
import BaseButton from '../../ui/base-button/BaseButton';
import FranciseeGamesTable from './franchisee-games-table/FranchiseeGamesTable';
import './FranchiseeGames.css';

const FranciseeGames: FC = () => {
  return (
    <section className="franchisee-games">
      <div className="franchisee-games__bar">
        <h2 className="franchisee-games__title">Игры</h2>
        <GamesSwitch />
        <BaseButton title="Добавить игру" />
      </div>
      <FranciseeGamesTable />
    </section>
  );
};

export default FranciseeGames;
