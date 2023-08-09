import React, { type FC } from 'react';
import aboutUsPreview from '../../assets/images/home-page/about-us-preview.png';
import useDeviceType from '../../hooks/useDeviceType';
import './AboutUs.css';
import InfographicBlock from './infographic-block/InfographicBlock';
import GameRulesCarousel from './game-rules-carousel/GameRulesCarousel';
import { type BaseComponent } from '../../shared/interfaces/baseComponent';

const AboutUs: FC<BaseComponent> = ({ className }): React.ReactElement => {
  const deviceType = useDeviceType();
  const isMobile = deviceType === 'mobile';

  return (
    <div className={`about-us ${className}`}>
      <div className="game-rules__wrapper">
        {!isMobile && <img src={aboutUsPreview} className="game-rules__preview-img" />}
        <section className="game-rules__main-info">
          <h2 className="game-rules__title">Что такое &quot;Отгадай Мелодию&quot;?</h2>
          {isMobile && <img src={aboutUsPreview} className="game-rules__preview-img" />}
          <article className="game-rules__description-wrapper">
            <p className="game-rules__description">
              <strong>Отгадай Мелодию</strong> - это самая народное интеллектуально-музыкальное шоу
              в формате квиз игры. Где командам предстоит отгадывать знакомые мелодии, петь во весь
              голос, танцевать и веселиться от души и все это в непередаваемой атмосфере.
            </p>
            <p className="game-rules__description">
              Мы придумали абсолютно новый формат, не похожий на подобные мероприятия, который
              филигранно балансирует на грани классического квиза с вопросами, самого шумного
              караоке и тематической вечеринки с жаркими танцами.
            </p>
            <p className="game-rules__description">
              Что в совокупности закрывает сразу большую часть потребностей человека в качественном
              и интересном досуге.
            </p>

            <p className="game-rules__description">
              <strong>Отгадай Мелодию</strong> на себе опробовали уже десятки тысяч людей в разных
              городах нашей большой и необъятной страны.
            </p>
            <p className="game-rules__description">
              <strong>Просто поверьте, что такого Вы еще не видели!</strong>
            </p>
          </article>
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
