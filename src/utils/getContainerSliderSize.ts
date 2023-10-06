export const getContainerSliderSize = (
  isTablet: boolean,
  isTabletLg: boolean,
  isMobile: boolean,
  gamesNumber: number,
): string =>
  isTablet
    ? `future-games__swiper-container`
    : gamesNumber > 2 && !isTabletLg
    ? `future-games__swiper-container_large`
    : isMobile
    ? `future-games__swiper-container_small`
    : `future-games__swiper-container_large`;
