import React, { FC } from 'react'

type HeaderLinkProps = {
   title: string;
   img: string;
}

const HeaderLink: FC<HeaderLinkProps> = ({title, img}) => {
  return (
    <div className='header__header-link header-link'>
      <img src={img} alt="img"></img>
      <span className='header__header-link__title header-link__title'>{title}</span>
    </div>
  )
}

export default HeaderLink