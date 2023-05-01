import React from 'react';
import BaseButton from '../ui/base-button/BaseButton';
import BlockBackground from '../block-background/BlockBackground';
import './MainBanner.css';
import bannerImg from '../../assets/images/home-page/banner-image.png';

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
      <div className="banner__info">
        <div className="banner__main-text">
          <h1>
            <span className="banner__info_bold-title">МУЗЫКАЛЬНЫЕ</span> ШОУ В ФОРМАТЕ -{' '}
            <span className="banner__info_bold-title">КВИЗ ИГРЫ</span>
          </h1>
          <article className="banner__description-wrapper">
            <p className="banner__description">
              Надоели однотипные мероприятия или хочется попробовать чего-нибудь новенького?
            </p>
            <p className="banner__description">
              Тогда добавьте в свою жизнь красок и драйва вместе с «Отгадай Мелодию». Уникальный
              формат мероприятия, песни, которые Вы точно знаете и любите, жаркие танцы,
              интерактивное караоке, розыгрыши и огромное количество подарков!
            </p>
            <p className="banner__description">Уверены, что это будет любовь с первого взгляда.</p>
          </article>
        </div>
        <BaseButton title="Расписание игр" styles={registrationBtnClasses} href="#upcoming-game" />
      </div>
      <div className="banner-image">
        <div className="banner-image__wrapper">
          <img src={bannerImg} className="banner-image__img" />
        </div>
      </div>
    </BlockBackground>
  );
};

export default MainBanner;
