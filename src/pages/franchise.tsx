import React from 'react';
import BestOfBlock from '../components/best-of/best-of-block';
import FranchiseAboutUs from '../components/franchise-about-us/franchise-about-us';

const Franchise = (): React.ReactElement => {
  return (
    <main>
      <FranchiseAboutUs />
      <BestOfBlock />
    </main>
  );
};

export default Franchise;