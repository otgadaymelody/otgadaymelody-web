import React, { type FC, useState } from 'react';
import HeaderLink from './HeaderLink';
import { ReactComponent as Logo } from '../../assets/images/header/logo.svg';
import { ReactComponent as UserLogo } from '../../assets/images/header/user-logo.svg';
import { ReactComponent as BurgerBtn } from '../../assets/images/header/burger-menu.svg';
import { ReactComponent as LocationBtn } from '../../assets/images/header/loc_button.svg';
import { NAV_LINKS } from './nav-links.consts';
import location from '../../assets/images/header/loc.svg';
import './Header.css';
import BaseButton from '../ui/base-button/BaseButton';
import useDeviceType from '../../hooks/useDeviceType';
import BurgerMenu from './burger-menu/BurgerMenu';

const Header: FC = () => {
  const [activeMenu, setActiveMenu] = useState(false);

  const deviceType = useDeviceType();
  const isDesktop = deviceType === 'desktop';

  return (
    <header className="header">
      {!isDesktop && (
        <BurgerBtn
          onClick={() => {
            setActiveMenu(true);
          }}
          className="header__btn"
        />
      )}
      <div className="header__navbar">
        <Logo className="header__logo" />

        {isDesktop && (
          <nav className="header__links">
            {NAV_LINKS.map((item, index) => (
              <HeaderLink title={item.title} img={item.images} key={index} />
            ))}
          </nav>
        )}
      </div>
      {isDesktop ? (
        <div className="header__btns">
          <BaseButton title="Нижний Новгород" img={location} />
          <UserLogo className="header__social-btn" />
        </div>
      ) : (
        <LocationBtn className="header__location-btn" />
      )}
      {!isDesktop && activeMenu && <BurgerMenu active={activeMenu} setActive={setActiveMenu} />}
    </header>
  );
};

export default Header;
