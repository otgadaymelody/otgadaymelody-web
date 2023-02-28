import React, { useState } from 'react';
import BlockBackground from '../block-background/BlockBackground';
import './QuizGame.css';
import questionImg01 from '../../assets/images/home-page/quiz-game/question-01.svg';
import { quizQuestions } from './quizQuestions';
import QuizGameModal from './QuizGameModal';

const QuizGame = (): React.ReactElement => {
  const [step, setStep] = useState(0);
  const [modalActive, setModalActive] = useState(false);
  const question = quizQuestions[step];
  const mediatorClasses = {
    topLeft: 'banner__mediator_top-left',
    topRight: 'banner__mediator_top-right',
    bottomLeft: 'banner__mediator_bottom-left',
    bottomRight: 'banner__mediator_bottom-right',
  };

  const onClickAnswer = (index: number): void => {
    console.log(`Step ${step} on ${question.answers[index]}`);
    setModalActive((prev) => !prev);
  };

  const clickNext = (): void => {
    if (step === quizQuestions.length - 1) {
      setModalActive((prev) => !prev);
      setStep(0);
    } else {
      setModalActive((prev) => !prev);
      setStep((prev) => prev + 1);
    }
  };

  return (
    <BlockBackground mediatorsClasses={mediatorClasses} className="quiz-game">
      {modalActive &&
        (step === quizQuestions.length - 1 ? (
          <QuizGameModal clickNext={() => clickNext()} lastQuestion={true} />
        ) : (
          <QuizGameModal clickNext={() => clickNext()} lastQuestion={false} />
        ))}
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
