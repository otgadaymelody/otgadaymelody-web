import React from 'react';
import './PhotoGalleryItem.css';
import testingImg from '../../../assets/images/home-page/photo-gallery/01.png';
import mainLogo from '../../../assets/images/home-page/photo-gallery/main-logo.svg';

const PhotoGalleryItem = (): React.ReactElement => {
  return (
    <div className="photo-gallery-item">
      <img className="photo-gallery-item__img" src={testingImg} />
      <div className="photo-gallery-item__wrapper">
        <div className="photo-gallery-item__text-block">
          <div className="photo-gallery-item__description">
            <span className="photo-gallery-item__title">
              Отгадай <br />
              мелодию
            </span>
            <span className="photo-gallery-item__subtitle">06.01.23 // ПИВЗАВОД</span>
          </div>
          <div className="photo-gallery-item__game-index">#10</div>
        </div>
      </div>
    </div>
  );
};

export default PhotoGalleryItem;
