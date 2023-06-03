import React, { type FC } from 'react';
import './games-main.css';
import RegistrationForm from '../ui-kit/FormRegistration';
import GamesBanner from './games-banner/games-banner';
import Description from './description/description';
import GamesMap from './games-map/games-map';

const GamesMain: FC = () => {
  return (
    <section className="gamesmain_container">
      <div className="gamesmain_registartion-container">
        <GamesBanner></GamesBanner>
        <RegistrationForm></RegistrationForm>
      </div>
      <div className="gamesmain_map-container">
        <GamesMap></GamesMap>
        <Description></Description>
      </div>
    </section>
  );
};

export default GamesMain;
