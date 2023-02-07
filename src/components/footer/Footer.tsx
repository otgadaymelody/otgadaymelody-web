import React from 'react';
import './Footer.css';
import { ReactComponent as Logo } from '../../assets/images/footer/logo-white.svg';
import useDeviceType from '../../hooks/useDeviceType';
import mediatorImage from '../../assets/images/home-page/mediator-top-left.svg';
import womenImage from '../../assets/images/footer/women.png';

const Footer = (): React.ReactElement => {
  const deviceType = useDeviceType();
  const isDesktop = deviceType === 'desktop';
  return (
    <footer className="footer">
      {/* {isDesktop && (
        <div className="footer__composition">
          <div className="footer__mediator">
            <img src={mediatorImage} />
          </div>
          <div className="footer__women">
            <img src={womenImage} />
          </div>
        </div>
      )} */}
      {isDesktop && (
        <div className="footer__composition">
          <img src={womenImage} className="footer__women" />
        </div>
      )}
      <Logo className="footer-logo" />
      <h1 className="footer__title">Следите за нами</h1>
      <div className="footer__social-btns">
        <div className="footer__tg-btn" />
        <div className="footer__vk-btn" />
      </div>
      <div className="footer__waves">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </footer>
  );
};

export default Footer;
