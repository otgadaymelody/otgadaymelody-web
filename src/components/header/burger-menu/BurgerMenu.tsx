import React, { type FC } from 'react';
import './BurgerMenu.css';
import { ReactComponent as CloseBtn } from '../../../assets/images/header/close-btn.svg';
import HeaderLink from '../HeaderLink';
import { navImages } from '../nav-images';

interface BurgerMenuProps {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const BurgerMenu: FC<BurgerMenuProps> = ({ active, setActive }) => {
  return (
    <div className="burger-menu">
      <CloseBtn
        className="burger-menu__close-btn"
        onClick={() => {
          setActive(false);
        }}
      />
      <div className="burger-menu__content">
        <nav className="burger-menu__links">
          <HeaderLink title="Расписание игр" img={navImages[0]} />
          <HeaderLink title="Фотоотчеты" img={navImages[1]} />
          <HeaderLink title="Корпоративы" img={navImages[2]} />
          <HeaderLink title="Франшиза" img={navImages[3]} />
        </nav>
        <div className="burger-menu__footer">
          <span>VK</span>
          <span>TG</span>
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;
