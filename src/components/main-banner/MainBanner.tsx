import React from 'react'
import BaseButton from '../base-button/BaseButton'
import BlockBackground from '../block-background/BlockBackground'
import './MainBanner.css'

const MainBanner = () => {
  return (
    <BlockBackground className="banner__background">
      {/* <div className="banner__info">
        <h1><span>Музыкальные</span> битвы 
        в формате - <span>квиз игры</span></h1>
        <p>Музыкальные битвы в формате — квиз игры, 
          в которых команды должны за ограниченное время угадать музыкальные композиции.
          В игре принимают участие команды по 5 человек.</p>
        <BaseButton title='Расписание игр' img=''/>
      </div> */}
    </BlockBackground>
  )
}

export default MainBanner