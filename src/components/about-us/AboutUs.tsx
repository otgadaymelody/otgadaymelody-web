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

  const regBtnStyles = {
    buttonForm: 'game-rules__reg-btn',
    buttonTitle: 'game-rules__reg-btn-title',
  };

  return (
    <div className={`about-us ${className}`}>
      <div className="game-rules__wrapper">
        {!isMobile && <img src={aboutUsPreview} className="game-rules__preview-img" />}
        <section className="game-rules__main-info">
          <h1 className="game-rules__title">Что такое &quot;Отгадай Мелодию&quot;?</h1>
          {isMobile && <img src={aboutUsPreview} className="game-rules__preview-img" />}
          <p className="game-rules__description">
            <strong>Отгадай Мелодию</strong> - это самая народное интеллектуально-музыкальное шоу в
            формате квиз игры. Где командам предстоит отгадывать знакомые мелодии, петь во весь
            голос, танцевать и веселиться от души и все это в непередаваемой атмосфере.
            <br />
            <br />
            Мы придумали абсолютно новый формат, не похожий на подобные мероприятия, который
            филигранно балансирует на грани классического квиза с вопросами, самого шумного караоке
            и тематической вечеринки с жаркими танцами. <br />
            <br />
            Что в совокупности закрывает сразу большую часть потребностей человека в качественном и
            интересном досуге. <br />
            <br />
            <strong>Отгадай Мелодию</strong> на себе опробовали уже десятки тысяч людей в разных
            городах нашей большой и необъятной страны. Просто поверьте, что такого Вы еще не видели!{' '}
            <br />
            <br />
            <strong>Просто поверьте, что такого Вы еще не видели!</strong>
          </p>
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
