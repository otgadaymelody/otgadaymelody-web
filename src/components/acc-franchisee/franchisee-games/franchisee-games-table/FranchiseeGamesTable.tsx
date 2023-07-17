import React, { type FC } from 'react';

import { GAMES_DATA } from './gamesData.consts';
import GamesTableRow from './games-table-row/GamesTableRow';

import './FranchiseeGamesTable.css';
import treeDots from '@assets/images/acc-franchisee/three-dots.svg';

const FranciseeGamesTable: FC = () => {
  return (
    <>
      <table className="games-table">
        <thead className="games-table__head">
          <tr className="games-table__row">
            <th className="games-table__head-item">Название игры</th>
            <th className="games-table__head-item">Тематика игры</th>
            <th className="games-table__head-item">Дата</th>
            <th className="games-table__head-item">Цена</th>
            <th className="games-table__head-item">Мест на игре</th>
            <th className="games-table__head-item">Заявки</th>
            <th className="games-table__head-item">
              <img src={treeDots} alt="три вертикальные точки" />
            </th>
          </tr>
        </thead>
        <tbody className="games-table__body tbody">
          {GAMES_DATA.map((item, index) => (
            <GamesTableRow
              key={index}
              title={item.title}
              theme={item.theme}
              dateInfo={item.dateInfo}
              price={item.price}
              seatsOccupied={item.seatsOccupied}
              seats={item.seats}
              applications={item.applications}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default FranciseeGamesTable;