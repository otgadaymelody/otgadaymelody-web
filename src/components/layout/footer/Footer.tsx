import React, { type FC } from 'react';
import './Footer.css';
import { ReactComponent as Logo } from '@assets/images/footer/logo-white.svg';
import useDeviceType from '../../../hooks/useDeviceType';
import footerIcon from '@assets/images/footer/footer-icon.svg';
import { type BaseComponent } from '../../../shared/interfaces/baseComponent';
import { SOCIAL_URL } from '../../../shared/consts/socialURLs.consts';

const Footer: FC<BaseComponent> = ({ className }): React.ReactElement => {
  const deviceType = useDeviceType();
  const isDesktop = deviceType === 'desktop';

  return (
    <footer className={`footer ${className}`}>
      {isDesktop && <img src={footerIcon} className="footer__icon" />}
      <section className="footer__infoblock">
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
      </section>
    </footer>
  );
};

export default Footer;
