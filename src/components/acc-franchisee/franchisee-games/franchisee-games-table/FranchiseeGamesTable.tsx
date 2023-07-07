import React, { type FC } from 'react';
import './FranchiseeGamesTable.css';
import treeDots from '@assets/images/acc-franchisee/three-dots.svg';

const FranciseeGamesTable: FC = () => {
    return (
        <div className='franchisee-games__table game-table'>
            <ul className='game-table__title'>
                <li className='game-table__item'>Название игры</li>
                <li className='game-table__item'>Тематика игры</li>
                <li className='game-table__item'>Дата</li>
                <li className='game-table__item'>Цена</li>
                <li className='game-table__item'>Мест на игре</li>
                <li className='game-table__item'>Заявки</li>
                <li className='game-table__item'><img src={treeDots} alt="возможности" /></li>
            </ul>
            <div className='game-table__row'>Компонент строки</div>
        </div>
    );
};

export default FranciseeGamesTable;