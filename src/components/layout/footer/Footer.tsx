import React, { type FC } from 'react';
import './Footer.css';
import { ReactComponent as Logo } from '@assets/images/footer/logo-white.svg';
// import { ReactComponent as WaveImg } from '@assets/images/footer/wave.svg';
import useDeviceType from '../../../hooks/useDeviceType';
// import womenImage from '@assets/images/footer/women.png';
import footerIcon from '@assets/images/footer/footer-icon.svg';
// import logo from '@assets/images/footer/logo-white.svg';

import { type BaseComponent } from '../../../shared/interfaces/baseComponent';
import { SOCIAL_URL } from '../../../shared/consts/socialURLs.consts';

const Footer: FC<BaseComponent> = ({ className }): React.ReactElement => {
  const deviceType = useDeviceType();
  const isDesktop = deviceType === 'desktop';
  const isTabletLg = deviceType === 'tablet - lg';

  return (
    <footer className={`footer ${className}`}>
      <div className="container footer__container">
        {/* {isDesktop && (
          <div className="footer__composition">
            <img src={womenImage} className="footer__women" />
          </div>
        )} */}
        {(isDesktop || isTabletLg) && <img src={footerIcon} className="footer__icon" />}
        <div className="wrapper">
          <Logo className="footer-logo" />
          <h1 className="footer__title">Следите за нами</h1>
          <div className="footer__social-btns">
            <a
              className="footer__vk-btn"
              href={SOCIAL_URL.VK}
              target="_blank"
              rel="noopener noreferrer"
            />
          </div>
        </div>
      </div>
      {/* <div className="footer__waves">
        <WaveImg />
      </div> */}
    </footer>
  );
};

export default Footer;
