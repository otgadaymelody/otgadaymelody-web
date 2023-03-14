import image01 from '../../assets/images/home-page/photo-gallery/01.png';
import image02 from '../../assets/images/home-page/photo-gallery/02.png';

export declare interface PhotoGalleryItemType {
  previewImage: string;
  date: string;
  place: string;
  gameIndex: string;
}

export const PHOTO_GALLERY_LIST: PhotoGalleryItemType[] = [
  {
    previewImage: image01,
    date: '06.01.23',
    place: 'Пивзавод',
    gameIndex: '#10',
  },
  {
    previewImage: image02,
    date: '06.01.23',
    place: 'Пивзавод',
    gameIndex: '#9',
  },
  {
    previewImage: image01,
    date: '06.01.23',
    place: 'Пивзавод',
    gameIndex: '#8',
  },
];
