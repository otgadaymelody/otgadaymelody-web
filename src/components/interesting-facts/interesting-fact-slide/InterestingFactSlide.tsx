import React from 'react';
import FactImgBlock from './fact-img-block/FactImgBlock';
import './InterestingFactSlide.css';

const InterestingFactSlide = (): React.ReactElement => {
  return (
    <div className="interesting-fact-slide">
      <div className="interesting-fact-slide__title">Интересный факт</div>
      <FactImgBlock />
      <div className="interesting-fact-slide__fact-block">
        Музыка действительно влияет на состояние нашего организма <br />
        <br /> Ваше сердце подстраивается под ритм музыки, которую вы слушаете.
      </div>
    </div>
  );
};

export default InterestingFactSlide;
