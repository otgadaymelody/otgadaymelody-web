import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


import './index.css';
import './assets/css/main.css';
import './assets/css/fonts.css'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

