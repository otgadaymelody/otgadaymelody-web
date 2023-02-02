import React, { FC } from 'react'
import { concatStyles } from '../../utils/concat-styles';
import './BaseButton.css'

interface BaseButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
   title?: string;
   img?: string;
   styles?: {
      buttonForm: string,
      buttonTitle: string
   }
}

const BaseButton: FC<BaseButtonProps> = ({title, img, styles, ...props}) => {
  return (
      <button 
         className={styles?.buttonForm ? concatStyles("base-btn", styles.buttonForm) : "base-btn"} 
         onClick={() => console.log("Click BTN")}
      >
         {img && <img className='base-btn__image' src={img} alt=""/>}
         {title && 
            <span 
               className={styles?.buttonTitle ? concatStyles("base-btn__title", styles.buttonTitle) : "base-btn__title"} >{title}
            </span>
         }
      </button>
  )
}

export default BaseButton