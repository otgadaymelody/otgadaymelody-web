import React, { type FC } from 'react';
import { type GamesMapAddressProps } from './games-map-address-props';
import './games-map-address.css';
import { ReactComponent as LocationImg } from '@assets/images/future-game/Location.svg';

const GamesMapAddress: FC<GamesMapAddressProps> = ({ icon, header, text }): React.ReactElement => {
  return (
    <div className="address__container">
      <div className="address__header">
        {icon && <LocationImg />}
        {header}
      </div>
      <p className="address__text">{text}</p>
    </div>
  );
};

export default GamesMapAddress;
