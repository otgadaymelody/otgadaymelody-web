import React, { useState, type FC, useCallback } from 'react';
import GamesSwitch from './games-switch/GamesSwitch';
import BaseButton from '../../ui/base-button/BaseButton';
import AdminGamesTable from './admin-games-table/AdminGamesTable';
import Modal from './modal/Modal';
import ModalContent from './modal/ModalContent';
import './AdminGames.css';

const AdminGames: FC = () => {
  const [showModal, setShowModal] = useState(false);

  const handleModalOpen = useCallback(() => {
    setShowModal(true);
  }, [showModal]);

  const handleModalClose = useCallback(() => {
    setShowModal(false);
  }, [showModal]);

  return (
    <section className="admin-games">
      <div className="admin-games__bar">
        <h2 className="admin-games__title">Игры</h2>
        <GamesSwitch />
        <BaseButton title="Добавить игру" onClick={handleModalOpen} />
        <Modal showModal={showModal} onClose={handleModalClose}>
          <ModalContent setShowModal={setShowModal} />
        </Modal>
      </div>
      <AdminGamesTable />
    </section>
  );
};

export default AdminGames;
