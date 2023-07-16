import React, { type FC } from 'react';

interface PhotoNearBorderItemProps {
  game: string;
  className: string;
  ImageUrl: string;
  VectorUrl: string;
  ImageClassName?: string;
  VectorClassName?: string;
}

const PhotoNearBorderItem: FC<PhotoNearBorderItemProps> = ({
  game,
  className,
  ImageUrl,
  VectorUrl,
  ImageClassName,
  VectorClassName,
  ...props
}) => {
  return (
    <div className={`image-vector ${className}`} {...props}>
      <img src={ImageUrl} alt={`${game} First`} className={ImageClassName} />
      <img src={VectorUrl} alt={`${game} Second`} className={VectorClassName} />
    </div>
  );
};

export default PhotoNearBorderItem;
