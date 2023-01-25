import React, { FC } from 'react'
import HeaderLink from './HeaderLink'
import { ReactComponent as Logo } from '../../assets/images/header/logo.svg'
import {ReactComponent as TgLogo} from '../../assets/images/header/tg.svg'
import {ReactComponent as VkLogo} from '../../assets/images/header/vk.svg'
import schedule from '../../assets/images/header/01_schedule.svg'
import album from '../../assets/images/header/02_album.svg'
import corp from '../../assets/images/header/03_corp.svg'
import franchise from '../../assets/images/header/04_franchise.svg'
import location from '../../assets/images/header/Location.svg'
import "./Header.css"
import BaseButton from '../GreenButton/GreenButton'

const Header: FC = () => {
  return (
      <header className='header'>
         <Logo className='header__logo'/>
         <div className='header__links'>
            <HeaderLink title='Расписание игр' img={schedule}/> 
            <HeaderLink title='Фотоотчеты' img={album}/>
            <HeaderLink title='Корпоративы' img={corp}/>
            <HeaderLink title='Франшиза' img={franchise}/>
         </div>
         <div className='header__btns'>
            <BaseButton title='Нижний Новгород' img={location}/>
            <TgLogo />
            <VkLogo />
         </div>

      </header>
  )
}

export default Header