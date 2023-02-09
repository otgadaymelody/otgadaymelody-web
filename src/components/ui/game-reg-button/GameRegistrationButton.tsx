import React, { type FC } from 'react';
import './GameRegistrationButton.css';

interface GameRegistrationButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: boolean;
}

const GameRegistrationButton: FC<GameRegistrationButtonProps> = ({
  children,
  ...props
}): React.ReactElement => {
  return (
    <button {...props} className="game-reg-btn">
      {/* {icon && } */}
      Регистрация на игру
    </button>
  );
};

export default GameRegistrationButton;
