import React, { useState, type FC } from 'react';
import GamesSwitch from './games-switch/GamesSwitch';
import BaseButton from '../../ui/base-button/BaseButton';
import AdminGamesTable from './admin-games-table/AdminGamesTable';
import './AdminGames.css';

const AdminGames: FC = () => {
  const [selected, setSelected] = useState<string>('upcoming');

  const handleChange = () => {
    setSelected(selected);
  };

  return (
    <section className="admin-games">
      <div className="admin-games__bar">
        <h2 className="admin-games__title">Игры</h2>
        <GamesSwitch onChange={handleChange} selected={selected} />
        <BaseButton title="Добавить игру" />
      </div>
      <AdminGamesTable selected={selected} />
    </section>
  );
};

export default AdminGames;
