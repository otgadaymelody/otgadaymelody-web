import React, { type FC } from 'react';
import './GameRegistrationButton.css';

interface GameRegistrationButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title?: string;
}

const GameRegistrationButton: FC<GameRegistrationButtonProps> = ({
  children,
  title,
  ...props
}): React.ReactElement => {
  return (
    <button {...props} className="game-reg-btn">
      {/* {icon && } */}
      {title ? `${title}` : 'Регистрация на игру'}
    </button>
  );
};

export default GameRegistrationButton;
