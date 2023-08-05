export const getSlidesPerViewCountDesktop = (gamesNumber: number): number =>
  gamesNumber > 2 ? 3 : 2;
export const getSlidesPerViewCountLargeDesktop = (gamesNumber: number): number =>
  gamesNumber > 3 ? 4 : gamesNumber > 2 ? 3 : 2;
