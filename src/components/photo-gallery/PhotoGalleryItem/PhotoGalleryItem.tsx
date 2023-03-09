import React, { type FC } from 'react';
import './PhotoGalleryItem.css';
import { type PhotoGalleryItemProps } from './PhotoGalleryItemProps';

const PhotoGalleryItem: FC<PhotoGalleryItemProps> = ({ item }): React.ReactElement => {
  return (
    <div className="photo-gallery-item">
      <img className="photo-gallery-item__img" src={item.previewImage} />
      <div className="photo-gallery-item__wrapper">
        <article className="photo-gallery-item__text-container">
          <section className="photo-gallery-item__description">
            <h1 className="photo-gallery-item__title">
              Отгадай <br />
              мелодию
            </h1>
            <time className="photo-gallery-item__subtitle">
              {item.date} &#47;&#47; {item.place.toUpperCase()}
            </time>
          </section>
          <p className="photo-gallery-item__game-index">{item.gameIndex}</p>
        </article>
      </div>
    </div>
  );
};

export default PhotoGalleryItem;
