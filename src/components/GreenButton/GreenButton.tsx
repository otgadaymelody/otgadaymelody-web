import React, { FC } from 'react'
import './GreenButton.css'

type GreenButtonProps = {
   title: string;
   img: string;
}

const GreenButton: FC<GreenButtonProps> = ({title, img}) => {
  return (
      <div className='btn' onClick={() => console.log("Click BTN")}>
         <button className='btn__btn' />
         <img className='btn__image' src={img} alt=""/>
         <span className='btn__title'>{title}</span>
      </div>
  )
}

export default GreenButton