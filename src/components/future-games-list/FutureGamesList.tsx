import React, { type FC, useEffect, useRef, useState } from 'react';
import BlockBackground from '../block-background/BlockBackground';
import FutureGame from './future-game/FutureGame';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, type Swiper as SwiperType } from 'swiper';

import sliderNextImg from '../../assets/images/future-game/slider-next.svg';
import sliderPrevImg from '../../assets/images/future-game/slider-prev.svg';

import './FutureGamesList.css';
import 'swiper/css';
import 'swiper/css/pagination';

import { type BaseComponent } from '../../shared/interfaces/baseComponent';
import { type FutureGameResponseType } from '@components/future-games-list/future-game/FutureGameProps';
import useDeviceType from '../../hooks/useDeviceType';
import BaseButton from '@components/ui/base-button/BaseButton';
import NotificationError from '@components/ui/notifications/notification-error';
import {
  getSlidesPerViewCountDesktop,
  getSlidesPerViewCountLargeDesktop,
} from '../../utils/getSlidesPerView';
import { getContainerSliderSize } from '../../utils/getContainerSliderSize';
import { getButtonsWrapperClass } from '../../utils/getButtonsWrapperClass';

const FutureGamesList: FC<BaseComponent> = ({ className }): React.ReactElement => {
  const deviceType = useDeviceType();
  const swiperRef = useRef<SwiperType>();
  const [errorMessage, setErrorMessage] = useState('');

  const isDesktop = deviceType === 'desktop';
  const isMobile = deviceType === 'mobile';
  const isTablet = deviceType === 'tablet';
  const isTabletLg = deviceType === 'tablet-lg';
  const mediatorClasses = {
    topLeft: 'future-games-list__mediator_top-left',
    topRight: 'future-games-list__mediator_top-right',
    bottomLeft: 'future-games-list__mediator_bottom-left',
    bottomRight: 'future-games-list__mediator_bottom-right',
  };

  const [futureGames, setFutureGames] = useState<FutureGameResponseType[]>([]);



  const showMoreBtnClasses = {
    buttonForm: 'future-games-list__show-more-btn',
    buttonTitle: 'future-games-list__show-more-btn-title',
  };

  const slidesPerViewCountDesktop = getSlidesPerViewCountDesktop(futureGames.length);
  const slidesPerViewCountLargeDesktop = getSlidesPerViewCountLargeDesktop(futureGames.length);

  const [breakPointsSLider, setBreakPointsSLider] = useState({
    768: {
      slidesPerView: 2,
    },
    1280: {
      slidesPerView: slidesPerViewCountDesktop,
    },
    1920: {
      slidesPerView: slidesPerViewCountLargeDesktop,
    },
  });
  const containerSliderSize = getContainerSliderSize(
    isTablet,
    isTabletLg,
    isMobile,
    futureGames.length,
  );
  const futureButtonsWrapper = getButtonsWrapperClass(
    futureGames.length,
    isTablet,
    isTabletLg,
    isDesktop,
  );

  useEffect(() => {
    axios
      .get<FutureGameResponseType[]>('api/future-games')
      .then((res) => {
        setFutureGames(res.data);
        setBreakPointsSLider({
            768: {
              slidesPerView: 2,
            },
            1280: {
              slidesPerView: getSlidesPerViewCountDesktop(res?.data.length),
            },
            1920: {
              slidesPerView: getSlidesPerViewCountLargeDesktop(res?.data.length),
            },
        });
        setErrorMessage('');
      })
      .catch((err) => {
        setErrorMessage(err.message);
      });
  }, []);

  return (
    <section id="future-games-list">
      {errorMessage !== '' && <NotificationError message={errorMessage} />}
      {futureGames.length > 0 && isMobile ? (
        <BlockBackground
          className={`future-games-list ${className}`}
          mediatorsClasses={mediatorClasses}
        >
          <h2 className="future-games-list__title">Предстоящие игры</h2>
          <Swiper
            modules={[Navigation]}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            navigation={{
              nextEl: '.future-games-list__slider-button-next',
              prevEl: '.future-games-list__slider-button-prev',
            }}
            spaceBetween={16}
            slidesPerView={1}
            className="future-games-list__games-list_mobile"
          >
            {futureGames.map((item, index) => (
              <SwiperSlide key={item.id} className={'future-games-list__game-slide_mobile'}>
                <FutureGame className={'future-games-list__game'} game={item} />
              </SwiperSlide>
            ))}
            <div className={'future-games-list__buttons-wrapper'}>
              <div className="future-games-list__slider-button-prev">
                <img src={sliderNextImg} alt={'Предыдущий'} />
              </div>
              <div className="future-games-list__slider-button-next">
                <img src={sliderPrevImg} alt={'Следующий'} />
              </div>
            </div>
            <div className={'future-games-list__button-wrapper_mobile-none'}>
              <BaseButton
                title="Показать ещё"
                styles={showMoreBtnClasses}
                onClick={() => swiperRef.current?.slideNext()}
              />
            </div>
          </Swiper>
        </BlockBackground>
      ) : (
        <BlockBackground
          className={`future-games-list ${className}`}
          mediatorsClasses={mediatorClasses}
        >
          <h2 className="future-games-list__title">Предстоящие игры</h2>
          <div className={containerSliderSize}>
            { (futureGames.length > 0) && <Swiper
              navigation={{
                nextEl: '.future-games-list__slider-button-next',
                prevEl: '.future-games-list__slider-button-prev',
              }}
              spaceBetween={24}
              modules={[Navigation]}
              className="future-games-list__games_list"
              breakpoints={breakPointsSLider}
            >
              {futureGames.map((item, index) => (
                <SwiperSlide key={item.id} className={'future-games-list__game-slide'}>
                  <FutureGame className={'future-games-list__game'} game={item} />
                </SwiperSlide>
              ))}
              <div className={futureButtonsWrapper}>
                <div className="future-games-list__slider-button-prev">
                  <img src={sliderNextImg} alt={'Предыдущий'} />
                </div>
                <div className="future-games-list__slider-button-next">
                  <img src={sliderPrevImg} alt={'Следующий'} />
                </div>
              </div>
            </Swiper>}
          </div>
        </BlockBackground>
      )}
    </section>
  );
};

export default FutureGamesList;
