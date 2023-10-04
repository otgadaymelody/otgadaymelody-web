export declare type SelectedOptions = 'upcoming' | 'past';

export interface GameAdmin {
  id: string;
  gameName: string;
  gameType: string;
  gameDate: string;
  gameTime: string;
  gameLocationName: string;
  franchiseeId: string;
  address: string;
  cityName: string;
  showToUsers: boolean;
  gameDescription: string;
  maxPlayersCount: string;
  priceValue: string;
  gameLocationId: string;
  applicationSheetName: string;
}
