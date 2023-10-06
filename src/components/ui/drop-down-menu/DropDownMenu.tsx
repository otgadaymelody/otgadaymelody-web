import React, { useCallback, type MouseEventHandler } from 'react';
import './DropDownMenu.css';

interface DropDownBtnsType {
  nameBtn: string;
  btnColor: string;
}

interface DropDownMenuPropsType {
  btns?: DropDownBtnsType[];
  onClick: MouseEventHandler;
  editGame: () => unknown;
}

const DropDownMenu: React.FC<DropDownMenuPropsType> = ({
  btns,
  onClick,
  editGame,
}: DropDownMenuPropsType) => {
  const clickToButtonMove = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
      onClick(e);
    },
    [],
  );
  return (
    <div className={`dropdown-menu__wrapper`}>
      <button
        onMouseDown={() => {
          editGame();
        }}
        className={`dropdown-menu__button dropdown-menu__button_black`}
      >
        Редактировать
      </button>

      <button
        onMouseDown={(e) => {
          alert('Пока нельзя удалить игру! Но вы можете скрыть ее для пользователей');
          clickToButtonMove(e);
        }}
        className={`dropdown-menu__button dropdown-menu__button_pink`}
      >
        Удалить
      </button>
    </div>
  );
};

export default DropDownMenu;
