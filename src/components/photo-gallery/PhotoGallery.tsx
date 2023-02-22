import React from 'react';
import BaseButton from '../ui/base-button/BaseButton';
import './PhotoGallery.css';
import PhotoGalleryItem from './PhotoGalleryItem/PhotoGalleryItem';

const PhotoGallery = (): React.ReactElement => {
  return (
    <div className="photo-gallery">
      <div className="photo-gallery__title">Посмотрите сами у нас всегда круто !</div>
      <div className="photo-gallery__photos-list">
        <PhotoGalleryItem />
      </div>
      <BaseButton title="Смотреть все фото" />
    </div>
  );
};

export default PhotoGallery;
