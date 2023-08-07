export const getContainerSliderSize = (
  isTablet: boolean,
  isTabletLg: boolean,
  gamesNumber: number,
): string =>
  isTablet
    ? `future-games__swiper-container`
    : gamesNumber > 2 && !isTabletLg
    ? `future-games__swiper-container_large`
    : `future-games__swiper-container_small`;
