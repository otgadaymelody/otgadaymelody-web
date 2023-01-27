import React, { FC } from 'react'
import Header from '../components/header/Header'
import MainBanner from '../components/main-banner/MainBanner'
import useDeviceType from '../hooks/useDeviceType'

const Home: FC = () => {
   return (
      <div className="home-page">
         <Header />
         <div className="container">
            <MainBanner />
            <div className='test-div'>Home Page</div>
         </div>
      </div>
   )
}

export default Home