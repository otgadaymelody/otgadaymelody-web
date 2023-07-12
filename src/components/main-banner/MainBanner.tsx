import React from 'react';
import BaseButton from '../ui/base-button/BaseButton';
import BlockBackground from '../block-background/BlockBackground';
import './MainBanner.css';
import bannerImg from '../../assets/images/home-page/main-banner-photo.png';
import dots from '../../assets/images/home-page/dots.png';
import useDeviceType from '../../hooks/useDeviceType';

const MainBanner = (): React.ReactElement => {
  const onClickHandler = (): void => {
    window.location.href = 'https://vk.com/wall-164712588_7382';
  };

  const deviceType = useDeviceType();
  const isMobile = deviceType === 'mobile';

  // const mediatorClasses = {
  //   topLeft: 'banner__mediator_top-left',
  //   topRight: 'banner__mediator_top-right',
  //   bottomLeft: 'banner__mediator_bottom-left',
  //   bottomRight: 'banner__mediator_bottom-right',
  // };

  const registrationBtnClasses = {
    buttonForm: 'banner__reg-btn',
    buttonTitle: 'banner_reg-btn-title',
  };

  return (
    <div className="banner__background">
      <div className="banner__info">
        <div className="banner__main-text">
          <h1>
            <span className="banner__info_bold-title">МУЗЫКАЛЬНЫЕ</span> ШОУ В ФОРМАТЕ -{' '}
            <span className="banner__info_bold-title">КВИЗ ИГРЫ</span>
          </h1>
          <article className="banner__description-wrapper">
            {!isMobile && (
              <p className="banner__description">
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
          href="#upcoming-game"
          onClick={onClickHandler}
        />
      </div>
      <div className="banner-image">
        <img src={bannerImg} className="banner-image__img" />
      </div>
      {isMobile && (
        <div className="banner__dots">
          <img src={dots} className="banner__dots__img" />
        </div>
      )}
    </div>
  );
};

export default MainBanner;
