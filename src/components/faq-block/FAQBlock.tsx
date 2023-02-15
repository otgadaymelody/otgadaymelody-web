import React, { useState } from 'react';
import BlockBackground from '../block-background/BlockBackground';
import { faqQuestions } from './faqQuestions';
import openImg from '../../assets/images/home-page/open-img.svg';
import closeImg from '../../assets/images/home-page/close-img.svg';
import './FAQBlock.css';

const FAQBlock = (): React.ReactElement => {
  const [selected, setSelected] = useState<number | null>(null);
  const mediatorClasses = {
    topLeft: 'banner__mediator_top-left',
    topRight: 'banner__mediator_top-right',
    bottomLeft: 'banner__mediator_bottom-left',
    bottomRight: 'banner__mediator_bottom-right',
  };

  const toggle = (i: number): void => {
    if (selected === i) {
      return setSelected(null);
    }

    setSelected(i);
  };

  return (
    <BlockBackground className="faq-block" mediatorsClasses={mediatorClasses}>
      <div className="faq-block__title">Остались вопросы?</div>
      <ul className="faq-block__questions-list">
        {faqQuestions.map((item, i) => (
          <div className="faq-block__question" key={i}>
            <div className="faq-block__question-title" onClick={() => toggle(i)}>
              {item.question}
              <img src={selected === i ? closeImg : openImg} />
            </div>
            <div className={selected === i ? 'faq-block__answer show' : 'faq-block__answer'}>
              {item.answer}
            </div>
          </div>
        ))}
        {/* <li>
          <span className="faq-block__question-title">Вопрос 1.</span>
          <div
            className={openState ? 'faq-block__close-action' : 'faq-block__open-action'}
            onClick={() => setStateAction(!openState)}
          ></div>
        </li>
        <li>
          <span className="faq-block__question-title">Вопрос 2.</span>
          <div className="faq-block__open-action"></div>
        </li>
        <li>
          <span className="faq-block__question-title">Вопрос 3.</span>
          <div className="faq-block__open-action"></div>
        </li> */}
      </ul>
    </BlockBackground>
  );
};

export default FAQBlock;
