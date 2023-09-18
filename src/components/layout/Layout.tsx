import React from 'react';
import Footer from './footer/Footer';
import Header from './header/Header';
import AppRouter from './app-router/AppRouter';
import { BrowserRouter } from 'react-router-dom';
import HeaderAdmin from './header/HeaderAdmin';

const Layout = (): React.ReactElement => {
  const isAdmin = sessionStorage.getItem('userRole') === 'admin';
  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div className="container">
          {isAdmin ? <HeaderAdmin /> : <Header />}
          <AppRouter />
        </div>
        <Footer className="home-page-block" />
      </BrowserRouter>
    </>
  );
};

export default Layout;
