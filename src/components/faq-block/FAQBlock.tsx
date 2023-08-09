import React, { type FC, useState } from 'react';
import BlockBackground from '../block-background/BlockBackground';
import { FAQ_QUESTIONS } from './faqQuestions.consts';
import openImg from '../../assets/images/home-page/open-img.svg';
import closeImg from '../../assets/images/home-page/close-img.svg';
import './FAQBlock.css';
import { type BaseComponent } from '../../shared/interfaces/baseComponent';

const FAQBlock: FC<BaseComponent> = ({ className }): React.ReactElement => {
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
    <section className={`faq-block ${className}`}>
      <h2 className="faq-block__title">Остались вопросы?</h2>
      <ul className="faq-block__questions-list">
        {FAQ_QUESTIONS.map((item, i) => (
          <li className="faq-block__question" key={i} onClick={() => toggle(i)}>
            <div className="faq-block__question-title">
              {item.question}
              <img src={selected === i ? closeImg : openImg} />
            </div>
            <div className={selected === i ? 'faq-block__answer show' : 'faq-block__answer'}>
              <span>Ответ: </span>
              {item.answer}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FAQBlock;
