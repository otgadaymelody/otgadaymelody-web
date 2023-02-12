import React from 'react';
import BlockBackground from '../block-background/BlockBackground';
import FutureGame from '../future-game/FutureGame';
import './FutureGamesList.css';

const FutureGamesList = (): React.ReactElement => {
  const mediatorClasses = {
    topLeft: 'banner__mediator_top-left',
    topRight: 'banner__mediator_top-right',
    bottomLeft: 'banner__mediator_bottom-left',
    bottomRight: 'banner__mediator_bottom-right',
  };

  return (
    <BlockBackground className="future-games-list" mediatorsClasses={mediatorClasses}>
      <h2 className="future-games-list__title">Предстоящие игры</h2>
      <div className="future-games-list__games_list">
        <FutureGame />
        <FutureGame />
        <FutureGame />
      </div>
    </BlockBackground>
  );
};

export default FutureGamesList;
