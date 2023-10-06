import React, { type FC } from 'react';
import GamesTableRow from './games-table-row/GamesTableRow';
import { type GameAdmin, type SelectedOptions } from './AdminGamesTableProps';
import './AdminGamesTable.css';

const AdminGamesTable: FC<{
  selected: SelectedOptions;
  games: GameAdmin[];
  editGame: (id: number) => any;
}> = ({ selected, games = [], editGame }) => {
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
            <th className="games-table__head-item">Видна пользователю</th>
            <th className="games-table__head-item"></th>
          </tr>
        </thead>
        <tbody className="games-table__body tbody">
          {selected === 'upcoming'
            ? games?.length
              ? games.map((item, index) => (
                  <GamesTableRow
                    key={index}
                    id={item.id}
                    title={item.gameName}
                    theme={item.gameType}
                    dateInfo={item.gameDate}
                    price={item.priceValue}
                    seatsOccupied={'Null'}
                    seats={item.maxPlayersCount}
                    showToUsers={item.showToUsers}
                    applications={'Null'}
                    editGame={(id) => editGame(Number(item.id))}
                  />
                ))
              : 'Нет игр...'
            : games?.length
            ? games.map((item, index) => (
                <GamesTableRow
                  key={index}
                  id={item.id}
                  title={item.gameName}
                  theme={item.gameType}
                  dateInfo={item.gameDate}
                  price={item.priceValue}
                  seatsOccupied={'Null'}
                  seats={item.maxPlayersCount}
                  showToUsers={item.showToUsers}
                  applications={'Null'}
                  editGame={(id) => editGame(Number(item.id))}
                />
              ))
            : 'Нет игр...'}
        </tbody>
      </table>
    </>
  );
};

export default AdminGamesTable;
