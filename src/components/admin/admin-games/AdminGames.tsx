import React, { type FC } from 'react';
import GamesSwitch from './games-switch/GamesSwitch';
import BaseButton from '../../ui/base-button/BaseButton';
import AdminGamesTable from './admin-games-table/AdminGamesTable';
import './AdminGames.css';

const AdminGames: FC = () => {
  return (
    <section className="admin-games">
      <div className="admin-games__bar">
        <h2 className="admin-games__title">Игры</h2>
        <GamesSwitch />
        <BaseButton title="Добавить игру" />
      </div>
      <AdminGamesTable />
    </section>
  );
};

export default AdminGames;
