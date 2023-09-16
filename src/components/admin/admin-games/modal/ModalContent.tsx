import React, { type FC } from 'react';
import closeIcon from '@assets/images/pop-up/close.svg';
import AddGame from '../add-game/AddGame';

interface ModalContentProps {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalContent: FC<ModalContentProps> = ({ setShowModal }) => {
  const handleClickCloseButton = () => {
    setShowModal(false);
    document.body.style.overflow = '';
  };

  return (
    <div className="modal-content">
      <AddGame />
      <button className="modal-close-btn" onClick={handleClickCloseButton}>
        <img src={closeIcon} alt="крестик" />
      </button>
    </div>
  );
};

export default ModalContent;
