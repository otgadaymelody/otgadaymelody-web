import { NAV_IMAGES } from './nav-images.consts';
import corp from '../../../assets/presentaions/corp.pdf';

export const NAV_LINKS = [
  {
    title: 'Расписание игр',
    images: NAV_IMAGES[0],
    url: '',
    hash: '#upcoming-game',
  },
  {
    title: 'Фотоотчеты',
    images: NAV_IMAGES[1],
    url: 'https://vk.com/albums-164712588',
  },
  {
    title: 'Корпоративы',
    images: NAV_IMAGES[2],
    url: corp,
  },
  {
    title: 'Франшиза',
    images: NAV_IMAGES[3],
    url: 'franchise',
  },
];
