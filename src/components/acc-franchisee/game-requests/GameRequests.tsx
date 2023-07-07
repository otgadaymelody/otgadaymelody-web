import React, { type FC } from 'react';
import './GameRequests.css';

const GameRequests: FC = () => {
    return (
        <section className='game-requests__wrapper'>
            <h2 className='game-requests__title'>Заявки на ближайшие игры</h2>
            <div className='game-requests__container'>
                блок заявок
            </div>
        </section>
    )
}

export default GameRequests;