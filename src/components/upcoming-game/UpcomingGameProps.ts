import type React from 'react';

export declare interface GameInformationBannerProps
  extends React.AllHTMLAttributes<HTMLDivElement> {
  game: UpcomingGameResponseType;
}
export declare interface UpcomingGameResponseType {
  franchiseeId: number;
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
  info: InfoType;
}

interface GameAddress {
  building: string;
  city: string;
  street: string;
}
interface InfoType {
  coordinates: number[];
  description: string;
  imageSrc: string;
}
