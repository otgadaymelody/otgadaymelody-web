import React, { type FC, useState } from 'react';
import HeaderLink from './HeaderLink';
import { ReactComponent as Logo } from '@assets/images/header/logo.svg';
import { ReactComponent as UserLogo } from '@assets/images/header/user-logo.svg';
import { ReactComponent as BurgerBtn } from '@assets/images/header/burger-menu.svg';
import { ReactComponent as LocationBtn } from '@assets/images/header/loc_button.svg';
import location from '@assets/images/header/loc.svg';
import { NAV_LINKS } from './nav-links.consts';
import './Header.css';
import BaseButton from '../../ui/base-button/BaseButton';
import useDeviceType from '../../../hooks/useDeviceType';
import BurgerMenu from './burger-menu/BurgerMenu';
import { useNavigate } from 'react-router-dom';

const Header: FC = () => {
  const [activeMenu, setActiveMenu] = useState(false);
  const navigate = useNavigate();
  const deviceType = useDeviceType();
  const isDesktop = deviceType === 'desktop';
  const notDesktopOrTabletLg = !isDesktop && !(deviceType === 'tablet-lg');
  const notMobileOrTablet = !(deviceType === 'mobile') && !(deviceType === 'tablet');
  const desktopOrTabletLg = isDesktop || deviceType === 'tablet-lg';

  return (
    <header className="header">
      {notDesktopOrTabletLg && (
        <BurgerBtn
          onClick={() => {
            setActiveMenu(true);
          }}
          className="header__btn"
        />
      )}
      <div className="header__navbar">
        <Logo
          className="header__logo"
          onClick={() => {
            navigate('/');
          }}
        />

        {desktopOrTabletLg && (
          <nav className="header__links">
            {NAV_LINKS.map((item, index) => (
              <HeaderLink
                title={item.title}
                img={item.images}
                url={item.url}
                key={index}
                hash={item.hash}
              />
            ))}
          </nav>
        )}
      </div>
      {isDesktop ? (
        <div className="header__btns">
          <BaseButton
            title="Нижний Новгород"
            img={location}
            onClick={() => {
              navigate('/');
            }}
          />
          {/* <UserLogo className="header__social-btn" /> */}
        </div>
      ) : (
        <>
          {/* {notMobileOrTablet && <UserLogo className="header__social-btn" />} */}
          <LocationBtn
            className="header__location-btn"
            onClick={() => {
              navigate('/');
            }}
          />
        </>
      )}
      {!notMobileOrTablet && activeMenu && (
        <BurgerMenu active={activeMenu} setActive={setActiveMenu} />
      )}
    </header>
  );
};

export default Header;
