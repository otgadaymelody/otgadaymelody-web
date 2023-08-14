import React, { type FC } from 'react';
import PhotoNearBorderItem from '../PhotoNearBorderItem/PhotoNearBorderItem';
import ImageUrl from '../../../assets/images/image-vector/gamesmain__imagevector-block-img-first.png';
import VectorUrl from '../../../assets/images/image-vector/gamesmain__imagevector-block-vector-first.svg';
import './PhotoNearBorderLeft.css';

const PhotoNearBorderLeft: FC = () => {
  return (
    <div className="gamesmain__block-imagepart-container">
      <PhotoNearBorderItem
        game="gameone"
        className="nnnnnn"
        ImageUrl={ImageUrl}
        VectorUrl={VectorUrl}
        ImageClassName="gamesmain__block-imagepart-image"
        VectorClassName="gamesmain__block-imagepart-vector"
      ></PhotoNearBorderItem>
    </div>
  );
};
export default PhotoNearBorderLeft;
