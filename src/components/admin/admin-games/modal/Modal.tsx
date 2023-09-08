import React, { type FC, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import './Modal.css';

interface ModalProps {
  showModal: boolean;
  children: any;
  onClose?: () => void;
}

const Modal: FC<ModalProps> = ({ showModal, children, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      const { target } = event;

      if (target instanceof Node && modalRef.current === target) {
        onClose?.();
      }
    };

    const handleEscapePress = (event: KeyboardEvent): void => {
      if (event.key === 'Escape') {
        onClose?.();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('click', handleClickOutside);
    document.addEventListener('keydown', handleEscapePress);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('keydown', handleEscapePress);
    };
  }, [onClose]);

  if (!showModal) {
    return null;
  }

  return createPortal(
    <div className="modal" ref={modalRef}>
      {children}
    </div>,
    document.body,
  );
};

export default Modal;
