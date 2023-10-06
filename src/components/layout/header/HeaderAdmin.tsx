import React, { type FC } from 'react';
import { NAV_LINKS_ADMIN } from './nav-links-admin.consts';
import HeaderLink from './HeaderLink';
import { ReactComponent as Logo } from '@assets/images/header/logo.svg';

import './Header.css';
import PersonalInfo from '@components/admin/personal-info/PersonalInfo';
import useDeviceType from '../../../hooks/useDeviceType';
import { useNavigate } from 'react-router-dom';

const HeaderAdmin: FC = () => {
  const navigate = useNavigate();

  const deviceType = useDeviceType();
  const isDesktop = deviceType === 'desktop';

  return (
    <header className="header header-admin">
      <div className="header__navbar">
        <Logo
          className="header__logo"
          onClick={() => {
            navigate('/');
          }}
        />

        {isDesktop && (
          <nav className="header__links">
            {NAV_LINKS_ADMIN.map((item, index) => (
              <HeaderLink title={item.title} img={item.images} url={item.url} key={index} />
            ))}
          </nav>
        )}
      </div>
      <div className="header__btns">{/* <PersonalInfo /> */}</div>
    </header>
  );
};

export default HeaderAdmin;
