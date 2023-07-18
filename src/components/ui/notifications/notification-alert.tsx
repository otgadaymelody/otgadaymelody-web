import React, { type FC } from 'react';
import './notification-alert.css';
import AlertImage from './notif-images/notif-alert-img.svg';
import CloseImage from './notif-images/notif-close-img.svg';

interface NotificationProps {
  message: string;
}

const NotificationAlert: FC<NotificationProps> = ({ message }) => {
  return (
    <article className="notification-alert__container">
      <div className="notification-alert__message-wrapper">
        <img src={AlertImage}></img>
        <p className="notification-alert__message">{message}</p>
      </div>

      <button className="notification-alert__close-btn">
        <img src={CloseImage}></img>
      </button>
    </article>
  );
};

export default NotificationAlert;
