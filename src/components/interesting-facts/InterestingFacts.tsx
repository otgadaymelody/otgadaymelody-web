import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { type Swiper as SwiperType, Navigation, Pagination, Autoplay, EffectFade } from 'swiper';
import InterestingFactSlide from './interesting-fact-slide/InterestingFactSlide';

import './InterestingFacts.css';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import BlockBackground from '../block-background/BlockBackground';

const InterestingFacts = (): React.ReactElement => {
  const mediatorClasses = {
    topLeft: 'banner__mediator_top-left',
    topRight: 'banner__mediator_top-right',
    bottomLeft: 'banner__mediator_bottom-left',
    bottomRight: 'banner__mediator_bottom-right',
  };

  const pagination = {
    el: '.custom-pagination',
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return '<progress max="100" value="100" class="' + className + '">' + '</progress>';
    },
  };

  const onAutoplayTimeLeft = (swiper: SwiperType, timeLeft: number, progress: number): void => {
    swiper.pagination.bullets[swiper.activeIndex].setAttribute(
      'value',
      Math.ceil((1 - progress) * 100).toString(),
    );
  };

  return (
    <BlockBackground mediatorsClasses={mediatorClasses} className="interesting-facts">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        navigation={{ nextEl: '.custom-button-next', prevEl: '.custom-button-prev' }}
        pagination={pagination}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        // effect={'fade'}
      >
        <SwiperSlide>
          <InterestingFactSlide />
        </SwiperSlide>
        <SwiperSlide>
          <InterestingFactSlide />
        </SwiperSlide>
        <SwiperSlide>
          <InterestingFactSlide />
        </SwiperSlide>
        <SwiperSlide>
          <InterestingFactSlide />
        </SwiperSlide>
        <div className="custom-pagination"></div>
        <div className="custom-button-next"></div>
        <div className="custom-button-prev"></div>
      </Swiper>
    </BlockBackground>
  );
};

export default InterestingFacts;
