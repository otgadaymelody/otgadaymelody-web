import React, { FC } from 'react'
import './BaseButton.css'

type BaseButtonProps = {
   title: string;
   img: string;
}

const BaseButton: FC<BaseButtonProps> = ({title, img}) => {
  return (
      <button className='btn' onClick={() => console.log("Click BTN")}>
         <img className='btn__image' src={img} alt=""/>
         {title && <span className='btn__title'>{title}</span>}
      </button>
  )
}

export default BaseButton