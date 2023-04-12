export declare interface DateInfo {
  day: string;
  month: string;
  time: string;
  dayOfWeek: string;
}

export declare interface FutureGameProps extends React.AllHTMLAttributes<HTMLDivElement> {
  game: {
    title: string;
    location: string;
    address: string;
    price: string;
    dateInfo: DateInfo;
  };
}
