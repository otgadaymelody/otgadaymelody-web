import React, { useState, useRef } from 'react';
import BlockBackground from '../block-background/BlockBackground';
import FutureGame from './future-game/FutureGame';
import BaseButton from '../ui/base-button/BaseButton';
import { gameList } from './gameList';
import './FutureGamesList.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Navigation } from 'swiper';
import useDeviceType from '../../hooks/useDeviceType';

const FutureGamesList = (): React.ReactElement => {
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

  return (
    <BlockBackground className="future-games-list" mediatorsClasses={mediatorClasses}>
      <h2 className="future-games-list__title">Предстоящие игры</h2>
      {isDesktop ? (
        <Swiper
          navigation={true}
          slidesPerView={3}
          spaceBetween={32}
          modules={[Navigation]}
          className="future-games-list__games_list"
        >
          <SwiperSlide>
            <FutureGame className={'future-games-list__game'} game={gameList[0]} />
          </SwiperSlide>
          <SwiperSlide>
            <FutureGame className={'future-games-list__game'} game={gameList[0]} />
          </SwiperSlide>
          <SwiperSlide>
            <FutureGame className={'future-games-list__game'} game={gameList[0]} />
          </SwiperSlide>
          <SwiperSlide>
            <FutureGame className={'future-games-list__game'} game={gameList[0]} />
          </SwiperSlide>
        </Swiper>
      ) : (
        <div className="future-games-list__games_list">
          <FutureGame className={'future-games-list__game'} game={gameList[0]} />
          <FutureGame className={'future-games-list__game'} game={gameList[0]} />
          <FutureGame className={'future-games-list__game'} game={gameList[0]} />
        </div>
      )}

      {gameList.length > 3 && <BaseButton styles={showMoreBtnClasses} title="Показать еще" />}
    </BlockBackground>
  );
};

export default FutureGamesList;
