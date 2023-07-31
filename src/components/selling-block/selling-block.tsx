import React, { type FC } from 'react';
import './selling-block.css';
import { type BaseComponent } from '../../shared/interfaces/baseComponent';
import BaseButton from '@components/ui/base-button/BaseButton';
import SellingGirl from '../../assets/images/home-page/selling-block/selling-block-photo.png';
import SellingArrow from './selling-block-arrow.svg';
import GiftCertificate from './selling-block-gift.svg';
import CorporateParty from './selling-block-confetti.svg';

const SellingBlock: FC<BaseComponent> = ({ className }): React.ReactElement => {
  const downloadBtnClasses = {
    buttonForm: 'selling-download__btn',
    buttonTitle: 'selling-download__btn-title',
  };

  return (
    <section className="selling__container">
      <div className="selling-franchise__container">
        <div className="selling-franchise__description-container">
          <h1 className="selling-franchise__title">Начни своё дело вместе с «отгадай мелодию»</h1>
          <p className="selling-franchise__description">
            Открой франшизу и бла бла бла чтобы заработать денег и бла бла бла вы получите много бла
            бла бла
          </p>
          <a className="selling-franchise__button" href="https://otgadaymelody.ru/franchise">
            <BaseButton title="Узнать подробнее" styles={downloadBtnClasses} />
          </a>
        </div>
        <img className="selling-franchise__image" src={SellingGirl} />
      </div>

      <a href="https://otgadaymelody.ru/franchise" className="selling-link__franchise">
        <div className="selling-item__container">
          <img className="selling-item__img" src={GiftCertificate} />
          <div className="selling-item__description">
            <h1 className="selling-item__title">Открыть франшизу</h1>
            <img className="selling-item__arrow" src={SellingArrow} />
          </div>
        </div>
      </a>

      <a href="#" className="selling-link__certificate">
        <div className="selling-item__container">
          <img className="selling-item__img" src={GiftCertificate} />
          <div className="selling-item__description">
            <h1 className="selling-item__title">Купить сертификат</h1>
            <img className="selling-item__arrow" src={SellingArrow} />
          </div>
        </div>
      </a>

      <a href="#" className="selling-link__corporate-event">
        <div className="selling-item__container">
          <img className="selling-item__img" src={CorporateParty} />
          <div className="selling-item__description">
            <h1 className="selling-item__title">Заказать корпоратив </h1>

            <img className="selling-item__arrow" src={SellingArrow} />
          </div>
        </div>
      </a>
    </section>
  );
};

export default SellingBlock;
