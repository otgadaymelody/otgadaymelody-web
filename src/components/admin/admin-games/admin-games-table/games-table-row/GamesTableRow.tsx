import React, { useState, type FC, useCallback } from 'react';
import { type GamesTableRowProps } from './GamesTableRowProps';
import useDeviceType from '../../../../../hooks/useDeviceType';
import treeDots from '@assets/images/admin/three-dots.svg';
import { useNavigate } from 'react-router-dom';
import DropDownMenu from '@components/ui/drop-down-menu/DropDownMenu';

const DROPDOWMENUBUTTONS = [
  { nameBtn: 'Редактировать', btnColor: 'black' },
  { nameBtn: 'Удалить', btnColor: 'pink' },
];

const GamesTableRow: FC<GamesTableRowProps> = ({
  id,
  title,
  theme,
  dateInfo,
  price,
  seatsOccupied,
  seats,
  applications,
  showToUsers,
  editGame,
}): React.ReactElement => {
  const deviceType = useDeviceType();
  const isMobile = deviceType === 'mobile';
  const [isDropDownVisible, setisDropDownVisible] = useState(false);

  const handleClickDropDown = useCallback(
    (e: React.MouseEvent<HTMLElement, MouseEvent>): void => {
      setisDropDownVisible(!isDropDownVisible);
      e.stopPropagation();
    },
    [isDropDownVisible],
  );

  const clickToButtonMove = useCallback((): void => {}, []);

  const onBlurDropDownButton = useCallback(() => {
    setisDropDownVisible(false);
  }, []);

  const navigate = useNavigate();

  const toNavigate = useCallback(() => {
    navigate(`/admin/game-info/${id}`);
  }, []);

  return (
    <tr className="games-table__row tbody__row" onMouseDown={toNavigate}>
      {isMobile ? (
        <td className="games-table__data td-flex-title">
          <h5 className="game-table__data-title">{title}</h5>
          <button
            className="dots-btn"
            onMouseDown={(e) => {
              handleClickDropDown(e);
            }}
            onBlur={onBlurDropDownButton}
          >
            <img src={treeDots} alt="три вертикальные точки" />
          </button>
          <div
            className={`dropdown-menu_position-absolute dropdown-menu__wrapper_${
              isDropDownVisible ? 'visible' : 'hidden'
            }`}
            onMouseDown={(e) => {
              e.stopPropagation();
            }}
          >
            <DropDownMenu
              onClick={clickToButtonMove}
              btns={DROPDOWMENUBUTTONS}
              editGame={() => editGame(Number(id))}
            />
          </div>
        </td>
      ) : (
        <td className="games-table__data">
          <h5 className="game-table__data-title">{title}</h5>
        </td>
      )}
      <td className="games-table__data td-flex" data-label="Тематика игры">
        {theme}
      </td>
      <td className="games-table__data td-flex" data-label="Дата">
        {dateInfo}
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
      <td className="games-table__data td-flex" data-label="Показать пользователю">
        {showToUsers ? 'ДА' : 'НЕТ'}
      </td>
      {!isMobile && (
        <td className="games-table__data games-table__data_position-absolute">
          <div
            className={`dropdown-menu_position-absolute dropdown-menu__wrapper_${
              isDropDownVisible ? 'visible' : 'hidden'
            }`}
            onMouseDown={(e) => {
              e.stopPropagation();
            }}
          >
            <DropDownMenu
              onClick={clickToButtonMove}
              btns={DROPDOWMENUBUTTONS}
              editGame={() => editGame(Number(id))}
            />
          </div>
          <button
            onBlur={onBlurDropDownButton}
            onMouseDown={(e) => {
              handleClickDropDown(e);
            }}
            className="dots-btn"
          >
            <img src={treeDots} alt="кнопка меню" />
          </button>
        </td>
      )}
    </tr>
  );
};

export default GamesTableRow;
