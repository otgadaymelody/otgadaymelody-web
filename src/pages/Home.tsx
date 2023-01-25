import React, { FC } from 'react'
import Header from '../components/header/Header'

const Home: FC = () => {
   return (
      <div className="home-page">
         <Header />
         <div className='test-div'>Home Page</div>
      </div>
   )
}

export default Home