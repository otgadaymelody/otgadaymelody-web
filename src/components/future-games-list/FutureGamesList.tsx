import React, { useState, useRef, type FC, useEffect } from 'react';
import BlockBackground from '../block-background/BlockBackground';
import FutureGame from './future-game/FutureGame';
import BaseButton from '../ui/base-button/BaseButton';
import { GAME_LIST } from './gameList.consts';
import './FutureGamesList.css';

import sliderNextImg from '../../assets/images/future-game/slider-next.svg';
import sliderPrevImg from '../../assets/images/future-game/slider-prev.svg';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Navigation } from 'swiper';
import useDeviceType from '../../hooks/useDeviceType';
import { type BaseComponent } from '../../shared/interfaces/baseComponent';

const FutureGamesList: FC<BaseComponent> = ({ className }): React.ReactElement => {
  const deviceType = useDeviceType();
  const isDesktop = deviceType === 'desktop';
  const mediatorClasses = {
    topLeft: 'future-games-list__mediator_top-left',
    topRight: 'future-games-list__mediator_top-right',
    bottomLeft: 'future-games-list__mediator_bottom-left',
    bottomRight: 'future-games-list__mediator_bottom-right',
  };

  const showMoreBtnClasses = {
    buttonForm: 'future-games-list__show-more-btn',
    buttonTitle: 'future-games-list__show-more-title-btn',
  };

  useEffect(() => {
    fetch('/games-list')
      .then(async (res) => {
        return await res.json();
      })
      .then((games) => console.log('games', games))
      .catch(() => console.log('error'));
  });

  return (
    <BlockBackground
      className={`future-games-list ${className}`}
      mediatorsClasses={mediatorClasses}
    >
      <h2 className="future-games-list__title">Предстоящие игры</h2>
      {isDesktop ? (
        <Swiper
          navigation={{
            nextEl: '.future-games-list__slider-button-next',
            prevEl: '.future-games-list__slider-button-prev',
          }}
          slidesPerView={3}
          spaceBetween={32}
          modules={[Navigation]}
          className="future-games-list__games_list"
          breakpoints={{
            1920: {
              slidesPerView: 4,
            },
          }}
        >
          {GAME_LIST.map((item, index) => (
            <SwiperSlide key={index}>
              <FutureGame className={'future-games-list__game'} game={item} />
            </SwiperSlide>
          ))}
          {/* <SwiperSlide>
            <FutureGame className={'future-games-list__game'} game={gameList[0]} />
          </SwiperSlide>
          <SwiperSlide>
            <FutureGame className={'future-games-list__game'} game={gameList[1]} />
          </SwiperSlide>
          <SwiperSlide>
            <FutureGame className={'future-games-list__game'} game={gameList[2]} />
          </SwiperSlide>
          <SwiperSlide>
            <FutureGame className={'future-games-list__game'} game={gameList[3]} />
          </SwiperSlide>
          <SwiperSlide>
            <FutureGame className={'future-games-list__game'} game={gameList[4]} />
          </SwiperSlide> */}
          <div className="future-games-list__slider-button-prev">
            <img src={sliderNextImg} />
          </div>
          <div className="future-games-list__slider-button-next">
            <img src={sliderPrevImg} />
          </div>
        </Swiper>
      ) : (
        <div className="future-games-list__games_list">
          <FutureGame className={'future-games-list__game'} game={GAME_LIST[0]} />
          <FutureGame className={'future-games-list__game'} game={GAME_LIST[1]} />
          <FutureGame className={'future-games-list__game'} game={GAME_LIST[2]} />
        </div>
      )}

      {GAME_LIST.length > 3 && !isDesktop && (
        <BaseButton styles={showMoreBtnClasses} title="Показать еще" />
      )}
    </BlockBackground>
  );
};

export default FutureGamesList;
