import React from 'react';
import BaseButton from '../ui/base-button/BaseButton';
import './MainBanner.css';
import bannerImgWith from '../../assets/images/home-page/main-banner-photo.png';
import bannerImgWithout from '../../assets/images/home-page/main-banner-photo-without-o.png';
import dots from '../../assets/images/home-page/dots.svg';
import useDeviceType from '../../hooks/useDeviceType';
import { scrollToSection } from '../../utils/scrollToSection';

const MainBanner = (): React.ReactElement => {
  const onClickHandler = (): void => {
    scrollToSection('#future-games-list');
  };

  const deviceType = useDeviceType();
  const isMobile = deviceType === 'mobile';
  const isTablet = deviceType === 'tablet';

  const registrationBtnClasses = {
    buttonForm: 'banner__reg-btn',
    buttonTitle: 'banner_reg-btn-title',
  };

  return (
    <section className="banner__background">
      <div className="banner__info">
        <div className="banner__main-text">
          <h1>
            <span className="banner__title">МУЗЫКАЛЬНЫЕ</span> ШОУ В&nbsp;ФОРМАТЕ -
            <span className="banner__title"> КВИЗ ИГРЫ</span>
          </h1>
          <article>
            {!isMobile && (
              <p>
                Добавьте красок и драйва в жизнь с &quot;Отгадай Мелодию&ldquo;. Уникальный формат
                мероприятия с популярными песнями, танцами, караоке, розыгрышами и множеством
                подарков! Любовь с первого взгляда гарантирована.
              </p>
            )}
          </article>
        </div>
        <BaseButton
          title="Расписание игр"
          styles={registrationBtnClasses}
          href="#future-games-list"
          onClick={onClickHandler}
        />
      </div>
      <div className="banner-image">
        <img
          src={isTablet ? bannerImgWithout : bannerImgWith}
          className="banner-image__img"
          alt={'Девушка с микрофоном'}
        />
      </div>
    </section>
  );
};

export default MainBanner;
