import React, { type FC } from 'react';
import './pop-up.css';
import closeIcon from '@assets/images/pop-up/close.svg';

interface popUpProps extends React.AllHTMLAttributes<HTMLDivElement> {
  clickClose: () => void;
  title: string;
  mainText: string;
  noteText: string;
  image: string;
}

const PopUp: FC<popUpProps> = ({
  clickClose,
  title,
  mainText,
  noteText,
  image,
  ...props
}): React.ReactElement => {
  return (
    <article className={`pop-up`}>
      <div className="pop-up__info-block">
        <img className="pop-up__close" onClick={clickClose} src={closeIcon} />
        <img src={image} />
        <h1 className="pop-up__title">{title}</h1>
        <p className="pop-up__main-text">{mainText}</p>
        <p className="pop-up__note-text">{noteText}</p>
      </div>
    </article>
  );
};

export default PopUp;
