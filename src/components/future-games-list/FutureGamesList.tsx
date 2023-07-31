import React, { type FC, useEffect, useState } from 'react';
import BlockBackground from '../block-background/BlockBackground';
import FutureGame from './future-game/FutureGame';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import sliderNextImg from '../../assets/images/future-game/slider-next.svg';
import sliderPrevImg from '../../assets/images/future-game/slider-prev.svg';

import './FutureGamesList.css';
import 'swiper/css';
import 'swiper/css/pagination';

import { type BaseComponent } from '../../shared/interfaces/baseComponent';
import { type FutureGameResponseType } from '@components/future-games-list/future-game/FutureGameProps';
import useDeviceType from '../../hooks/useDeviceType';
import BaseButton from '@components/ui/base-button/BaseButton';

const FutureGamesList: FC<BaseComponent> = ({ className }): React.ReactElement => {
  const deviceType = useDeviceType();
  const isDesktop = deviceType === 'desktop';
  const isMobile = deviceType === 'mobile';
  const isTablet = deviceType === 'tablet';
  const isTabletLg = deviceType === 'tablet-lg';
  const mediatorClasses = {
    topLeft: 'future-games-list__mediator_top-left',
    topRight: 'future-games-list__mediator_top-right',
    bottomLeft: 'future-games-list__mediator_bottom-left',
    bottomRight: 'future-games-list__mediator_bottom-right',
  };

  const [futureGames, setFutureGames] = useState<FutureGameResponseType[]>([]);

  const showMoreBtnClasses = {
    buttonForm: 'future-games__show-more-btn',
    buttonTitle: 'future-games_show-more-btn-title',
  };

  const slidesPerView = futureGames.length > 2 ? 3 : 2;
  const containerSliderSize = `future-games__swiper-container${
    futureGames.length > 2 ? '-large' : '-small'
  }`;

  const futureButtonsWrapper =
    (futureGames.length > 2 && isTablet) || isTabletLg || (futureGames.length > 3 && isDesktop)
      ? 'future-games-list__buttons-wrapper'
      : 'future-games-list__buttons-wrapper-none';

  const showMoreHandler = (): void => {};

  useEffect(() => {
    axios
      .get<FutureGameResponseType[]>('api/future-games?id=1')
      .then((res) => {
        setFutureGames(res.data);
      })
      .catch(() => console.log('error'));
  }, []);

  return (
    <>
      {futureGames.length > 0 && isMobile ? (
        <BlockBackground
          className={`future-games-list ${className}`}
          mediatorsClasses={mediatorClasses}
        >
          <h2 className="future-games-list__title">Предстоящие игры</h2>
          <div className="future-game__games-wrapper">
            {futureGames.map((item) => (
              <div key={item.id}>
                <FutureGame className={'future-games-list__game'} game={item} />
              </div>
            ))}
          </div>
          <BaseButton title="Показать ещё" styles={showMoreBtnClasses} onClick={showMoreHandler} />
        </BlockBackground>
      ) : (
        <BlockBackground
          className={`future-games-list ${className}`}
          mediatorsClasses={mediatorClasses}
        >
          <h2 className="future-games-list__title">Предстоящие игры</h2>
          <div className={containerSliderSize}>
            <Swiper
              navigation={{
                nextEl: '.future-games-list__slider-button-next',
                prevEl: '.future-games-list__slider-button-prev',
              }}
              spaceBetween={32}
              modules={[Navigation]}
              className="future-games-list__games_list"
              breakpoints={{
                768: {
                  slidesPerView: 2,
                },
                1280: {
                  slidesPerView: slidesPerView,
                },
              }}
            >
              {futureGames.map((item) => (
                <SwiperSlide key={item.id} className={'future-games-list__game-slide'}>
                  <FutureGame className={'future-games-list__game'} game={item} />
                </SwiperSlide>
              ))}
              <div className={futureButtonsWrapper}>
                <div className="future-games-list__slider-button-prev">
                  <img src={sliderNextImg} />
                </div>
                <div className="future-games-list__slider-button-next">
                  <img src={sliderPrevImg} />
                </div>
              </div>
            </Swiper>
          </div>
        </BlockBackground>
      )}
    </>
  );
};

export default FutureGamesList;
