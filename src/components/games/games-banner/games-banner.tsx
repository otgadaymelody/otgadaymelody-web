import React, { type FC } from 'react';
import bannerImg from '../../../assets/images/games/games-banner.svg';
import vectorRightUp from '../../../assets/icons/games/games-banner-addition-right-up.svg';
import vectorRightDown from '../../../assets/icons/games/games-banner-addition-left.svg';
import vectorLeft from '../../../assets/icons/games/games-banner-addition-right-low.svg';
import './games-banner.css';

const GamesBanner: FC = () => {
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
          <h2 className="gamesbanner__title">РОК VS ПОПСА #123</h2>
        </div>
        <div className="gamesbanner__img-container">
          <img src={bannerImg} className="gamesbanner__img"></img>
        </div>
        <div className="banner__description">
          <p className="banner__part">
            Наша уникальная игра – 7 раундов, 39 вопросов, 2+ часа и море позитива. В команде может
            быть от 2 до 9 человек, игра открыта для всех: новых и опытных участников.
          </p>
        </div>
        <div className="gamesbanner__addition-container-low">
          <img src={vectorLeft}></img>
        </div>
      </div>
    </section>
  );
};

export default GamesBanner;
