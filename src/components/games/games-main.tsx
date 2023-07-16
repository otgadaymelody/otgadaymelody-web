import React, { type FC } from 'react';
import './games-main.css';
import RegistrationForm from './form-registration/FormRegistration';
import GamesBanner from './games-banner/games-banner';
import Description from './description/description';
import GamesMap from './games-map/games-map';
import FAQBlock from '../faq-block/FAQBlock';
import ImageVector from './image-vector/ImageVector';
import firstImageUrl from '../../assets/images/image-vector/gamesmain__imagevector-block-img-first.png';
import secondImageUrl from '../../assets/images/image-vector/Vector 37.png';
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
        <ImageVector
          game="game1"
          className="gamesmain__block-imagepart-container"
          firstImageUrl={firstImageUrl}
          secondImageUrl={secondImageUrl}
          firstImageClassName="gamesmain__block-imagepart-image"
          secondImageClassName="gamesmain__block-imagepart-vector"
        ></ImageVector>
        <FAQBlock className="gamesmain__block-faqpart"></FAQBlock>
      </div>
    </section>
  );
};

export default GamesMain;
