import React, { type FC } from 'react';
import './BurgerMenu.css';
import { ReactComponent as CloseBtn } from '../../../../assets/images/header/close-btn.svg';
import HeaderLink from '../HeaderLink';
import { NAV_LINKS } from '../nav-links.consts';
import { SOCIAL_URL } from '../../../../shared/consts/socialURLs.consts';

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
          onClick={(event) => {
            event.stopPropagation();
            setActive(false);
          }}
        />
        <div className="burger-menu__content">
          <nav className="burger-menu__links">
            {NAV_LINKS.map((item, index) => (
              <HeaderLink
                title={item.title}
                img={item.images}
                url={item.url}
                key={index}
                hash={item.hash}
                linkTitleColor="white"
                onClick={(event) => {
                  event.stopPropagation();
                  setActive(false);
                }}
              />
            ))}
          </nav>
          <div className="burger-menu__footer">
            <a
              className="footer__vk-btn"
              href={SOCIAL_URL.VK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(event) => {
                event.stopPropagation();
                setActive(false);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;
