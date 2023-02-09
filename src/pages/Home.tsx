import React from 'react';
import Footer from '../components/footer/Footer';
import FutureGames from '../components/future-games/FutureGames';
import Header from '../components/header/Header';
import MainBanner from '../components/main-banner/MainBanner';

const Home: React.FC = () => {
  return (
    <div className="home-page">
      <Header />
      <div className="home-page-body">
        <div className="container">
          <MainBanner />
          <FutureGames />
          <span>Home Page v.1.2</span>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
