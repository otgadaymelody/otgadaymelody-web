import React, { FC } from 'react'
import './BaseButton.css'

type BaseButtonProps = {
   title: string;
   img: string;
}

/* Прокидывание стилей через style?: React.CSSProperties, в зависимости от которых изменять стиль */

const BaseButton: FC<BaseButtonProps> = ({title, img}) => {
  return (
      <button className='btn' onClick={() => console.log("Click BTN")}>
         <img className='btn__image' src={img} alt=""/>
         <span className='btn__title'>{title}</span>
      </button>
  )
}

export default BaseButton