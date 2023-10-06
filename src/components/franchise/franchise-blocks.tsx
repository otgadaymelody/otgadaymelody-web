import React, { type FC } from 'react';
import './franchise-blocks.css';
import BestOfBlock from './best-of/best-of-block';
import FranchiseAboutUs from './franchise-about-us/franchise-about-us';
import Download from './franchise-download/download';
import WhyUs from './franchise-why-us/franchise-why-us';
import FranAudience from './franchise-audience/franchise-audience';

const FranchisePage: FC = () => {
  return (
    <main className="franchise-page" style={{ minHeight: '80vh' }}>
      Страница в разработке...
      {/* <FranchiseAboutUs />
      <BestOfBlock />
      <Download />
      <WhyUs />
      <FranAudience /> */}
    </main>
  );
};

export default FranchisePage;
