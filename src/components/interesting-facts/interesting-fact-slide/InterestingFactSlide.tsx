import React, { type FC } from 'react';
import './InterestingFactSlide.css';
import { type InterestingFactSlideProps } from './InterestingFactSlideProps';

const InterestingFactSlide: FC<InterestingFactSlideProps> = ({ fact }): React.ReactElement => {
  return (
    <article className="interesting-fact-slide">
      <h2 className="interesting-fact-slide__title">Интересный факт</h2>
      <img src={fact.image} className="interesting-fact-slide__image" />
      <section className="interesting-fact-slide__description">{fact.description}</section>
    </article>
  );
};

export default InterestingFactSlide;
