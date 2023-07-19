import React, { type FC } from 'react';
import './UpcomingGame.css';
import { type BaseComponent } from '../../shared/interfaces/baseComponent';
import GameRegistrationButton from '../ui/game-reg-button/GameRegistrationButton';
import BlockBackground from '../block-background/BlockBackground';
import womenImg from '../../assets/images/home-page/upcoming-game/upcoming-banner-img.png';
import useDeviceType from '../../hooks/useDeviceType';
import GameInformationBanner from './game-information-banner/GameInformationBanner';
import AtGameSlider from './at-game-slider/AtGameSlider';

const UpcomingGame: FC<BaseComponent> = ({ className }): React.ReactElement => {
  const onButtonClickHandler = (): void => {
    window.location.href = 'https://vk.com/wall-164712588_7623';
  };
  const deviceType = useDeviceType();
  const isDesktop = deviceType === 'desktop';
  const isMobile = deviceType === 'mobile';

  const mediatorClasses = {
    topLeft: 'banner__mediator_top-left',
    topRight: 'banner__mediator_top-right',
    bottomLeft: 'banner__mediator_bottom-left',
    bottomRight: 'banner__mediator_bottom-right',
  };
  return (
    <section className={`${className} upcoming-game`} id="upcoming-game">
      {isDesktop && (
        <div className="upcoming-game__img-block">
          <BlockBackground mediatorsClasses={mediatorClasses} className="upcoming-game__img-bg" />
          <img className="upcoming-game__img" src={womenImg} />
        </div>
      )}
      <div className="upcoming-game__info-block">
        <div className="upcoming-game__main-info">
          <div className="upcoming-game__text-wrapper">
            <div className="upcoming-game__title">Ближайшая игра</div>
            <div className="upcoming-game__game-title">Россия #24</div>
            {!isMobile && (
              <div className="upcoming-game__game-description">
                Встречаем Новый 2023 Год самыми известными и любимыми караоке хитами! Год самыми
                известными и любимыми караоке хитами!
              </div>
            )}
          </div>
          {isMobile && (
            <>
              <div className="upcoming-game__img-block">
                <BlockBackground
                  mediatorsClasses={mediatorClasses}
                  className="upcoming-game__img-bg"
                />
                <img className="upcoming-game__img" src={womenImg} />
              </div>
              <div className="upcoming-game__game-description">
                Встречаем Новый 2023 Год самыми известными и любимыми караоке хитами!
                <br />
                Год самыми известными и любимыми караоке хитами!
              </div>
            </>
          )}
          <div className="upcoming-game__registration-info">
            <GameInformationBanner />
            <GameRegistrationButton onClick={onButtonClickHandler} />
          </div>
        </div>
        <AtGameSlider />
      </div>
    </section>
  );
};

export default UpcomingGame;
