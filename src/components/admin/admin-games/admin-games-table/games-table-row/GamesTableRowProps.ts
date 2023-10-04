export declare interface DateInfo {
  day: string;
  month: string;
}

export declare interface GamesTableRowProps extends React.AllHTMLAttributes<HTMLDivElement> {
  id: string;
  title: string;
  theme: string;
  dateInfo: string;
  price: string;
  seatsOccupied: string;
  seats: string;
  applications: string;
  showToUsers: boolean;
  editGame: (id: number) => {};
}
