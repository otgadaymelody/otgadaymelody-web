import React, { type FC, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import './Modal.css';

interface ModalProps {
  showModal: boolean;
  children: React.ReactNode;
  clickEscape?: () => void;
  clickOutside?: () => void;
}

const Modal: FC<ModalProps> = ({ showModal, children, clickEscape, clickOutside }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      const { target } = event;

      if (target instanceof Node && modalRef.current === target) {
        clickOutside?.();
      }
    };

    const handleEscapePress = (event: KeyboardEvent): void => {
      if (event.key === 'Escape') {
        clickEscape?.();
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
  }, [clickEscape, clickOutside]);

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
