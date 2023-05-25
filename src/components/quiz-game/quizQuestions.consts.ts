import questionImg01 from '../../assets/images/home-page/quiz-game/question-01.svg';
import questionImg02 from '../../assets/images/home-page/quiz-game/question-02.svg';
import questionImg03 from '../../assets/images/home-page/quiz-game/question-03.svg';

interface quizQuestion {
  title: string;
  imageUrl: string;
  answers: string[];
  correct: number;
}

export const QUIZ_QUESTIONS: quizQuestion[] = [
  {
    title: 'Отгадай исполнителя по фото фрагменту клипа?',
    imageUrl: questionImg01,
    answers: ['Григорий Лепс', 't.A.T.u', 'Reflex', 'Чай Вдвоём'],
    correct: 0,
  },
  {
    title: 'Отгадай песню по эмодзи',
    imageUrl: questionImg02,
    answers: ['Игорь Николаев', 'Michael Jackson', 'Ирина Аллегрова', 'Чили'],
    correct: 0,
  },
  {
    title: 'Отгадайте песню по клипу сгенерированную нейросетью?',
    imageUrl: questionImg03,
    answers: ['Лондон - Париж', 'Москва', 'Прованс', 'В клубе'],
    correct: 3,
  },
];
