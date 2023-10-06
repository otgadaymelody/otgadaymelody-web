import React, { type FC } from 'react';
import vectorRightUp from '../../../assets/icons/games/games-banner-addition-right-up.svg';
import vectorRightDown from '../../../assets/icons/games/games-banner-addition-left.svg';
import vectorLeft from '../../../assets/icons/games/games-banner-addition-right-low.svg';
import './games-banner.css';
import { type GameProps } from '../game-registration.interfaces';
import useDeviceType from '../../../hooks/useDeviceType';

const GamesBanner: FC<GameProps> = ({ game }) => {
  const deviceType = useDeviceType();
  const isMobile = deviceType === 'mobile';
  return (
    <section className="gamesbanner">
      <div className="gamesbanner__container">
        {!isMobile && (
          <div className="gamesbanner__addition-container-right-up">
            <img src={vectorRightUp}></img>
          </div>
        )}
        {!isMobile && (
          <div className="gamesbanner__addition-container-right-down">
            <img src={vectorRightDown}></img>
          </div>
        )}
        <div className="gamesbanner__content-container">
          <h2 className="gamesbanner__title">{game.gameName}</h2>
        </div>
        <div className="gamesbanner__img-container">
          <img src={`/assets/images${game.info.imageSrc}`} className="gamesbanner__img"></img>
        </div>
        <div className="banner__description">
          <p className="banner__part">{game.info.description}</p>
        </div>
        {!isMobile && (
          <div className="gamesbanner__addition-container-low">
            <img src={vectorLeft}></img>
          </div>
        )}
      </div>
    </section>
  );
};

export default GamesBanner;
