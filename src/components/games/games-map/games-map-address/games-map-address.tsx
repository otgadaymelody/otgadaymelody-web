import React, { type FC } from 'react';
import { type GamesMapProps } from './games-map-props';
import './games-map-address.css';

const GamesMapAddress: FC<GamesMapProps> = ({ header, text }): React.ReactElement => {
  return (
    <div className="address__container">
      <span className="address__header">{header}</span>
      <p className="address__text">{text}</p>
    </div>
  );
};

export default GamesMapAddress;
