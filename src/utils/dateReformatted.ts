export const dateReformatted = (str: string): { date: string; month: string; weekDay: string } => {
  const d = str.split('-');
  const myDate = new Date(d.join('/'));

  const month = myDate.toLocaleString('ru', { month: 'short' });
  const date = myDate.getDate().toString();
  const weekDay = myDate.toLocaleString('ru', { weekday: 'long' });

  return {
    date,
    month,
    weekDay,
  };
};
