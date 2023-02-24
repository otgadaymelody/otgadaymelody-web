import React from 'react';
import AboutUs from '../components/about-us/AboutUs';
import FAQBlock from '../components/faq-block/FAQBlock';
import Footer from '../components/footer/Footer';
import FutureGamesList from '../components/future-games-list/FutureGamesList';
import Header from '../components/header/Header';
import InterestingFacts from '../components/interesting-facts/InterestingFacts';
import MainBanner from '../components/main-banner/MainBanner';
import PhotoGallery from '../components/photo-gallery/PhotoGallery';

const Home: React.FC = () => {
  return (
    <div className="home-page">
      <div className="container">
        <Header />
        <MainBanner />
        <FutureGamesList className="home-page-block" />
        <AboutUs className="home-page-block" />
        <div className="home-page__minigames-block home-page-block">
          <InterestingFacts />
        </div>
        <PhotoGallery className="home-page-block" />
        <FAQBlock className="home-page-block" />
        <span>Home Page v.1.3</span>
      </div>
      <Footer className="home-page-block" />
    </div>
  );
};

export default Home;
