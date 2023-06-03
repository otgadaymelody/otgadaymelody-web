import React, { type FC } from 'react';
import presentImg from '../../assets/images/home-page/quiz-game/present.svg';
import GameRegistrationButton from '../ui/game-reg-button/GameRegistrationButton';
import './QuizGameModal.css';

interface QuizGameModalProps extends React.AllHTMLAttributes<HTMLDivElement> {
  lastQuestion: boolean;
  clickNext: () => void;
  isCorrect: boolean;
  clickClose: () => void;
  isAllCorrect?: boolean;
}

const QuizGameModal: FC<QuizGameModalProps> = ({
  clickNext,
  lastQuestion,
  isCorrect,
  isAllCorrect,
  clickClose,
  ...props
}): React.ReactElement => {
  const goodResult =
    'Вы ответили верно на все вопросы и мы приглашаем вас посетить нашу игру в офлайне и ощутить все эмоции от живой игры';
  const badResult =
    'Вы были близки к победе! мы приглашаем вас посетить нашу игру в офлайне и ощутить все эмоции от живой игры';

  return (
    <div className={`quiz-game-modal`}>
      {!lastQuestion ? (
        <div className="quiz-game-modal__info-block">
          <div className="quiz-game-modal__close" onClick={clickClose}>
            X
          </div>
          <img src={presentImg} />
          <h1 className="quiz-game-modal__result-title">{isCorrect ? 'Верно' : 'Вы ошиблись'}</h1>
          <GameRegistrationButton icon={false} onClick={clickNext} title="Следующий вопрос" />
        </div>
      ) : (
        <div className="quiz-game-modal__info-block">
          <div className="quiz-game-modal__close" onClick={clickClose}>
            X
          </div>
          <img src={presentImg} className="quiz-game-modal__img" />

          <h1 className="quiz-game-modal__result-title">{isCorrect ? 'Верно!' : 'Вы ошиблись'}</h1>
          <span className="quiz-game-modal__result-description">
            {isAllCorrect ? goodResult : badResult}
          </span>
          <GameRegistrationButton icon={false} onClick={clickNext} />
        </div>
      )}
    </div>
  );
};

export default QuizGameModal;
