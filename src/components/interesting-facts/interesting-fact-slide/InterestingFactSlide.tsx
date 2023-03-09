import React from 'react';
import FactImgBlock from './fact-img-block/FactImgBlock';
import './InterestingFactSlide.css';

const InterestingFactSlide = (): React.ReactElement => {
  return (
    <article className="interesting-fact-slide">
      <h1 className="interesting-fact-slide__title">Интересный факт</h1>
      <FactImgBlock />
      <section className="interesting-fact-slide__fact-block">
        <p>Музыка действительно влияет на состояние нашего организма </p>
        <p>Ваше сердце подстраивается под ритм музыки, которую вы слушаете.</p>
      </section>
    </article>
  );
};

export default InterestingFactSlide;
