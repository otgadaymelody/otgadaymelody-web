import React, { useState } from 'react';
import BlockBackground from '../block-background/BlockBackground';
import './QuizGame.css';
import { QUIZ_QUESTIONS } from './quizQuestions.consts';
import QuizGameModal from './QuizGameModal';
import { useNavigate } from 'react-router-dom';
import { scrollToSection } from '../../utils/scrollToSection';

const QuizGame = (): React.ReactElement => {
  const [step, setStep] = useState(0);
  const [allCorrect, setAllCorrect] = useState(true);
  const [modalActive, setModalActive] = useState(false);
  const question = QUIZ_QUESTIONS[step];
  const [isCorrect, setIsCorrect] = useState(false);
  const mediatorClasses = {
    topLeft: 'banner__mediator_top-left',
    topRight: 'banner__mediator_top-right',
    bottomLeft: 'banner__mediator_bottom-left',
    bottomRight: 'banner__mediator_bottom-right',
  };

  const navigate = useNavigate();

  const onClickAnswer = (index: number): void => {
    setIsCorrect(index === question.correct);
    if (index !== question.correct) {
      setAllCorrect(false);
    }
    setModalActive((prev) => !prev);
  };

  const onCloseModal = (): void => {
    setModalActive((prev) => !prev);
    setAllCorrect(true);
    setStep(0);
  };

  const clickNext = (): void => {
    if (step === QUIZ_QUESTIONS.length - 1) {
      setModalActive((prev) => !prev);
      setAllCorrect(true);
      setStep(0);
      scrollToSection('#future-games-list');
    } else {
      setModalActive((prev) => !prev);
      setStep((prev) => prev + 1);
    }
  };

  return (
    <BlockBackground mediatorsClasses={mediatorClasses} className="quiz-game">
      {modalActive &&
        (step === QUIZ_QUESTIONS.length - 1 ? (
          <QuizGameModal
            clickNext={() => clickNext()}
            clickClose={onCloseModal}
            lastQuestion={true}
            isCorrect={isCorrect}
            isAllCorrect={allCorrect}
          />
        ) : (
          <QuizGameModal
            clickNext={() => clickNext()}
            lastQuestion={false}
            isCorrect={isCorrect}
            clickClose={onCloseModal}
          />
        ))}
      <h1 className="quiz-game__title">Примеры вопросов на игре</h1>
      <div className="quiz-game__question-block">
        <img src={question.imageUrl} className="quiz-game__question-image" />
        <div className="quiz-game__game-block">
          <h2 className="quiz-game__question-title">{question.title}</h2>
          <ul className="quiz-game__answers-block">
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
    </BlockBackground>
  );
};

export default QuizGame;
