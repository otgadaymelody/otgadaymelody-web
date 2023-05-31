import React from 'react';
import BestOfBlock from '../components/best-of/best-of-block';
import FranchiseAboutUs from '../components/franchise-about-us/franchise-about-us';
import Download from '@components/franchise-download/download';

const Franchise = (): React.ReactElement => {
  return (
    <main>
      <FranchiseAboutUs />
      <BestOfBlock />
      <Download />
    </main>
  );
};

export default Franchise;
