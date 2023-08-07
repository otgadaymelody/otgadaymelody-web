export const dateReformatted = (str: string): { date: string; month: string; weekDay: string } => {
  const parts = str.toString().split('/');
  const myDate = new Date(Number(parts[0]), Number(parts[1]) - 1, Number(parts[2]));
  const month = myDate.toLocaleString('ru', { month: 'short' }).slice(0, -1);
  const date = myDate.getDate().toString();
  const weekDay = myDate.toLocaleString('ru', { weekday: 'long' });
  return {
    date,
    month,
    weekDay,
  };
};
