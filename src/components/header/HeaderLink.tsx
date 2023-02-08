import React, { type FC } from 'react';

interface HeaderLinkProps {
  title: string;
  img: string[];
}

const HeaderLink: FC<HeaderLinkProps> = ({ title, img }) => {
  return (
    <div className="header__header-link header-link">
      <img className="header-link_hide-on-click" src={img[0]} alt="img"></img>
      <img className="header-link_show-on-click" src={img[1]} alt="img"></img>
      <span className="header__header-link__title header-link__title">{title}</span>
    </div>
  );
};

export default HeaderLink;
