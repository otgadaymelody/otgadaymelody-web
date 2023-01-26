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
                  <HeaderLink title='Расписание игр' img={navImages[0]}/> 
                  <HeaderLink title='Фотоотчеты' img={navImages[1]}/>
                  <HeaderLink title='Корпоративы' img={navImages[2]}/>
                  <HeaderLink title='Франшиза' img={navImages[3]}/>
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
            <LocationBtn />
         }

      </header>
  )
}

export default Header