import React from 'react';
import './FactImgBlock.css';
import bgImg from '../../../../assets/images/home-page/interesting-facts/01/bg.svg';
import centerImg from '../../../../assets/images/home-page/interesting-facts/01/center-logo.svg';
import add1Img from '../../../../assets/images/home-page/interesting-facts/01/additional-01.svg';
import add2Img from '../../../../assets/images/home-page/interesting-facts/01/additional-02.svg';

const FactImgBlock = (): React.ReactElement => {
  return (
    <div className="fact-img-block">
      <img className="fact-img-block__bg-img" src={bgImg} />
      <img className="fact-img-block__center-img" src={centerImg} />
      <img className="fact-img-block__additional-01" src={add1Img} />
      <img className="fact-img-block__additional-02" src={add2Img} />
    </div>
  );
};

export default FactImgBlock;
