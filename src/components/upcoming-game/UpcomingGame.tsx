import React, { type FC } from 'react';
import './UpcomingGame.css';
import { type BaseComponent } from '../../shared/interfaces/baseComponent';
import GameRegistrationButton from '../ui/game-reg-button/GameRegistrationButton';
import BlockBackground from '../block-background/BlockBackground';
import girlImg from '../../assets/images/footer/women.png';
import useDeviceType from '../../hooks/useDeviceType';
import GameInformationBanner from './game-information-banner/GameInformationBanner';
import AtGameSlider from './at-game-slider/AtGameSlider';
import { useNavigate } from 'react-router-dom';

const UpcomingGame: FC<BaseComponent> = ({ className }): React.ReactElement => {
  const navigate = useNavigate();
  const onButtonClickHandler = (): void => {
    window.location.href = 'https://vk.com/wall-164712588_7623';
  };

  const deviceType = useDeviceType();
  const isDesktop = deviceType === 'desktop';
  const mediatorClasses = {
    topLeft: 'banner__mediator_top-left',
    topRight: 'banner__mediator_top-right',
    bottomLeft: 'banner__mediator_bottom-left',
    bottomRight: 'banner__mediator_bottom-right',
  };
  return (
    <div className={`${className} upcoming-game`} id="upcoming-game">
      <div className="upcoming-game__info-block">
        <div className="upcoming-game__text-wrapper">
          <div className="upcoming-game__title">Ближайшая игра</div>
          <div className="upcoming-game__game-title">
            Новогодний <br /> Караоке Эдишн
          </div>
          <div className="upcoming-game__game-description">
            Встречаем Новый 2023 Год самыми известными и любимыми караоке хитами! Год самыми
            известными и любимыми караоке хитами!
          </div>
        </div>
        <div className="upcoming-game__images-wrapper">
          {!isDesktop && (
            <div className="upcoming-game__img-block">
              <BlockBackground
                mediatorsClasses={mediatorClasses}
                className="upcoming-game__img-bg"
              />
              <img className="upcoming-game__img" src={girlImg} />
            </div>
          )}
          <div className="upcoming-game__registration-info">
            <GameInformationBanner />
            <GameRegistrationButton icon={false} onClick={onButtonClickHandler} />
          </div>
        </div>
        <AtGameSlider />
      </div>
      {isDesktop && (
        <div className="upcoming-game__img-block">
          <BlockBackground mediatorsClasses={mediatorClasses} className="upcoming-game__img-bg" />
          <img className="upcoming-game__img" src={girlImg} />
        </div>
      )}
    </div>
  );
};

export default UpcomingGame;
