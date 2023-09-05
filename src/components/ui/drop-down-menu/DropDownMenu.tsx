import React, { type MouseEventHandler } from 'react'
import './DropDownMenu.css'

interface DropDownBtnsType {
    nameBtn: string;
    btnColor: string;
}

interface DropDownMenuPropsType {
    btns: DropDownBtnsType[];
    stateVisible: string;
    click: MouseEventHandler;
}

const DropDownMenu: React.FC<DropDownMenuPropsType> = ({btns, stateVisible, click  }: DropDownMenuPropsType) => {

    const clickToButtonMove = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
        click(e)
    }
  return (
        <div className={`dropdown-menu__wrapper dropdown-menu__wrapper_${stateVisible}`} >
            {btns.map((btn: DropDownBtnsType, index: number) => {
            return <button onClick={e=> {clickToButtonMove(e)}} key={index} className={`dropdown-menu__button dropdown-menu__button_${btn.btnColor}`}>
                {btn.nameBtn}
            </button>
            })}
        </div>
  )
}

export default DropDownMenu