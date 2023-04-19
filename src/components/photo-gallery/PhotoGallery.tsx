import React, { type FC } from 'react';
import BaseButton from '../ui/base-button/BaseButton';
import './PhotoGallery.css';
import { type BaseComponent } from '../../shared/interfaces/baseComponent';
import { PHOTO_GALLERY_LIST } from './photoGalleryList.consts';
import { Swiper, SwiperSlide } from 'swiper/react';

import sliderNextImg from '../../assets/images/future-game/slider-next.svg';
import sliderPrevImg from '../../assets/images/future-game/slider-prev.svg';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';

import { EffectCoverflow, Navigation } from 'swiper';

const PhotoGallery: FC<BaseComponent> = ({ className }): React.ReactElement => {
  const showAllBtnStyles = {
    buttonForm: 'photo-gallery__show-all-btn',
    buttonTitle: 'photo-gallery__show-all-btn-title',
  };
  return (
    <div className={`photo-gallery ${className}`}>
      <div className="photo-gallery__title">Посмотрите сами у нас всегда круто!</div>
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
      >
        {PHOTO_GALLERY_LIST.map((item, key) => (
          <SwiperSlide key={key}>
            <img className="photo-gallery__photo" src={item} />
          </SwiperSlide>
        ))}
        <div className="photo-gallery__slider-button-prev">
          <img src={sliderNextImg} />
        </div>
        <div className="photo-gallery__slider-button-next">
          <img src={sliderPrevImg} />
        </div>
      </Swiper>
      <BaseButton
        title="Смотреть все фотоотчеты"
        styles={showAllBtnStyles}
        href="https://vk.com/albums-164712588"
      />
    </div>
  );
};

export default PhotoGallery;
