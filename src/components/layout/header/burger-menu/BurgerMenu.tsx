import React, { type FC } from 'react';
import './BurgerMenu.css';
import { ReactComponent as CloseBtn } from '../../../../assets/images/header/close-btn.svg';
import HeaderLink from '../HeaderLink';
import { NAV_IMAGES } from '../nav-images.consts';

interface BurgerMenuProps {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const BurgerMenu: FC<BurgerMenuProps> = ({ active, setActive }) => {
  return (
    <div className="burger-menu__wrapper">
      <div className="burger-menu">
        <CloseBtn
          className="burger-menu__close-btn"
          onClick={() => {
            setActive(false);
          }}
        />
        <div className="burger-menu__content">
          <nav className="burger-menu__links">
            <HeaderLink title="Расписание игр" img={NAV_IMAGES[0]} url="#upcoming-game" />
            <HeaderLink title="Фотоотчеты" img={NAV_IMAGES[1]} url="123" />
            <HeaderLink title="Корпоративы" img={NAV_IMAGES[2]} url="123" />
            <HeaderLink title="Франшиза" img={NAV_IMAGES[3]} url="123" />
          </nav>
          <div className="burger-menu__footer">
            <span>VK</span>
            <span>TG</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;
