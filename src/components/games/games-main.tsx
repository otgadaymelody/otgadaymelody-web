import React, { type FC } from 'react';
import './games-main.css';
import RegistrationForm from './form-registration/FormRegistration';
import GamesBanner from './games-banner/games-banner';
import Description from './description/description';
import GamesMap from './games-map/games-map';
import FAQBlock from '../faq-block/FAQBlock';
import PhotoNearBorderLeft from './PhotoNearBorderLeft/PhotoNearBorderLeft';
import PhotoGallery from '@components/photo-gallery/PhotoGallery';
const GamesMain: FC = () => {
  return (
    <section className="gamesmain__container">
      <div className="gamesmain__mapregistartion-container">
        <div className="gamesmain__registartion-container">
          <GamesBanner></GamesBanner>
          <RegistrationForm></RegistrationForm>
        </div>
        <div className="gamesmain__map-container">
          <GamesMap></GamesMap>
          <Description></Description>
        </div>
      </div>
      <div className="gamesmain__photo-container">
        <PhotoGallery className="gamesmain__photo-container"></PhotoGallery>
      </div>
      <div className="gamesmain__block-container">
        <PhotoNearBorderLeft></PhotoNearBorderLeft>
        <FAQBlock className="gamesmain__block-faqpart"></FAQBlock>
      </div>
    </section>
  );
};

export default GamesMain;
