import React from 'react';
import BlockBackground from '../block-background/BlockBackground';
import './FutureGames.css';

const FutureGames = (): React.ReactElement => {
  const mediatorClasses = {
    topLeft: 'banner__mediator_top-left',
    topRight: 'banner__mediator_top-right',
    bottomLeft: 'banner__mediator_bottom-left',
    bottomRight: 'banner__mediator_bottom-right',
  };

  return (
    <BlockBackground className="future-games" mediatorsClasses={mediatorClasses}>
      <h2 className="future-games__title">Предстоящие игры</h2>
      <div className="future-games__games_list">
        <div className="game">Game</div>
        <div className="game">Game</div>
        <div className="game">Game</div>
        <div className="game">Game</div>
      </div>
    </BlockBackground>
  );
};

export default FutureGames;
