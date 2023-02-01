import React, { FC } from 'react'
import './BaseButton.css'

interface BaseButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
   title: string;
   img?: string;
}

const BaseButton: FC<BaseButtonProps> = ({title, img, ...props}) => {
  return (
      <button className={["base-btn", props.className].join(' ')} onClick={() => console.log("Click BTN")}>
         {img && <img className='base-btn__image' src={img} alt=""/>}
         {title && <span className='base-btn__title'>{title}</span>}
      </button>
  )
}

export default BaseButton