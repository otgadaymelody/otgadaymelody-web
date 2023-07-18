import React, { type FC } from 'react';
import './notification-error.css';
import ErrorImage from './notif-images/notif-error-img.svg';
import CloseImage from './notif-images/notif-close-img.svg';

interface NotificationProps {
  message: string;
}

const NotificationError: FC<NotificationProps> = ({ message }) => {
  return (
    <article className="notification-error__container">
      <div className="notification-error__message-wrapper">
        <img src={ErrorImage}></img>
        <p className="notification-error__message">{message}</p>
      </div>

      <button className="notification-error__close-btn">
        <img src={CloseImage}></img>
      </button>
    </article>
  );
};

export default NotificationError;
