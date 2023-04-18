import React from 'react';
import BaseButton from '../ui/base-button/BaseButton';
import BlockBackground from '../block-background/BlockBackground';
import './MainBanner.css';
import bannerImg from '../../assets/images/home-page/banner-image.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';

const MainBanner = (): React.ReactElement => {
  const mediatorClasses = {
    topLeft: 'banner__mediator_top-left',
    topRight: 'banner__mediator_top-right',
    bottomLeft: 'banner__mediator_bottom-left',
    bottomRight: 'banner__mediator_bottom-right',
  };

  const registrationBtnClasses = {
    buttonForm: 'banner__reg-btn',
    buttonTitle: 'banner_reg-btn-title',
  };

  return (
    <BlockBackground className="banner__background" mediatorsClasses={mediatorClasses}>
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <div className="banner__info">
            <div className="banner__main-text">
              <h1>
                <span className="banner__info_bold-title">Музыкальные</span> битвы в формате -{' '}
                <span className="banner__info_bold-title">квиз игры</span>
              </h1>
              <p>
                Музыкальные битвы в формате — квиз игры, в которых команды должны за ограниченное
                время угадать музыкальные композиции. В игре принимают участие команды по 5 человек.
              </p>
            </div>
            <BaseButton
              title="Расписание игр"
              styles={registrationBtnClasses}
              href="#upcoming-game"
            />
          </div>
          <div className="banner-image">
            <div className="banner-image__wrapper">
              <img src={bannerImg} className="banner-image__img" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="banner__info">
            <div className="banner__main-text">
              <h1>
                <span className="banner__info_bold-title">Музыкальные</span> битвы в формате -{' '}
                <span className="banner__info_bold-title">квиз игры</span>
              </h1>
              <p>
                Музыкальные битвы в формате — квиз игры, в которых команды должны за ограниченное
                время угадать музыкальные композиции. В игре принимают участие команды по 5 человек.
              </p>
            </div>
            <BaseButton
              title="Расписание игр"
              styles={registrationBtnClasses}
              href="#upcoming-game"
            />
          </div>
          <div className="banner-image">
            <div className="banner-image__wrapper">
              <img src={bannerImg} className="banner-image__img" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </BlockBackground>
  );
};

export default MainBanner;
