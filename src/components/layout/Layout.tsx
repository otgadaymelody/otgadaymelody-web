import React from 'react';
import Footer from './footer/Footer';
import Header from './header/Header';
import AppRouter from './app-router/AppRouter';
import { BrowserRouter } from 'react-router-dom';

const Layout = (): React.ReactElement => {
  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div className="container">
          <Header />
          <AppRouter />
        </div>
        <Footer className="home-page-block" />
      </BrowserRouter>
    </>
  );
};

export default Layout;
