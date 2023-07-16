import React, { type FC } from 'react';
import './notification-alert.css';

interface NotificationProps {
  message: string;
}

const NotificationAlert: FC<NotificationProps> = ({ message }) => {
  return (
    <article className="notification-alert__container">
      <div className="notification-alert__message_wrapper">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="24" height="24" rx="4" fill="#F2994A" />
          <path
            d="M12 6L12 10.25L12 14"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13.2749 18C13.2749 18.6904 12.7153 19.25 12.0249 19.25C11.3345 19.25 10.7749 18.6904 10.7749 18C10.7749 17.3096 11.3345 16.75 12.0249 16.75C12.7153 16.75 13.2749 17.3096 13.2749 18Z"
            fill="white"
          />
        </svg>
        <p className="notification-alert__message">{message}</p>
      </div>

      <button className="notification-alert__close-btn">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M13.5 2.5L2.5 13.5" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M2.5 2.5L13.5 13.5" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </button>
    </article>
  );
};

export default NotificationAlert;
