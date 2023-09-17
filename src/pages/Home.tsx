import React, { useEffect, useRef } from 'react';
import AboutUs from '../components/about-us/AboutUs';
import FAQBlock from '../components/faq-block/FAQBlock';
import FutureGamesList from '../components/future-games-list/FutureGamesList';
import InterestingFacts from '../components/interesting-facts/InterestingFacts';
import MainBanner from '../components/main-banner/MainBanner';
import PhotoGallery from '../components/photo-gallery/PhotoGallery';
import QuizGame from '../components/quiz-game/QuizGame';
import UpcomingGame from '../components/upcoming-game/UpcomingGame';
import PhotoNearBorderLeft from '../components/games/PhotoNearBorderLeft/PhotoNearBorderLeft';
import useOnScreen from '../hooks/useOnScreen';
import { scrollToSection } from '../utils/scrollToSection';

const Home: React.FC = () => {
  useEffect(() => {
    window.location.hash && scrollToSection(window.location.hash);
  }, []);
  const ref = useRef<HTMLDivElement>(null);
  const futureGamesRef = useRef(null);
  const isVisible = useOnScreen(ref);
  return (
    <div className="home-page">
      <MainBanner />
      <UpcomingGame className="home-page-block" />
      <FutureGamesList className="home-page-block" />
      <AboutUs className="home-page-block" />
      <div ref={ref} className="home-page__minigames-block home-page-block">
        <InterestingFacts isVisible={isVisible} />
        <QuizGame />
      </div>
      <PhotoGallery className="home-page-block" />
      <div className="home-page-faq-block">
        <PhotoNearBorderLeft></PhotoNearBorderLeft>
        <FAQBlock className="games-registration__block-faqpart"></FAQBlock>
      </div>
      {/* TO DO: раскомментировать, когда блок будет доработан */}
      {/* <SellingBlock className="home-page__selling-block home-page-block" /> */}
    </div>
  );
};

export default Home;
