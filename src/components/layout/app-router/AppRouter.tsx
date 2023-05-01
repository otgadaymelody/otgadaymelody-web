import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../../../pages/Home';
import NotFoundPage from '../../../pages/404';

const AppRouter = (): React.ReactElement => {
  return (
    <Routes>
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default AppRouter;
