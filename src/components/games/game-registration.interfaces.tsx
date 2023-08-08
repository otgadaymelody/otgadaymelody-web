export declare interface GameProps extends React.AllHTMLAttributes<HTMLDivElement> {
  game: GameData;
}
export declare interface GameData {
  id: number;
  gameName: string;
  gameType: string;
  gameDate: string;
  gameTime: string;
  gameLocationName: string;
  franchiseeId: number;
  gameAddress: {
    city: string;
    street: string;
    building: string;
  };
  gameCityName: string;
  gameBasePrice: string;
  gameCurrencyPrice: string;
  gameCityId: number;
  info: {
    description: string;
    imageSrc: string;
    coordinates: number[];
  };
}
