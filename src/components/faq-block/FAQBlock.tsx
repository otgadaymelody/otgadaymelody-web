import React from 'react';
import BlockBackground from '../block-background/BlockBackground';
import './FAQBlock.css';

const FAQBlock = (): React.ReactElement => {
  const mediatorClasses = {
    topLeft: 'banner__mediator_top-left',
    topRight: 'banner__mediator_top-right',
    bottomLeft: 'banner__mediator_bottom-left',
    bottomRight: 'banner__mediator_bottom-right',
  };

  return (
    <BlockBackground className="faq-block" mediatorsClasses={mediatorClasses}>
      <div className="faq-block__title">Остались вопросы?</div>
      <ul className="faq-block__questions-list">
        <li>
          <span className="faq-block__question-title">Вопрос 1.</span>
        </li>
        <li>
          <span className="faq-block__question-title">Вопрос 2.</span>
        </li>
        <li>
          <span className="faq-block__question-title">Вопрос 3.</span>
        </li>
      </ul>
    </BlockBackground>
  );
};

export default FAQBlock;
