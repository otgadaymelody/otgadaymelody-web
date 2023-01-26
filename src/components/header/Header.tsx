import React, { FC } from 'react'
import HeaderLink from './HeaderLink'
import { ReactComponent as Logo } from '../../assets/images/header/logo.svg'
import { ReactComponent as TgLogo } from '../../assets/images/header/tg.svg'
import { ReactComponent as VkLogo } from '../../assets/images/header/vk.svg'
import { ReactComponent as BurgerBtn } from '../../assets/images/header/burger-menu.svg'
import schedule from '../../assets/images/header/01_schedule.svg'
import album from '../../assets/images/header/02_album.svg'
import corp from '../../assets/images/header/03_corp.svg'
import franchise from '../../assets/images/header/04_franchise.svg'
import location from '../../assets/images/header/loc.svg'
import "./Header.css"
import BaseButton from '../base-button/BaseButton'
import useWindowDimensions from '../../hooks/useWindowDimensions'

const Header: FC = () => {
   const { height, width } = useWindowDimensions();

   return (
      <header className='header'>
         { width < 1439 && <BurgerBtn />}
         <div className="header__navbar">
            <Logo className='header__logo'/>

            { width > 1439 &&             
               <nav className='header__links'>
                  <HeaderLink title='Расписание игр' img={schedule}/> 
                  <HeaderLink title='Фотоотчеты' img={album}/>
                  <HeaderLink title='Корпоративы' img={corp}/>
                  <HeaderLink title='Франшиза' img={franchise}/>
               </nav>
            }

         </div>
         { width > 1439 ? 
            <div className='header__btns'>
               <BaseButton title='Нижний Новгород' img={location}/>
               <TgLogo />
               <VkLogo /> 
            </div>
         :
            <BaseButton title='' img={location} />
         }

      </header>
  )
}

export default Header