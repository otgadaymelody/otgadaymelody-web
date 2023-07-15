import React from 'react';
import BestOfBlock from '../components/best-of/best-of-block';
import FranchiseAboutUs from '../components/franchise-about-us/franchise-about-us';
import Download from '../components/franchise-download/download';
import WhyUs from '../components/franchise-why-us/franchise-why-us';
import FranAudience from '../components/franchise-audience/franchise-audience';

const Franchise = (): React.ReactElement => {
  return (
    <main>
      <FranchiseAboutUs />
      <BestOfBlock />
      <Download />
      <WhyUs />
      <FranAudience />
    </main>
  );
};

export default Franchise;
