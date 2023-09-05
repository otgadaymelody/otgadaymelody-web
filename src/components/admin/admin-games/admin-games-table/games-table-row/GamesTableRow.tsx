import React, { useState, type FC, useEffect, useCallback, useRef, ButtonHTMLAttributes, LegacyRef} from 'react';
import { type GamesTableRowProps } from './GamesTableRowProps';
import useDeviceType from '../../../../../hooks/useDeviceType';
import treeDots from '@assets/images/admin/three-dots.svg';
import { useNavigate } from 'react-router-dom';
import DropDownMenu from '@components/ui/drop-down-menu/DropDownMenu';
import { MouseEventHandler } from 'react';

const btns = [
  {nameBtn: 'Редактировать',
    btnColor: 'black'
  },
  {nameBtn: 'Удалить',
    btnColor: 'pink'
  },
]

const GamesTableRow: FC<GamesTableRowProps> = ({
  id,
  title,
  theme,
  dateInfo,
  price,
  seatsOccupied,
  seats,
  applications
}): React.ReactElement => {
  const deviceType = useDeviceType();
  const isMobile = deviceType === 'mobile';
  const [dropDownIsVisible, setdropDownIsVisible] = useState(false)

  const navigate = useNavigate();

  const handleClickDropDown = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    setdropDownIsVisible(!dropDownIsVisible);
    e.stopPropagation();
  }
  
  
  const clickToButtonMove = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    handleClickDropDown(e)
  }
 
  return (
    <tr className="games-table__row tbody__row" onClick={() => {navigate(`/admin/game-info/${id}`)}}>
      {isMobile ? (
        <td className="games-table__data td-flex-title">
          <p>{title}</p>
          <button className="dots-btn">
            <img src={treeDots} alt="три вертикальные точки" />
          </button>
        </td>
      ) : (
        <td className="games-table__data">{title}</td>
      )}

      <td className="games-table__data td-flex" data-label="Тематика игры">
        {theme}
      </td>
      <td className="games-table__data td-flex" data-label="Дата">
        {dateInfo.day} {dateInfo.month}
      </td>
      <td className="games-table__data td-flex" data-label="Цена">
        {price}
      </td>
      <td className="games-table__data td-flex" data-label="Мест">
        <progress id="seats-progress" value={0.25}></progress>
        {seatsOccupied} / {seats}
      </td>
      <td className="games-table__data td-flex" data-label="Регистраций">
        {applications}
      </td>
      {!isMobile && (
        <td className="games-table__data games-table__data__dots-btn">
          <button onBlur={() => {setTimeout(() => {setdropDownIsVisible(false)}, 100)}} onClick={(e) => {handleClickDropDown(e)}} className="dots-btn">
            <img src={treeDots} alt="кнопка меню" />
          </button>
          <DropDownMenu  click={clickToButtonMove}  stateVisible={dropDownIsVisible ? 'visible' : 'hidden'} btns={btns}/>
        </td>
      )}
    </tr>
  );
};

export default GamesTableRow;
