import React, { type FC } from 'react';
import PhotoNearBorderItem from '../PhotoNearBorderItem/PhotoNearBorderItem';
import ImageUrl from '../../../assets/images/image-vector/men_vector.png';
import './PhotoNearBorderLeft.css';

const PhotoNearBorderLeft: FC = () => {
  return (
    <div className="gamesmain__block-imagepart-container">
      <PhotoNearBorderItem
        ImageUrl={ImageUrl}
        ImageClassName="gamesmain__block-imagepart-image"
      ></PhotoNearBorderItem>
    </div>
  );
};
export default PhotoNearBorderLeft;
