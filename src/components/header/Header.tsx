import React, { FC, useState } from 'react'
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
import BurgerMenu from './burger-menu/BurgerMenu'

const Header: FC = () => {
   const [activeMenu, setActiveMenu] = useState(false);

   const deviceType = useDeviceType();
   const isDesktop = deviceType === 'desktop';

   return (
      <header className='header'>
         { !isDesktop && <BurgerBtn onClick={() => setActiveMenu(true)} className="header__btn"/>}
         <div className="header__navbar">
            <Logo className='header__logo'/>

            { isDesktop &&             
               <nav className='header__links'>
                  <HeaderLink title='Расписание игр' img={navImages[0]}/> 
                  <HeaderLink title='Фотоотчеты' img={navImages[1]}/>
                  <HeaderLink title='Корпоративы' img={navImages[2]}/>
                  <HeaderLink title='Франшиза' img={navImages[3]}/>
               </nav>
            }

         </div>
         { isDesktop  ? 
            <div className='header__btns'>
               <BaseButton title='Нижний Новгород' img={location}/>
               <TgLogo />
               <VkLogo /> 
            </div>
         :
            <LocationBtn className='header__location-btn'/>
         }
         { (!isDesktop && activeMenu) && <BurgerMenu active={activeMenu} setActive={setActiveMenu}/>}
      </header>
  )
}

export default Header