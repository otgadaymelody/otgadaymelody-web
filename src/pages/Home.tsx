import React from 'react';
import Footer from '../components/footer/Footer';
import FutureGamesList from '../components/future-games-list/FutureGamesList';
import Header from '../components/header/Header';
import MainBanner from '../components/main-banner/MainBanner';

const Home: React.FC = () => {
  return (
    <div className="home-page">
        <div className="container">
          <Header />
          <MainBanner />
          <FutureGamesList />
          <span>Home Page v.1.3</span>
        </div>
      <Footer />
    </div>
  );
};

export default Home;
