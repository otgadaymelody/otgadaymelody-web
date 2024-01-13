import React from 'react';
import GameRegistration from '../components/games/game-registration';

const Game = (): React.ReactElement => {
  window.location.replace('https://vk.com/otgaday.melody');
  return (
    <main>
      <GameRegistration />
    </main>
  );
};
export default Game;
