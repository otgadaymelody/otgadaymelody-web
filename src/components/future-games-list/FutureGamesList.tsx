import React, { type FC, useEffect, useState } from 'react';
import BlockBackground from '../block-background/BlockBackground';
import FutureGame from './future-game/FutureGame';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import sliderNextImg from '../../assets/images/future-game/slider-next.svg';
import sliderPrevImg from '../../assets/images/future-game/slider-prev.svg';

import './FutureGamesList.css';
import 'swiper/css';
import 'swiper/css/pagination';

import { type BaseComponent } from '../../shared/interfaces/baseComponent';
import { type FutureGameResponseType } from '@components/future-games-list/future-game/FutureGameProps';

const FutureGamesList: FC<BaseComponent> = ({ className }): React.ReactElement => {
  const mediatorClasses = {
    topLeft: 'future-games-list__mediator_top-left',
    topRight: 'future-games-list__mediator_top-right',
    bottomLeft: 'future-games-list__mediator_bottom-left',
    bottomRight: 'future-games-list__mediator_bottom-right',
  };

  const [futureGames, setFutureGames] = useState<FutureGameResponseType[]>([]);

  useEffect(() => {
    axios
      .get('api/future-games')
      .then((res) => {
        setFutureGames(res.data);
      })
      .catch(() => console.log('error'));
  }, []);

  const slidesPerView = futureGames.length > 2 ? 3 : 2;
  const containerSliderSize = `future-games__swiper-container${
    futureGames.length > 2 ? '-large' : '-small'
  }`;

  const futureButtonsWrapper =
    futureGames.length > 3
      ? 'future-games-list__buttons-wrapper'
      : 'future-games-list__buttons-wrapper-none';

  return (
    <>
      {futureGames.length && (
        <BlockBackground
          className={`future-games-list ${className}`}
          mediatorsClasses={mediatorClasses}
        >
          <h2 className="future-games-list__title">Предстоящие игры</h2>
          <div className={containerSliderSize}>
            <Swiper
              navigation={{
                nextEl: '.future-games-list__slider-button-next',
                prevEl: '.future-games-list__slider-button-prev',
              }}
              spaceBetween={32}
              modules={[Navigation]}
              className="future-games-list__games_list"
              breakpoints={{
                360: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                1280: {
                  slidesPerView: slidesPerView,
                  spaceBetween: 50,
                },
              }}
            >
              {futureGames.map((item) => (
                <SwiperSlide key={item.id}>
                  <FutureGame className={'future-games-list__game'} game={item} />
                </SwiperSlide>
              ))}
              <div className={futureButtonsWrapper}>
                <div className="future-games-list__slider-button-prev">
                  <img src={sliderNextImg} />
                </div>
                <div className="future-games-list__slider-button-next">
                  <img src={sliderPrevImg} />
                </div>
              </div>
            </Swiper>
          </div>
        </BlockBackground>
      )}
    </>
  );
};

export default FutureGamesList;
