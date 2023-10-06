export declare interface FutureGameProps extends React.AllHTMLAttributes<HTMLDivElement> {
  game: FutureGameResponseType;
}
export declare interface FutureGameResponseType {
  address: string;
  gameBasePrice: string;
  gameCityId: number;
  gameCityName: string;
  gameCurrencyPrice: string;
  gameDate: string;
  gameLocationName: string;
  gameName: string;
  gameTime: string;
  gameType: string;
  id: number;
  priceValue?: string;
}

export declare interface GameAddress {
  building: string;
  city: string;
  street: string;
}
