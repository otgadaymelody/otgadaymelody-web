import React, { useState } from 'react';
import BlockBackground from '../block-background/BlockBackground';
import './QuizGame.css';
import questionImg01 from '../../assets/images/home-page/quiz-game/question-01.svg';
import { quizQuestions } from './quizQuestions';

const QuizGame = (): React.ReactElement => {
  const [step, setStep] = useState(0);
  const question = quizQuestions[step];
  const mediatorClasses = {
    topLeft: 'banner__mediator_top-left',
    topRight: 'banner__mediator_top-right',
    bottomLeft: 'banner__mediator_bottom-left',
    bottomRight: 'banner__mediator_bottom-right',
  };

  const onClickAnswer = (index: number): void => {
    console.log(`Step ${step} on ${question.answers[index]}`);
  };

  return (
    <BlockBackground mediatorsClasses={mediatorClasses} className="quiz-game">
      <h1 className="quiz-game__title">Примеры вопросов на игре</h1>
      <div className="quiz-game__question-block">
        <img src={questionImg01} className="quiz-game__question-image" />
        <div className="quiz-game__game-block">
          <h2 className="quiz-game__question-title">{question.title}</h2>
          <div className="quiz-game__answers-block">
            <ul>
              {question.answers.map((item, index) => (
                <li
                  key={index}
                  className="quiz-game__answer-btn"
                  onClick={() => onClickAnswer(index)}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </BlockBackground>
  );
};

export default QuizGame;
