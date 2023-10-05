import React, { useState, type FC, useCallback, useEffect } from 'react';
import GamesSwitch from './games-switch/GamesSwitch';
import BaseButton from '../../ui/base-button/BaseButton';
import AdminGamesTable from './admin-games-table/AdminGamesTable';
import Modal from './modal/Modal';
import ModalContent from './modal/ModalContent';
import { type GameAdmin, type SelectedOptions } from './admin-games-table/AdminGamesTableProps';
import './AdminGames.css';
import axios from 'axios';

const AdminGames: FC = () => {
  const [showModal, setShowModal] = useState(false);

  const [games, setGames] = useState([] as GameAdmin[]);

  const [gameToEdit, setGameToEdit] = useState<null | GameAdmin>();

  const [selected, setSelected] = useState<SelectedOptions>('upcoming');

  const handleChange = (value: SelectedOptions): void => {
    setSelected(value);
  };

  const editGame = (id: number) => {
    const gameToEdit = games.find((game) => game.id == String(id));
    setGameToEdit(gameToEdit);
    setShowModal(true);
    document.body.style.overflow = 'hidden';
  };

  const handleModalOpen = useCallback(() => {
    setShowModal(true);
    document.body.style.overflow = 'hidden';
  }, [showModal]);

  const handleModalClose = useCallback(() => {
    setShowModal(false);
    document.body.style.overflow = '';
  }, [showModal]);

  const handleClickOutside = useCallback(() => {
    setShowModal(false);
    document.body.style.overflow = '';
  }, [showModal]);

  useEffect(() => {
    if (selected === 'past') {
      axios
        .get('/api/admin/game/list/past')
        .then((res) => {
          setGames(res.data as unknown as GameAdmin[]);
        })
        .catch((err) => {
          if (err.response.status === 403) {
            // redirect to 403 page
            window.location.href = '/user-auth-admin';
          }
          console.log('2', err);
        });
    } else {
      axios
        .get('/api/admin/game/list/future')
        .then((res) => {
          setGames(res.data as unknown as GameAdmin[]);
        })
        .catch((err) => {
          if (err.response.status === 403) {
            // redirect to 403 page
            window.location.href = '/user-auth-admin';
          }
        });
    }
  }, [selected]);

  return (
    <section className="admin-games">
      <div className="admin-games__bar">
        <h2 className="admin-games__title">Игры</h2>
        <GamesSwitch onChange={handleChange} selected={selected} />
        <BaseButton title="Добавить игру" onClick={handleModalOpen} />
        <Modal showModal={showModal} onClose={handleModalClose} clickOutside={handleClickOutside}>
          <ModalContent setShowModal={setShowModal} gameToEdit={gameToEdit} />
        </Modal>
      </div>
      {games?.length && (
        <AdminGamesTable selected={selected} games={games} editGame={(id) => editGame(id)} />
      )}
    </section>
  );
};

export default AdminGames;
