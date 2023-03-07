import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './AtGameSlider.css';

// import 'swiper/css';
import GameInfographicItem from './game-infographic/GameInfographicItem';

const AtGameSlider = (): React.ReactElement => {
  return (
    <div>
      <h1 className="at-game-slider__title">Что будет на игре?</h1>
      <Swiper className="at-game-slider" spaceBetween={32} slidesPerView={'auto'}>
        <SwiperSlide>
          <GameInfographicItem />
        </SwiperSlide>
        <SwiperSlide>
          <GameInfographicItem />
        </SwiperSlide>
        <SwiperSlide>
          <GameInfographicItem />
        </SwiperSlide>
        <SwiperSlide>
          <GameInfographicItem />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default AtGameSlider;
