import React, { type FC } from 'react';
import '../franchise-about-us/franchise-about-us.css';
import franchisePreview from '../../assets/images/franchise/franchise-preview.png';
import RulesItem from './rules-item/rules-item';
import { FRANCHISE_RULES_LIST } from './rules.consts';
import useDeviceType from '../../hooks/useDeviceType';

const FranchiseAboutUs: FC = () => {
  const deviceType = useDeviceType();
  const isMobile = deviceType === 'mobile';

  return (
    <section className="franchise-about-us__container">
      <div className="franchise-about-us__description-container">
        <div className="franchise-about-us__title-container">
          <h1 className="franchise-about-us__title">
            Что такое
            <span className="franchise-about-us__title-pink"> Отгадай мелодию?</span>
          </h1>
        </div>
        <div className="franchise-about-us__text-container">
          <p className="franchise-about-us__text">
            «Отгадай Мелодию» — это самая народная интеллектуально-музыкальная битва, в которой
            неважно насколько музыкально продвинутые игроки, главное, что на протяжении 2,5 — 3
            часов они будут находится в непередаваемой атмосфере, отгадывать знакомые мелодии, петь
            во весь голос, танцевать и веселиться от души.
          </p>
        </div>

        <div className="franchise-about-us__rules-container">
          {FRANCHISE_RULES_LIST.map((item, index) => (
            <RulesItem key={index} title={item.title} subtitle={item.subtitle}></RulesItem>
          ))}
        </div>
      </div>

      {!isMobile && (
        <div className="franchise-about-us__image-container">
          <img className="franchise-about-us__image" src={franchisePreview}></img>
        </div>
      )}
    </section>
  );
};

export default FranchiseAboutUs;
