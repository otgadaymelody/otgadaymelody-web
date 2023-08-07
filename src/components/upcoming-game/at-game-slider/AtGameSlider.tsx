import React, { useCallback, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import useDeviceType from '../../../hooks/useDeviceType';
import { Navigation } from 'swiper';
import './AtGameSlider.css';
import { gameInfographicItems } from './game-infographic/GameInfographicItem.consts';
import sliderPrevImg from '../../../assets/images/future-game/slider-prev.svg';
import GameInfographicItem from './game-infographic/GameInfographicItem';
import sliderNextImg from '@assets/images/future-game/slider-next.svg';

const AtGameSlider = (): React.ReactElement => {
  const deviceType = useDeviceType();
  const isMobile = deviceType === 'mobile';
  const [backBtnVisible, setBackBtnVisible] = useState(false);
  const changeBtnVisibility = useCallback(() => {
    setBackBtnVisible(true);
  }, []);
  return (
    <Swiper
      className="at-game-slider"
      slidesPerView={'auto'}
      loop={true}
      modules={[Navigation]}
      navigation={{
        nextEl: '.at-game-slider__slider-button-next',
        prevEl: '.at-game-slider__slider-button-prev',
      }}
    >
      {gameInfographicItems.map((item, index) => (
        <SwiperSlide key={index}>
          <GameInfographicItem title={item.title} />
        </SwiperSlide>
      ))}
      {!isMobile && (
        <div className="at-game-slider__buttons-wrapper">
          <div
            className={
              backBtnVisible
                ? 'at-game-slider__slider-button-prev'
                : 'at-game-slider__slider-button-prev_none'
            }
          >
            <img src={sliderNextImg} alt={'Кнопка назад'} />
          </div>
          <div className="at-game-slider__slider-button-next">
            <img src={sliderPrevImg} alt={'Кнопка вперед'} onClick={changeBtnVisibility} />
          </div>
        </div>
      )}
    </Swiper>
  );
};

export default AtGameSlider;
