import React, { FC } from 'react'
import Header from '../components/header/Header'
import MainBanner from '../components/main-banner/MainBanner'
import useDeviceType from '../hooks/useDeviceType'

const Home: FC = () => {
   return (
      <div className="home-page">
         <Header />
         <div className="home-page-block">
            <div className="container">
               <MainBanner />
               <span>Home Page v.1.2</span>
            </div>
         </div>
      </div>
   )
}

export default Home