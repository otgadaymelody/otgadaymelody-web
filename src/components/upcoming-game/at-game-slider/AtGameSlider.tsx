import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import useDeviceType from '../../../hooks/useDeviceType';
import { Navigation } from 'swiper';
import './AtGameSlider.css';
import { gameInfographicItems } from './game-infographic/GameInfographicItem.consts';
import sliderPrevImg from '../../../assets/images/future-game/slider-prev.svg';
import GameInfographicItem from './game-infographic/GameInfographicItem';

const AtGameSlider = (): React.ReactElement => {
  const deviceType = useDeviceType();
  const isMobile = deviceType === 'mobile';

  return (
    <Swiper
      className="at-game-slider"
      slidesPerView={'auto'}
      loop={true}
      navigation={{
        nextEl: '.at-game-slider__slider-button-next',
        prevEl: '.at-game-slider__slider-button-prev',
      }}
      modules={[Navigation]}
    >
      {gameInfographicItems.map((item, index) => (
        <SwiperSlide key={index}>
          <GameInfographicItem title={item.title} />
        </SwiperSlide>
      ))}
      {!isMobile && (
        <div className="at-game-slider__buttons-wrapper">
          <button className="at-game-slider__slider-button-next">
            <img src={sliderPrevImg} alt={'Кнопка вперед'} />
          </button>
        </div>
      )}
    </Swiper>
  );
};

export default AtGameSlider;
