import React, { type FC } from 'react';
import { Link } from 'react-router-dom';

interface HeaderLinkProps {
  title: string;
  img: string[];
  url: string;
  hash?: string;
}

const HeaderLink: FC<HeaderLinkProps> = ({ title, img, url, hash }) => {
  const to = hash ? { pathname: `/${url}`, hash: `${hash}` } : `/${url}`;
  return (
    <Link className="header__header-link header-link" to={to}>
      <img className="header-link_hide-on-click" src={img[0]} alt="img"></img>
      <img className="header-link_show-on-click" src={img[1]} alt="img"></img>
      <span className="header__header-link__title header-link__title">{title}</span>
    </Link>
  );
};

export default HeaderLink;
