import React, { type FC } from 'react';
import { type InfographicItemProps } from './InfographicItemProps';
import './InfographicItem.css';

const InfographicItem: FC<InfographicItemProps> = ({
  img,
  title,
  description,
  ...props
}): React.ReactElement => {
  return (
    <div className="infographic-item">
      <img className="infographic-item__image" src={img} />
      <div className="infographic-item__text">
        <p className="infographic-item__title">{title}</p>
        <p className="infographic-item__description">{description}</p>
      </div>
    </div>
  );
};

export default InfographicItem;
