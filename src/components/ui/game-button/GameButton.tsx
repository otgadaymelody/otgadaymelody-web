import React, { type FC } from 'react';
import { concatStyles } from '../../../utils/concat-styles';
import './GameButton.css';

interface GameButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title?: string;
  img?: string;
  styles?: string;
  href?: string;
  grey?: true;
}
const GameButton: FC<GameButtonProps> = ({
  title,
  img,
  styles,
  href,
  grey,
  ...props
}): React.ReactElement => {
  return (
    <button
      className={`game-btn${grey ? ' grey' : ''}${styles ? ` ${styles}` : ''}`}
      onClick={props.onClick ? props.onClick : () => {}}
      data-title={title}
    >
      {img && <img className="game-btn__image" src={img} alt="" />}
    </button>
  );
};

export default GameButton;
