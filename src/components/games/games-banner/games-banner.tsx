import React, { type FC } from 'react';
import bannerImg from '../../../assets/images/games/games-banner.svg';
import vectorRightUp from '../../../assets/icons/games/games-banner-addition-right-up.svg';
import vectorRightDown from '../../../assets/icons/games/games-banner-addition-left.svg';
import vectorLeft from '../../../assets/icons/games/games-banner-addition-right-low.svg';
import './games-banner.css';

interface GameBannerProps {
  gameTitle: string | undefined;
  gameInfo: string | undefined;
}

const GamesBanner: FC<GameBannerProps> = ({ gameTitle, gameInfo }) => {
  return (
    <section className="gamesbanner">
      <div className="gamesbanner__container">
        <div className="gamesbanner__addition-container-right-up">
          <img src={vectorRightUp}></img>
        </div>
        <div className="gamesbanner__addition-container-right-down">
          <img src={vectorRightDown}></img>
        </div>
        <div className="gamesbanner__content-container">
          <h2 className="gamesbanner__title">{gameTitle}</h2>
        </div>
        <div className="gamesbanner__img-container">
          <img src={bannerImg} className="gamesbanner__img"></img>
        </div>
        <div className="banner__description">
          <p className="banner__part">{gameInfo}</p>
        </div>
        <div className="gamesbanner__addition-container-low">
          <img src={vectorLeft}></img>
        </div>
      </div>
    </section>
  );
};

export default GamesBanner;
