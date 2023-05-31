import React, { type FC } from 'react';
import { Link } from 'react-router-dom';
import { concatStyles } from '../../../utils/concat-styles';

interface HeaderLinkProps {
  title: string;
  img: string[];
  url: string;
  hash?: string;
  linkTitleColor?: string;
  onClick?: React.MouseEventHandler;
}

const HeaderLink: FC<HeaderLinkProps> = ({ title, img, url, hash, linkTitleColor, onClick }) => {
  let titleStyles = concatStyles('header__header-link__title', 'header-link__title');
  if (linkTitleColor === 'white') {
    titleStyles = concatStyles(titleStyles, 'header-link__white');
  }
  const to = hash ? { pathname: `/${url}`, hash: `${hash}` } : `/${url}`;
  return (
    <Link className="header__header-link header-link" to={to} onClick={onClick}>
      <img className="header-link_hide-on-click" src={img[0]} alt="img"></img>
      <img className="header-link_show-on-click" src={img[1]} alt="img"></img>
      <span className={titleStyles}>{title}</span>
    </Link>
  );
};

export default HeaderLink;
