import React, { type FC } from 'react';
import BaseButton from '../ui/base-button/BaseButton';
import './PhotoGallery.css';
import PhotoGalleryItem from './PhotoGalleryItem/PhotoGalleryItem';
import { type BaseComponent } from '../../shared/interfaces/baseComponent';
import { PHOTO_GALLERY_LIST } from './photoGalleryList.consts';

const PhotoGallery: FC<BaseComponent> = ({ className }): React.ReactElement => {
  const showAllBtnStyles = {
    buttonForm: 'photo-gallery__show-all-btn',
    buttonTitle: 'photo-gallery__show-all-btn-title',
  };
  return (
    <div className={`photo-gallery ${className}`}>
      <div className="photo-gallery__title">Посмотрите сами у нас всегда круто!</div>
      <div className="photo-gallery__photos-list">
        {PHOTO_GALLERY_LIST.map((item, index) => (
          <PhotoGalleryItem item={item} key={index} />
        ))}
      </div>
      <BaseButton title="Смотреть все фотоотчеты" styles={showAllBtnStyles} />
    </div>
  );
};

export default PhotoGallery;
