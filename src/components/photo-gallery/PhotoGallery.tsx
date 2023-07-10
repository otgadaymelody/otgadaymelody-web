import React, { type FC } from 'react';
import './PhotoGallery.css';
import { type BaseComponent } from '../../shared/interfaces/baseComponent';
import { PHOTO_GALLERY_LIST } from './photoGalleryList.consts';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation } from 'swiper';

import sliderNextImg from '../../assets/images/future-game/slider-next.svg';
import sliderPrevImg from '../../assets/images/future-game/slider-prev.svg';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';

const PhotoGallery: FC<BaseComponent> = ({ className }): React.ReactElement => {
  const [loopedSlides, setLoopedSlides] = React.useState<number>(1);
  const navigateToVkPost = (): void => {
    window.location.href = 'https://vk.com/wall-164712588_7382';
  };

  const onLoopedSlidesChange = (swiper: any): void => {
    setLoopedSlides(2);
    swiper.params.loopedSlides = loopedSlides;
  };

  return (
    <div className={`photo-gallery ${className}`}>
      <h1 className="photo-gallery__title">Посмотрите сами у&nbsp;нас всегда круто!</h1>
      <div className="photo-gallery__swiper-wrapper">
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
          onBeforeSlideChangeStart={(swiper) => {
            onLoopedSlidesChange(swiper);
          }}
        >
          {PHOTO_GALLERY_LIST.map((item, key) => (
            <SwiperSlide key={key}>
              <img
                className="photo-gallery__photo"
                src={item}
                onClick={navigateToVkPost}
                alt={`Фото ${key}`}
              />
            </SwiperSlide>
          ))}
          <div className="photo-gallery__buttons-wrapper">
            <div className="photo-gallery__slider-button-prev">
              <img src={sliderNextImg} alt={'Кнопка назад'} />
            </div>
            <div className="photo-gallery__slider-button-next">
              <img src={sliderPrevImg} alt={'Кнопка вперед'} />
            </div>
          </div>
        </Swiper>
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
