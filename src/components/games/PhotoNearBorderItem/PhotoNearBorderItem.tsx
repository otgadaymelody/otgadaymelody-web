import React, { type FC } from 'react';

interface PhotoNearBorderItemProps {
  ImageUrl: string;
  ImageClassName?: string;
}

const PhotoNearBorderItem: FC<PhotoNearBorderItemProps> = ({
  ImageUrl,
  ImageClassName,
  ...props
}) => {
  return <img src={ImageUrl} className={ImageClassName} />;
};

export default PhotoNearBorderItem;
