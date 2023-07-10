import React, { type FC } from 'react';
import './FranchiseeGamesTable.css';
import treeDots from '@assets/images/acc-franchisee/three-dots.svg';

const FranciseeGamesTable: FC = () => {
  return (
    <>
      <table className="franchisee-games__table game-table">
        <thead className="game-table__title">
          <tr className="game-table__title--grid">
            <th className="game-table__item">Название игры</th>
            <th className="game-table__item">Тематика игры</th>
            <th className="game-table__item">Дата</th>
            <th className="game-table__item">Цена</th>
            <th className="game-table__item">Мест на игре</th>
            <th className="game-table__item">Заявки</th>
            <th className="game-table__item">
              <img src={treeDots} alt="возможности" />
            </th>
          </tr>
        </thead>
        <tbody className="game-table__body">
          <tr>
            <td>Компонент строки</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default FranciseeGamesTable;
