import React, { type FC } from 'react';
import './notification-success.css';

interface NotificationProps {
  message: string;
}

const NotificationSuccess: FC<NotificationProps> = ({ message }) => {
  return (
    <article className="notification-success__container">
      <div className="notification-success__message_wrapper">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="24" height="24" rx="4" fill="#C2D72F" />
          <path
            d="M17.5 7.5L11 15.5L6.5 11.5"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <p className="notification-success__message">{message}</p>
      </div>

      <button className="notification-success__close-btn">
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

export default NotificationSuccess;
