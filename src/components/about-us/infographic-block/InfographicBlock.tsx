import React from 'react';
import './InfographicBlock.css';
import roundsImg from '../../../assets/images/home-page/infographic/info-rounds.svg';
import clockImg from '../../../assets/images/home-page/infographic/info-clock.svg';
import teamImg from '../../../assets/images/home-page/infographic/info-team.svg';
import totalImg from '../../../assets/images/home-page/infographic/info-total.svg';
import InfographicItem from './InfographicItem/InfographicItem';

const InfographicBlock = (): React.ReactElement => {
  return (
    <div className="infographic-block">
      <InfographicItem img={roundsImg} title="6" description="раундов" />
      <InfographicItem img={clockImg} title="3+" description="часа" />
      <InfographicItem img={teamImg} title="4-16" description="человек в команде" />
      <InfographicItem img={totalImg} title=">200" description="человек на каждой игре" />
    </div>
  );
};

export default InfographicBlock;
