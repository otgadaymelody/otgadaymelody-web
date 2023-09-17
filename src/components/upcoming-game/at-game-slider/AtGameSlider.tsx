import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import useDeviceType from '../../../hooks/useDeviceType';
import { Navigation } from 'swiper';
import './AtGameSlider.css';
import { gameInfographicItems } from './game-infographic/GameInfographicItem.consts';
import sliderPrevImg from '../../../assets/images/future-game/slider-prev.svg';
import GameInfographicItem from './game-infographic/GameInfographicItem';
import sliderNextImg from '@assets/images/future-game/slider-next.svg';
import type { AtGameSliderProps } from './AtGameSliderProps';

const AtGameSlider = ({ quantityVisibleSlides }: AtGameSliderProps): React.ReactElement => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const deviceType = useDeviceType();
  const isMobile = deviceType === 'mobile';
  const [backBtnVisible, setBackBtnVisible] = useState(false);
  const [forwardBtnVisible, setForwardBtnVisible] = useState(true);
  const [countClicks, setCountClicks] = useState(0);
  useEffect(() => {
    checkCounter();
  }, [countClicks]);
  const changeCounterBack = useCallback(() => {
    setCountClicks(countClicks - 1);
  }, [countClicks]);
  const changeCounterForward = useCallback(() => {
    setCountClicks(countClicks + 1);
  }, [countClicks]);
  const checkCounter = useCallback(() => {
    countClicks > 0 ? setBackBtnVisible(true) : setBackBtnVisible(false);
    countClicks < gameInfographicItems.length - quantityVisibleSlides
      ? setForwardBtnVisible(true)
      : setForwardBtnVisible(false);
  }, [countClicks]);
  return (
    <Swiper
      className="at-game-slider"
      modules={[Navigation]}
      navigation={{
        nextEl: navigationNextRef.current,
        prevEl: navigationPrevRef.current,
      }}
      breakpoints={{
        240: {
          slidesPerView: 1.5,
        },
        360: {
          slidesPerView: 2.2,
        },
        768: {
          slidesPerView: 2.9,
        },
        1024: {
          slidesPerView: 4.1,
        },
        1280: {
          slidesPerView: 3.3,
        },
        1440: {
          slidesPerView: 3.9,
        },
      }}
    >
      {gameInfographicItems.map((item, index) => (
        <SwiperSlide key={index}>
          <GameInfographicItem
            title={item.title}
            path={`assets/images/upcoming-game/mediator${index}.svg`}
          />
        </SwiperSlide>
      ))}
      {!isMobile && (
        <div className="at-game-slider__buttons-wrapper">
          <div
            onClick={changeCounterBack}
            ref={navigationPrevRef}
            className={
              backBtnVisible
                ? 'at-game-slider__slider-button-prev'
                : 'at-game-slider__slider-button_none'
            }
          >
            <img src={sliderNextImg} alt={'Кнопка назад'} />
          </div>
          <div
            onClick={changeCounterForward}
            ref={navigationNextRef}
            className={
              forwardBtnVisible
                ? 'at-game-slider__slider-button-next'
                : 'at-game-slider__slider-button_none'
            }
          >
            <img src={sliderPrevImg} alt={'Кнопка вперед'} />
          </div>
        </div>
      )}
    </Swiper>
  );
};

export default AtGameSlider;
