import React, { useState, type FC, useCallback } from 'react';
import GamesSwitch from './games-switch/GamesSwitch';
import BaseButton from '../../ui/base-button/BaseButton';
import AdminGamesTable from './admin-games-table/AdminGamesTable';
import Modal from './modal/Modal';
import ModalContentCreateGameForm from './create-game/ModalContentCreateGameForm';
import { type SelectedOptions } from './admin-games-table/AdminGamesTableProps';
import './AdminGames.css';

const AdminGames: FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [selected, setSelected] = useState<SelectedOptions>('upcoming');

  const handleChange = (selected: SelectedOptions): void => {
    setSelected(selected);
  };

  const handleModalOpen = useCallback(() => {
    setShowModal(true);
    document.body.style.overflow = 'hidden';
  }, [showModal]);

  const handleClickEscape = useCallback(() => {
    setShowModal(false);
    document.body.style.overflow = '';
  }, [showModal]);

  const handleClickOutside = useCallback(() => {
    setShowModal(false);
    document.body.style.overflow = '';
  }, [showModal]);

  const handleModalClose = useCallback(() => {
    setShowModal(false);
    document.body.style.overflow = '';
  }, [showModal]);

  return (
    <section className="admin-games">
      <div className="admin-games__bar">
        <h2 className="admin-games__title">Игры</h2>
        <GamesSwitch onChange={handleChange} selected={selected} />
        <BaseButton title="Добавить игру" onClick={handleModalOpen} />
        <Modal
          showModal={showModal}
          clickEscape={handleClickEscape}
          clickOutside={handleClickOutside}
        >
          <ModalContentCreateGameForm clickCloseModal={handleModalClose} />
        </Modal>
      </div>
      <AdminGamesTable selected={selected} />
    </section>
  );
};

export default AdminGames;
