import React, { type FC } from 'react';
import { type InfographicItemProps } from './InfographicItemProps';
import './InfographicItem.css';
import vectorOdd from '../../../../assets/images/home-page/infographic/vector-odd.svg';
import vectorEven from '../../../../assets/images/home-page/infographic/vector-even.svg';

const InfographicItem: FC<InfographicItemProps> = ({
  img,
  title,
  description,
  className,
  odd,
  ...props
}): React.ReactElement => {
  return (
    <div className="infographic-item">
      <img className="infographic-item__image" src={img} />
      {odd ? (
        <img src={vectorOdd} className="infographic-item__shadow" />
      ) : (
        <img src={vectorEven} className="infographic-item__shadow" />
      )}
      <div className="infographic-item__text">
        <p className="infographic-item__title">{title}</p>
        <p className="infographic-item__description">{description}</p>
      </div>
    </div>
  );
};

export default InfographicItem;
