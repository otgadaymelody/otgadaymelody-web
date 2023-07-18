import React, { type FC } from 'react';
import './download.css';
import franchiseDownload from '../../../assets/images/franchise/franchise-download-img.png';
import BaseButton from '../../ui/base-button/BaseButton';
import useDeviceType from '../../../hooks/useDeviceType';
import franch from '../../../assets/presentaions/franch.pdf';

const Download: FC = () => {
  const downloadBtnClasses = {
    buttonForm: 'franchise-download__btn',
    buttonTitle: 'franchise-download__btn-title',
  };

  const deviceType = useDeviceType();
  const isMobile = deviceType === 'mobile';

  return (
    <section className="franchise-download">
      <div className="franchise-download__container">
        <div className="franchise-download__content-container">
          <h2 className="franchise-download__title">
            Скачать презентацию франшизы «отгадай мелодию»
          </h2>
          <a href={franch} download="info-otgaday-melody">
            <BaseButton title="Скачать" styles={downloadBtnClasses} />
          </a>
        </div>
        {!isMobile && (
          <div>
            <img src={franchiseDownload} className="franchise-download__img"></img>
          </div>
        )}
      </div>
    </section>
  );
};

export default Download;
