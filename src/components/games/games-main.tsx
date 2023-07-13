import React, { type FC } from 'react';
import './games-main.css';
import RegistrationForm from './form-registration/FormRegistration';
import GamesBanner from './games-banner/games-banner';
import Description from './description/description';
import GamesMap from './games-map/games-map';
import FAQBlock from '../faq-block/FAQBlock';

const GamesMain: FC = () => {
  return (
    <section className="gamesmain__container">
      <div className="gamesmain_registartion-container">
        <GamesBanner></GamesBanner>
        <RegistrationForm></RegistrationForm>
      </div>
      <div className="gamesmain_map-container">
        <GamesMap></GamesMap>
        <Description></Description>
      </div>
      <div className="gamesmain_block-container">
        <FAQBlock className="gamesmain_block-part"></FAQBlock>
      </div>
    </section>
  );
};

export default GamesMain;
