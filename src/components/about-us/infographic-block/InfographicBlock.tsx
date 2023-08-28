import React from 'react';
import './InfographicBlock.css';
import roundsImg from '../../../assets/images/home-page/infographic/info-rounds2.svg';
import clockImg from '../../../assets/images/home-page/infographic/info-clock1.svg';
import teamImg from '../../../assets/images/home-page/infographic/info-team1.svg';
import totalImg from '../../../assets/images/home-page/infographic/info-total1.svg';
import InfographicItem from './InfographicItem/InfographicItem';

const InfographicBlock = (): React.ReactElement => {
  return (
    <div className="infographic-block">
      <InfographicItem img={roundsImg} title="6" description="раундов" odd={true} />
      <InfographicItem img={clockImg} title="3+" description="часа" odd={false} />
      <InfographicItem img={teamImg} title="4-16" description="человек в команде" odd={true} />
      <InfographicItem
        img={totalImg}
        title=">200"
        description="человек на каждой игре"
        odd={false}
      />
    </div>
  );
};

export default InfographicBlock;
