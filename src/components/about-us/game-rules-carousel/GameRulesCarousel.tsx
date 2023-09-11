import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { type Swiper as SwiperType, Navigation } from 'swiper';
import './GameRulesCarousel.css';
import 'swiper/css';
import GameRulesSlide from './GameRulesSlide/GameRulesSlide';
import { GAME_RULES_LIST } from './gameRules.consts';
import prevSlideImg from '../../../assets/images/home-page/game-rules-carousel/prev-slide-img.svg';
import nextSlideImg from '../../../assets/images/home-page/game-rules-carousel/next-slide-img.svg';

const GameRulesCarousel = (): React.ReactElement => {
  const swiperRef = useRef<SwiperType>();
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  return (
    <div className="game-rules-carousel">
      <div className="game-rules-carousel__image-wrapper">
        <img
          className="game-rules-carousel__img"
          src={`assets/images/game-rules-carousel/0${currentSlide + 1}.png`}
          alt={`${GAME_RULES_LIST[currentSlide].title}`}
        />
      </div>

      <Swiper
        className="game-rules-carousel__carousel"
        modules={[Navigation]}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
          setCurrentSlide(swiper.activeIndex);
        }}
        onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
      >
        {GAME_RULES_LIST.map((item, index) => (
          <SwiperSlide key={index}>
            <GameRulesSlide title={item.title.toUpperCase()} description={item.description} />
          </SwiperSlide>
        ))}

        <div className="game-rules-carousel__slider">
          <button
            className="game-rules-carousel__slider-btn"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <img src={prevSlideImg} />
          </button>
          <p>
            <span className="game-rules-carousel__current-page">{currentSlide + 1}</span>
            {` / ${GAME_RULES_LIST.length}`}
          </p>
          <button
            className="game-rules-carousel__slider-btn"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <img src={nextSlideImg} />
          </button>
        </div>
      </Swiper>
    </div>
  );
};

export default GameRulesCarousel;
