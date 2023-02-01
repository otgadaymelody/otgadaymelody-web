import React from 'react'
import BaseButton from '../base-button/BaseButton'
import BlockBackground from '../block-background/BlockBackground'
import './MainBanner.css'
import bannerImg from "../../assets/images/home-page/banner-image.png"

const MainBanner = () => {
  const mediatorClasses = {
    topLeft: "banner__mediator__top-left",
    topRight: "banner__mediator__top-right",
    bottomLeft: "banner__mediator__bottom-left",
    bottomRight: "banner__mediator__bottom-right"
  }

  return (
    <BlockBackground className="banner__background" mediatorsClasses={mediatorClasses}>
      <div className="banner__info">
        <div className="banner__main-text">
          <h1><span className='banner__info__bold-title'>Музыкальные</span> битвы 
          в формате - <span className='banner__info__bold-title'>квиз игры</span></h1>
          <p>Музыкальные битвы в формате — квиз игры, 
            в которых команды должны за ограниченное время угадать музыкальные композиции.
            В игре принимают участие команды по 5 человек.</p>
        </div>
        <BaseButton title='Расписание игр' className='banner__reg-btn'/>
      </div>
      <img src={bannerImg} className="banner__main-image"/>

    </BlockBackground>
  )
}

export default MainBanner