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
      {isDesktop && (
        <div className="footer__composition">
          <img src={womenImage} className="footer__women" />
          <img src={mediatorImage} className="footer__mediator" />
        </div>
      )}
      <Logo className="footer-logo" />
      <h1 className="footer__title">Следите за нами</h1>
      <div className="footer__social-btns">
        <div className="footer__tg-btn" />
        <div className="footer__vk-btn" />
      </div>
    </footer>
  );
};

export default Footer;
