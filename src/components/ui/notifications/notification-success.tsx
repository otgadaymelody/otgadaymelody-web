import React, { type FC } from 'react';
import './notification-success.css';
import SuccessImage from './notif-images/notif-success-img.svg';
import CloseImage from './notif-images/notif-close-img.svg';

interface NotificationProps {
  message: string;
}

const NotificationSuccess: FC<NotificationProps> = ({ message }) => {
  return (
    <article className="notification-success__container">
      <div className="notification-success__message-wrapper">
        <img src={SuccessImage}></img>
        <p className="notification-success__message">{message}</p>
      </div>

      <button className="notification-success__close-btn">
        <img src={CloseImage}></img>
      </button>
    </article>
  );
};

export default NotificationSuccess;
