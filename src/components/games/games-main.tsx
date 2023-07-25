import React, { type FC } from 'react';
import './games-main.css';
import RegistrationForm from './form-registration/FormRegistration';
import GamesBanner from './games-banner/games-banner';
import Description from './description/description';
import GamesMap from './games-map/games-map';
import FAQBlock from '../faq-block/FAQBlock';
import PhotoNearBorderItem from './PhotoNearBorderItem/PhotoNearBorderItem';
import ImageUrl from '../../assets/images/image-vector/gamesmain__imagevector-block-img-first.svg';
import VectorUrl from '../../assets/images/image-vector/gamesmain__imagevector-block-vector-first.svg';
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
      <div className="gamesmain__block-container">
        <PhotoNearBorderItem
          game="gameone"
          className="gamesmain__block-imagepart-container"
          ImageUrl={ImageUrl}
          VectorUrl={VectorUrl}
          ImageClassName="gamesmain__block-imagepart-image"
          VectorClassName="gamesmain__block-imagepart-vector"
        ></PhotoNearBorderItem>
        <FAQBlock className="gamesmain__block-faqpart"></FAQBlock>
      </div>
    </section>
  );
};

export default GamesMain;
