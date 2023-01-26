import React, { FC } from 'react'

type HeaderLinkProps = {
   title: string;
   img: string[];
}

const HeaderLink: FC<HeaderLinkProps> = ({title, img}) => {
  console.log(img);
  return (
    <div className='header__header-link header-link'>
      <img className='header-link__hide-on-click' src={img[0]} alt="img"></img>
      <img className='header-link__show-on-click' src={img[1]} alt="img"></img>
      <span className='header__header-link__title header-link__title'>{title}</span>
    </div>
  )
}

export default HeaderLink