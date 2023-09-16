export declare interface FutureGameProps extends React.AllHTMLAttributes<HTMLDivElement> {
  game: FutureGameResponseType;
  index: number;
}
export declare interface FutureGameResponseType {
  gameAddress: GameAddress;
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
}

export declare interface GameAddress {
  building: string;
  city: string;
  street: string;
}
