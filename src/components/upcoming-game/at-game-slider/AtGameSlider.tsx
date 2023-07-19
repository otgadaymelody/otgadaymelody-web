import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './AtGameSlider.css';
import { gameInfographicItems } from './game-infographic/GameInfographicItem.consts';

// import 'swiper/css';
import GameInfographicItem from './game-infographic/GameInfographicItem';

const AtGameSlider = (): React.ReactElement => {
  return (
    <Swiper className="at-game-slider" spaceBetween={32} slidesPerView={'auto'}>
      {gameInfographicItems.map((item, index) => (
        <SwiperSlide key={index}>
          <GameInfographicItem title={item.title} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default AtGameSlider;
