export declare interface GameDataProps extends React.AllHTMLAttributes<HTMLDivElement> {
  game: GameDataType;
}
export declare interface GameDataType {
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
  adminInfo: {
    gameMaxPlayersCount: number;
    playersAppliedCount: number;
    playersConfirmedCount: number;
    teamsAppliedCount: number;
    teamsConfirmedCount: number;
  };
}
