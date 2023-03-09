import React, { type FC } from 'react';
import './PhotoGalleryItem.css';
import { type PhotoGalleryItemProps } from './PhotoGalleryItemProps';

const PhotoGalleryItem: FC<PhotoGalleryItemProps> = ({ item }): React.ReactElement => {
  return (
    <div className="photo-gallery-item">
      <img className="photo-gallery-item__img" src={item.previewImage} />
      <div className="photo-gallery-item__wrapper">
        <div className="photo-gallery-item__text-container">
          <div className="photo-gallery-item__description">
            <div className="photo-gallery-item__title">
              Отгадай <br />
              мелодию
            </div>
            <span className="photo-gallery-item__subtitle">
              {item.date} &#47;&#47; {item.place.toUpperCase()}
            </span>
          </div>
          <div className="photo-gallery-item__game-index">{item.gameIndex}</div>
        </div>
      </div>
    </div>
  );
};

export default PhotoGalleryItem;
