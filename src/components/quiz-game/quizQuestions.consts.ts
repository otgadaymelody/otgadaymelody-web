interface quizQuestion {
  title: string;
  answers: string[];
  correct: number;
}

export const QUIZ_QUESTIONS: quizQuestion[] = [
  {
    title: 'Отгадай песню по эмодзи',
    answers: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4'],
    correct: 0,
  },
  {
    title: 'Отгадай песню по эмодзи 2',
    answers: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4'],
    correct: 0,
  },
  {
    title: 'Отгадай песню по эмодзи 3',
    answers: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4'],
    correct: 0,
  },
  {
    title: 'Отгадай песню по эмодзи 4',
    answers: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4'],
    correct: 0,
  },
];
