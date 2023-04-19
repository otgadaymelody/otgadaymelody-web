import React, { type FC } from 'react';
import { concatStyles } from '../../../utils/concat-styles';
import './BaseButton.css';

interface BaseButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title?: string;
  img?: string;
  styles?: {
    buttonForm: string;
    buttonTitle: string;
  };
  href?: string;
}

const BaseButton: FC<BaseButtonProps> = ({ title, img, styles, href, ...props }) => {
  return (
    <button
      className={styles?.buttonForm ? concatStyles('base-btn', styles.buttonForm) : 'base-btn'}
    >
      {img && <img className="base-btn__image" src={img} alt="" />}
      {title && (
        <span
          className={
            styles?.buttonTitle
              ? concatStyles('base-btn__title', styles.buttonTitle)
              : 'base-btn__title'
          }
        >
          {title}
        </span>
      )}
    </button>
  );
};

export default BaseButton;
