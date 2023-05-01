import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './AtGameSlider.css';
import { gameInfographicItems } from './game-infographic/GameInfographicItem.consts';

// import 'swiper/css';
import GameInfographicItem from './game-infographic/GameInfographicItem';

const AtGameSlider = (): React.ReactElement => {
  return (
    <div>
      <h1 className="at-game-slider__title">Что будет на игре?</h1>
      <Swiper className="at-game-slider" spaceBetween={32} slidesPerView={'auto'}>
        {gameInfographicItems.map((item, index) => (
          <SwiperSlide key={index}>
            <GameInfographicItem title={item.title} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default AtGameSlider;
