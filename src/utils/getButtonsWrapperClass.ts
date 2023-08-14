export const getButtonsWrapperClass = (
  gamesNumber: number,
  isTablet: boolean,
  isTabletLg: boolean,
  isDesktop: boolean,
): string => {
  return (gamesNumber > 2 && (isTablet || isTabletLg)) || (gamesNumber > 3 && isDesktop)
    ? 'future-games-list__buttons-wrapper'
    : 'future-games-list__buttons-wrapper_none';
};
