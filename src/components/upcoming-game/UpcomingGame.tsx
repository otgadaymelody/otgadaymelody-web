import React, { type FC, useEffect, useState } from 'react';
import './UpcomingGame.css';
import { type BaseComponent } from '../../shared/interfaces/baseComponent';
import BlockBackground from '../block-background/BlockBackground';
import useDeviceType from '../../hooks/useDeviceType';
import GameInformationBanner from './game-information-banner/GameInformationBanner';
import AtGameSlider from './at-game-slider/AtGameSlider';
import axios from 'axios';
import { type UpcomingGameResponseType } from '@components/upcoming-game/UpcomingGameProps';
import { nextGameImg } from './UpcomingGameImg';

const UpcomingGame: FC<BaseComponent> = ({ className }): React.ReactElement => {
  const deviceType = useDeviceType();
  const isDesktop = deviceType === 'desktop';
  const isMobile = deviceType === 'mobile';
  const [nextGame, setNextGame] = useState<UpcomingGameResponseType>({
    franchiseeId: 0,
    gameAddress: {
      building: '',
      city: '',
      street: '',
    },
    gameBasePrice: '',
    gameCityId: 0,
    gameCityName: '',
    gameCurrencyPrice: '',
    gameDate: '',
    gameLocationName: '',
    gameName: '',
    gameTime: '',
    gameType: '',
    id: 0,
    info: {
      coordinates: [0, 0],
      description: '',
      imageSrc: '',
    },
  });

  useEffect(() => {
    axios
      .get('api/next-game')
      .then((res) => {
        setNextGame(res.data);
      })
      .catch(() => {
        console.log('error');
      });
  }, []);

  const mediatorClasses = {
    topLeft: 'banner__mediator_top-left',
    topRight: 'banner__mediator_top-right',
    bottomLeft: 'banner__mediator_bottom-left',
    bottomRight: 'banner__mediator_bottom-right',
  };
  const nextGameImgKey = nextGame.info.imageSrc.replace(/^\/|\.png$/g, '');

  return (
    <>
      {Object.keys(nextGame).length > 0 && (
        <section className={`${className} upcoming-game`} id="upcoming-game">
          {isDesktop && (
            <div className="upcoming-game__img-block">
              <BlockBackground
                mediatorsClasses={mediatorClasses}
                className="upcoming-game__img-bg"
              />
              <img
                className="upcoming-game__img"
                src={nextGameImg[nextGameImgKey]}
                alt={nextGame.gameName}
              />
            </div>
          )}
          <div className="upcoming-game__info-block">
            <div className="upcoming-game__main-info">
              <div className="upcoming-game__text-wrapper">
                <span className="upcoming-game__title">Ближайшая игра</span>
                <h3 className="upcoming-game__game-title">{nextGame.gameName}</h3>
                {!isMobile && (
                  <p className="upcoming-game__game-description">{nextGame.info.description}</p>
                )}
              </div>
              {isMobile && (
                <>
                  <div className="upcoming-game__img-block">
                    <BlockBackground
                      mediatorsClasses={mediatorClasses}
                      className="upcoming-game__img-bg"
                    />
                    <img
                      className="upcoming-game__img"
                      src={nextGameImg[nextGameImgKey]}
                      alt={'Женщины'}
                    />
                  </div>
                  <p className="upcoming-game__game-description">{nextGame.info.description}</p>
                </>
              )}
              <div className="upcoming-game__registration-info">
                <GameInformationBanner game={nextGame} />
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
