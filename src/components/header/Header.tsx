import React, { FC } from 'react'
import HeaderLink from './HeaderLink'
import { ReactComponent as Logo } from '../../assets/images/header/logo.svg'
import { ReactComponent as TgLogo } from '../../assets/images/header/tg.svg'
import { ReactComponent as VkLogo } from '../../assets/images/header/vk.svg'
import { ReactComponent as BurgerBtn } from '../../assets/images/header/burger-menu.svg'
import { ReactComponent as LocationBtn } from '../../assets/images/header/loc_button.svg'
import { navImages } from './nav-images'
import location from '../../assets/images/header/loc.svg'
import "./Header.css"
import BaseButton from '../base-button/BaseButton'
import useDeviceType from '../../hooks/useDeviceType'

const Header: FC = () => {
   const deviceType = useDeviceType();

   return (
      <header className='header'>
         { deviceType !== 'desktop' && <BurgerBtn />}
         <div className="header__navbar">
            <Logo className='header__logo'/>

            { deviceType === 'desktop' &&             
               <nav className='header__links'>
                  <HeaderLink title='Расписание игр' img={navImages[0]}/> 
                  <HeaderLink title='Фотоотчеты' img={navImages[1]}/>
                  <HeaderLink title='Корпоративы' img={navImages[2]}/>
                  <HeaderLink title='Франшиза' img={navImages[3]}/>
               </nav>
            }

         </div>
         { deviceType === 'desktop'  ? 
            <div className='header__btns'>
               <BaseButton title='Нижний Новгород' img={location}/>
               <TgLogo />
               <VkLogo /> 
            </div>
         :
            <LocationBtn />
         }

      </header>
  )
}

export default Header