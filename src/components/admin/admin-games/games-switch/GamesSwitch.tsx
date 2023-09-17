import React, { useState, type FC } from 'react';
import './GamesSwitch.css';

interface GamesSwitchProps {
  selected: string;
  onChange: any;
}

const GamesSwitch: FC<GamesSwitchProps> = ({ onChange, selected }) => {
  const handleChangeValue = (event: React.ChangeEvent<HTMLInputElement>): void => {
    onChange(event.target.value);
  };

  return (
    <div className="games-switch">
      <input
        type="radio"
        name="games"
        className="games-switch__input"
        id="switch-upcoming"
        value={'upcoming'}
        checked={selected === 'upcoming'}
        onChange={handleChangeValue}
      />
      <label htmlFor="switch-upcoming" className="games-switch__label">
        Предстоящие
      </label>
      <input
        type="radio"
        name="games"
        className="games-switch__input"
        id="switch-past"
        value={'past'}
        checked={selected === 'past'}
        onChange={handleChangeValue}
      />
      <label htmlFor="switch-past" className="games-switch__label">
        Прошедшие
      </label>
      <span className="games-switch__glider"></span>
    </div>
  );
};

export default GamesSwitch;
