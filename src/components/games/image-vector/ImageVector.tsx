import React, { type FC } from 'react';

interface ImageVectorProps {
  game: string;
  className: string;
  firstImageUrl: string;
  secondImageUrl: string;
  firstImageClassName?: string;
  secondImageClassName?: string;
}

const ImageVector: FC<ImageVectorProps> = ({
  game,
  className,
  firstImageUrl,
  secondImageUrl,
  firstImageClassName,
  secondImageClassName,
  ...props
}) => {
  return (
    <div className={`image-vector ${className}`} {...props}>
      <img src={firstImageUrl} alt={`${game} First`} className={firstImageClassName} />
      <img src={secondImageUrl} alt={`${game} Second`} className={secondImageClassName} />
    </div>
  );
};

export default ImageVector;
