export const getSlidesPerViewCountDesktop = (gamesNumber: number): number => {
  return gamesNumber > 2 ? 3 : 2;
}

export const getSlidesPerViewCountLargeDesktop = (gamesNumber: number): number => {
  return gamesNumber > 3 ? 4 : gamesNumber > 2 ? 3 : 2
};
