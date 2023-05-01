import React, { type FC } from 'react';
import { Link } from 'react-router-dom';

interface HeaderLinkProps {
  title: string;
  img: string[];
  url: string;
}

const HeaderLink: FC<HeaderLinkProps> = ({ title, img, url }) => {
  return (
    <Link className="header__header-link header-link" to={`/${url}`}>
      <img className="header-link_hide-on-click" src={img[0]} alt="img"></img>
      <img className="header-link_show-on-click" src={img[1]} alt="img"></img>
      <span className="header__header-link__title header-link__title">{title}</span>
    </Link>
  );
};

export default HeaderLink;
