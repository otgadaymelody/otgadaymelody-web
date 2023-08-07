import React, { type FC, useEffect, useState } from 'react';
import './PhotoGallery.css';
import { type BaseComponent } from '../../shared/interfaces/baseComponent';
import { photoGalleryImg } from './photoGalleryImg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation } from 'swiper';

import type { Swiper as SwiperClass } from 'swiper/types';

import sliderNextImg from '../../assets/images/future-game/slider-next.svg';
import sliderPrevImg from '../../assets/images/future-game/slider-prev.svg';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import axios from 'axios';
import { type GameAlbumType } from '@components/photo-gallery/PhotoGalleryProps';
import NotificationError from '@components/ui/notifications/notification-error';

const PhotoGallery: FC<BaseComponent> = ({ className }): React.ReactElement => {
  const [loopedSlides, setLoopedSlides] = React.useState<number>(1);
  const [, setNavigationClicked] = React.useState<boolean>(false);
  const [photoGallery, setPhotoGallery] = useState<GameAlbumType[]>([]);
  const [errorMessage, setErrorMessage] = useState('');
  const navigateToVkPost = (link: string): void => {
    window.location.href = link;
  };
  const onLoopedSlidesChange = (swiper: SwiperClass): void => {
    setLoopedSlides(2);
    setNavigationClicked(true);
    swiper.params.loopedSlides = 2;
  };
  const onPrevSlideChange = (swiper: SwiperClass): void => {
    setLoopedSlides(3);
    setNavigationClicked(true);
    swiper.params.loopedSlides = 3;
  };

  useEffect(() => {
    axios
      .get('api/game-albums')
      .then((res) => {
        setPhotoGallery(res.data);
        setErrorMessage('');
      })
      .catch((err) => {
        setErrorMessage(err.message);
      });
  }, []);
  return (
    <div className={`photo-gallery ${className}`}>
      {errorMessage !== '' && <NotificationError message={errorMessage} />}
      <h2 className="photo-gallery__title">Посмотрите сами у&nbsp;нас всегда круто!</h2>
      <div className="photo-gallery__swiper-wrapper">
        {photoGallery.length > 0 && (
          <Swiper
            className="photo-gallery__photos-list"
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            initialSlide={2}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 0,
              stretch: -32,
              depth: 100,
              modifier: 2,
              slideShadows: false,
            }}
            modules={[EffectCoverflow, Navigation]}
            loop={true}
            navigation={{
              nextEl: '.photo-gallery__slider-button-next',
              prevEl: '.photo-gallery__slider-button-prev',
            }}
            loopedSlides={loopedSlides}
            onNavigationNext={(swiperIns) => {
              onLoopedSlidesChange(swiperIns);
            }}
            onNavigationPrev={(swiperIns) => {
              onPrevSlideChange(swiperIns);
            }}
          >
            {photoGallery.map((item, index) => {
              const photoGalleryImgKey = item.albumImgSrc.replace(/^\/|\.png$/g, '');
              return (
                <SwiperSlide key={`${index}-${item.gameId}`}>
                  <img
                    className="photo-gallery__photo"
                    src={photoGalleryImg[photoGalleryImgKey]}
                    onClick={() => {
                      navigateToVkPost(item.albumAbsoluteLink);
                    }}
                    alt={`Фото ${item.gameId}`}
                  />
                </SwiperSlide>
              );
            })}
            <div className="photo-gallery__buttons-wrapper">
              <div className="photo-gallery__slider-button-prev">
                <img src={sliderNextImg} alt={'Кнопка назад'} />
              </div>
              <div className="photo-gallery__slider-button-next">
                <img src={sliderPrevImg} alt={'Кнопка вперед'} />
              </div>
            </div>
          </Swiper>
        )}
      </div>
      <a
        href="https://vk.com/albums-164712588"
        className="photo-gallery__album-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        Смотреть все фотоотчеты
      </a>
    </div>
  );
};

export default PhotoGallery;
