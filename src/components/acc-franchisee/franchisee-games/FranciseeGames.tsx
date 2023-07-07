import React, { type FC } from 'react';
import './FranciseeGames.css';
import BaseButton from '../../ui/base-button/BaseButton';
import FranciseeGamesTable from './franchisee-games-table/FranchiseeGamesTable';


const FranciseeGames: FC = () => {
    return (
    <div className='franchisee-games'>
        <div className='franchisee-games__bar bar'>
            <div className='bar__wrapper'>
                <h2 className='franchisee-games__title'>Игры</h2>
                <div className='games-toggle-btn'>
                    <input type="checkbox" className='toggle-switch' />
                </div>
                <BaseButton title='Добавить игру'/>
            </div>
        </div>
        <FranciseeGamesTable />
    </div>
    );
};

export default FranciseeGames;