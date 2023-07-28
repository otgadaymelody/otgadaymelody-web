import React, { type FC, useEffect, useState } from 'react';
import './UpcomingGame.css';
import { type BaseComponent } from '../../shared/interfaces/baseComponent';
import BlockBackground from '../block-background/BlockBackground';
import womenImg from '../../assets/images/home-page/upcoming-game/upcoming-banner-img.png';
import useDeviceType from '../../hooks/useDeviceType';
import GameInformationBanner from './game-information-banner/GameInformationBanner';
import AtGameSlider from './at-game-slider/AtGameSlider';
import axios from 'axios';

const UpcomingGame: FC<BaseComponent> = ({ className }): React.ReactElement => {
  const deviceType = useDeviceType();
  const isDesktop = deviceType === 'desktop';
  const isMobile = deviceType === 'mobile';
  const [nextGame, setNextGame] = useState({});

  useEffect(() => {
    axios
      .get('api/next-game')
      .then((res) => {
        console.log(res);
        setNextGame(res);
      })
      // .then((games) => console.log('games', games))
      .catch(() => console.log('error'));
  }, []);

  console.log(nextGame);

  const mediatorClasses = {
    topLeft: 'banner__mediator_top-left',
    topRight: 'banner__mediator_top-right',
    bottomLeft: 'banner__mediator_bottom-left',
    bottomRight: 'banner__mediator_bottom-right',
  };
  return (
    <>
      {Object.keys(nextGame).length === 0 && (
        <section className={`${className} upcoming-game`} id="upcoming-game">
          {isDesktop && (
            <div className="upcoming-game__img-block">
              <BlockBackground
                mediatorsClasses={mediatorClasses}
                className="upcoming-game__img-bg"
              />
              <img className="upcoming-game__img" src={womenImg} alt={'Женщины'} />
            </div>
          )}
          <div className="upcoming-game__info-block">
            <div className="upcoming-game__main-info">
              <div className="upcoming-game__text-wrapper">
                <span className="upcoming-game__title">Ближайшая игра</span>
                <h3 className="upcoming-game__game-title">Россия #24</h3>
                {!isMobile && (
                  <p className="upcoming-game__game-description">
                    Встречаем Новый 2023 Год самыми известными и любимыми караоке хитами! Год самыми
                    известными и любимыми караоке хитами!
                  </p>
                )}
              </div>
              {isMobile && (
                <>
                  <div className="upcoming-game__img-block">
                    <BlockBackground
                      mediatorsClasses={mediatorClasses}
                      className="upcoming-game__img-bg"
                    />
                    <img className="upcoming-game__img" src={womenImg} alt={'Женщины'} />
                  </div>
                  <p className="upcoming-game__game-description">
                    Встречаем Новый 2023 Год самыми известными и любимыми караоке хитами!
                    <br />
                    Год самыми известными и любимыми караоке хитами!
                  </p>
                </>
              )}
              <div className="upcoming-game__registration-info">
                <GameInformationBanner />
              </div>
            </div>
            <AtGameSlider />
          </div>
        </section>
      )}
    </>
  );
};

export default UpcomingGame;
