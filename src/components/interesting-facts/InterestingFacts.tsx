import React, { type FC, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { type Swiper as SwiperType, Navigation, Pagination, Autoplay } from 'swiper';
import InterestingFactSlide from './interesting-fact-slide/InterestingFactSlide';
import { FACTS_LIST } from './facts.consts';
import './InterestingFacts.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import BlockBackground from '../block-background/BlockBackground';
import { type AutoplayOptions } from 'swiper/types';

declare interface InterestingFactsProps {
  isVisible: boolean;
}

const InterestingFacts: FC<InterestingFactsProps> = ({ isVisible }): React.ReactElement => {
  const mediatorClasses = {
    topLeft: 'banner__mediator_top-left',
    topRight: 'banner__mediator_top-right',
    bottomLeft: 'banner__mediator_bottom-left',
    bottomRight: 'banner__mediator_bottom-right',
  };

  let autoplay: AutoplayOptions | boolean = isVisible;
  if (isVisible) {
    autoplay = {
      delay: 2500,
      disableOnInteraction: false,
    };
  }
  useEffect(() => {}, [autoplay]);

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

  const onSlideChange = (swiper: SwiperType): void => {
    swiper.pagination.bullets[swiper.previousIndex].setAttribute('value', '100');
  };

  return (
    <BlockBackground mediatorsClasses={mediatorClasses} className="interesting-facts">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation={{ nextEl: '.custom-button-next', prevEl: '.custom-button-prev' }}
        pagination={pagination}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        onSlideChange={onSlideChange}
      >
        {FACTS_LIST.map((item, index) => (
          <SwiperSlide key={index}>
            <InterestingFactSlide fact={item} />
          </SwiperSlide>
        ))}
        <div className="custom-pagination"></div>
        <div className="custom-button-next"></div>
        <div className="custom-button-prev"></div>
      </Swiper>
    </BlockBackground>
  );
};

export default InterestingFacts;
