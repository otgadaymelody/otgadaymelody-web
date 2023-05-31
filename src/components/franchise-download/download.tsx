import React, { type FC } from 'react';
import './download.css';
import franchiseDownload from '../../assets/images/franchise/franchise-download-img.png';
import BaseButton from '../ui/base-button/BaseButton';

const Download: FC = () => {
  const downloadBtnClasses = {
    buttonForm: 'franchise-download__btn',
    buttonTitle: 'franchise-download__btn-title',
  };

  return (
    <section className="franchise-download">
      <div className="franchise-download__container">
        <div className="franchise-download__content-container">
          <h2 className="franchise-download__title">
            Скачать презентацию франшизы «отгадай мелодию»
          </h2>
          <BaseButton title="Скачать" styles={downloadBtnClasses} />
        </div>
        <div>
          <img src={franchiseDownload} className="franchise-download__img"></img>
        </div>
      </div>
    </section>
  );
};

export default Download;
