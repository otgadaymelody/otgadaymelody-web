import React, { type FC } from 'react';
import './GamesSwitch.css';

const GamesSwitch: FC = () => {
  return (
    <div className="games-switch">
      <input
        type="radio"
        name="games"
        className="games-switch__input"
        id="switch-upcoming"
        defaultChecked={true}
      />
      <label htmlFor="switch-upcoming" className="games-switch__label">
        Предстоящие
      </label>
      <input type="radio" name="games" className="games-switch__input" id="switch-past" />
      <label htmlFor="switch-past" className="games-switch__label">
        Прошедшие
      </label>
      <span className="games-switch__glider"></span>
    </div>
  );
};

export default GamesSwitch;
