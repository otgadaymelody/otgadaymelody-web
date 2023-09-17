import React, { useCallback, type MouseEventHandler } from 'react';
import './DropDownMenu.css';

interface DropDownBtnsType {
  nameBtn: string;
  btnColor: string;
}

interface DropDownMenuPropsType {
  btns: DropDownBtnsType[];
  onClick: MouseEventHandler;
}

const DropDownMenu: React.FC<DropDownMenuPropsType> = ({
  btns,
  onClick,
}: DropDownMenuPropsType) => {
  const clickToButtonMove = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
      onClick(e);
    },
    [],
  );
  return (
    <div className={`dropdown-menu__wrapper`}>
      {btns.map((btn: DropDownBtnsType, index: number) => {
        return (
          <button
            onMouseDown={(e) => {
              clickToButtonMove(e);
            }}
            key={index}
            className={`dropdown-menu__button dropdown-menu__button_${btn.btnColor}`}
          >
            {btn.nameBtn}
          </button>
        );
      })}
    </div>
  );
};

export default DropDownMenu;
