import React, { type FC } from 'react';
import presentImg from '../../assets/images/home-page/quiz-game/present.svg';
import GameRegistrationButton from '../ui/game-reg-button/GameRegistrationButton';
import './QuizGameModal.css';

interface QuizGameModalProps extends React.AllHTMLAttributes<HTMLDivElement> {
  lastQuestion: boolean;
  clickNext: () => void;
}

const QuizGameModal: FC<QuizGameModalProps> = ({
  clickNext,
  lastQuestion,
  ...props
}): React.ReactElement => {
  return (
    <div className={`quiz-game-modal`}>
      {!lastQuestion ? (
        <div className="quiz-game-modal__info-block">
          <img src={presentImg} />
          <h1>Верно</h1>
          <GameRegistrationButton icon={false} onClick={clickNext} />
        </div>
      ) : (
        <div className="quiz-game-modal__info-block">
          <img src={presentImg} />
          <h1>Поздравляем</h1>
          <span>
            Вы ответили верно на все вопросы и мы приглашаем вас посетить нашу игру в офлайне и
            ощутить все эмоции от живой игры
          </span>
          <GameRegistrationButton icon={false} onClick={clickNext} />
        </div>
      )}
    </div>
  );
};

export default QuizGameModal;
