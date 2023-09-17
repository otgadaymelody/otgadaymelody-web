import React, { type FC, useEffect, useState } from 'react';
import aboutUsPreview from '../../assets/images/home-page/about-us/about-us-with-vector.png';
import aboutUsPreviewMobile from '../../assets/images/home-page/about-us/about-us-with-vector-mobile.png';
import BaseButton from '../ui/base-button/BaseButton';
import useDeviceType from '../../hooks/useDeviceType';
import './AboutUs.css';
import InfographicBlock from './infographic-block/InfographicBlock';
import GameRulesCarousel from './game-rules-carousel/GameRulesCarousel';
import { type BaseComponent } from '../../shared/interfaces/baseComponent';
import axios from 'axios';
import { scrollToSection } from '../../utils/scrollToSection';

const AboutUs: FC<BaseComponent> = ({ className }): React.ReactElement => {
  const [gameId, setGameId] = useState(1);
  const deviceType = useDeviceType();
  const isMobile = deviceType === 'mobile';

  const registrationBtnClasses = {
    buttonForm: 'game-rules__reg-btn',
    buttonTitle: 'game-rules__reg-btn-title',
  };

  useEffect(() => {
    axios
      .get('api/next-game')
      .then((res) => {
        setGameId(res.data.id);
      })
      .catch((err) => {
        console.error(err.message);
      });
  }, []);

  return (
    <div className={`about-us ${className}`}>
      <div className="game-rules__wrapper">
        {isMobile ? (
          <img src={aboutUsPreviewMobile} className="game-rules__preview-img" alt="Фото команды" />
        ) : (
          <img src={aboutUsPreview} className="game-rules__preview-img" alt="Фото команды" />
        )}

        <section className="game-rules__main-info">
          <h2 className="game-rules__title">Как проходят игры?</h2>
          <article className="game-rules__description-wrapper">
            <p className="game-rules__description">
              Отгадай Мелодию - это народное интеллектуально - музыкальное шоу в формате квиз игры,
              где командам предстоит отгадывать знакомые мелодии, петь во весь голос, танцевать и
              веселиться от души в непередаваемой атмосфере.
            </p>

            <p className="game-rules__description">
              Отгадай Мелодию на себе опробовали уже десятки тысяч людей в разных городах нашей
              большой и необъятной страны.
            </p>

            <h3 className="game-rules__subtitle">Нет команды?</h3>

            <p className="game-rules__description">
              Не проблема - регистрируйся на игру, а мы найдем команду!
            </p>
          </article>

          <BaseButton
            onClick={() => scrollToSection('#future-games-list')}
            title="Регистрация на игру"
            styles={registrationBtnClasses}
            href="#upcoming-game"
          />
        </section>
      </div>

      <div className="infographic-block__wrapper">
        <InfographicBlock />
      </div>

      <GameRulesCarousel />
    </div>
  );
};

export default AboutUs;
