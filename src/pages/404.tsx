import React from 'react';
import travolta from '../assets/images/not-found/travolta-mem.gif';
const NotFoundPage = (): React.ReactElement => {
  return (
    <main className="in-process">
      <h2>404! Страница не найдена</h2>
      <img className="in-process__image" src={travolta} alt="loading..." />
    </main>
  );
};

export default NotFoundPage;
