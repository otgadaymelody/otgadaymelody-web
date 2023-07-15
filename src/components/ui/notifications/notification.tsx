import React, { type FC } from 'react';
import './notification.css';
import NotifErrorCrossRed from '../../../assets/images/ui/notifications/error/notif-err-cross-red.png';
import NotifErrorClose from '../../../assets/images/ui/notifications/error/notif-err-cross-close.png';

interface NotificationProps {
  message: string;
}

const Notification: FC<NotificationProps> = ({ message }) => {
  return (
    <div className="notification__container">
      <img className="notification__img" src={NotifErrorCrossRed} alt="" />
      <p>{message}</p>
      <button className="notification__close-btn">
        <img className="notification__close-btn-img" src={NotifErrorClose} alt="" />
      </button>
    </div>
  );
};

export default Notification;
