import React, { type FC } from 'react';
import { GAMES_TABLE_DATA, PAST_GAMES_TABLE_DATA } from './gamesTableData.consts';
import GamesTableRow from './games-table-row/GamesTableRow';
import { type SelectedOptions } from './AdminGamesTableProps';
import './AdminGamesTable.css';

const AdminGamesTable: FC<SelectedOptions> = (selected) => {
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
            <th className="games-table__head-item"></th>
          </tr>
        </thead>
        <tbody className="games-table__body tbody">
          {selected === 'upcoming'
            ? GAMES_TABLE_DATA.map((item, index) => (
                <GamesTableRow
                  key={index}
                  id={item.id}
                  title={item.title}
                  theme={item.theme}
                  dateInfo={item.dateInfo}
                  price={item.price}
                  seatsOccupied={item.seatsOccupied}
                  seats={item.seats}
                  applications={item.applications}
                />
              ))
            : PAST_GAMES_TABLE_DATA.map((item, index) => (
                <GamesTableRow
                  key={index}
                  id={item.id}
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

export default AdminGamesTable;
