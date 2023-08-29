import React, { type FC } from 'react';
import closeIcon from '@assets/images/pop-up/close.svg';
import AddGame from '../add-game/AddGame';

interface Props {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalContent: FC<Props> = ({ setShowModal }) => {
  return (
    <div className="modal-content">
      <AddGame />
      <button className="modal-close-btn" onClick={() => setShowModal(false)}>
        <img src={closeIcon} alt="крестик" />
      </button>
    </div>
  );
};

export default ModalContent;
