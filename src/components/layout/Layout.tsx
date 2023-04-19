import React from 'react';
import { type FC, type PropsWithChildren } from 'react';
import Footer from './footer/Footer';
import Header from './header/Header';

const Layout: FC<PropsWithChildren> = ({ children }): React.ReactElement => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer className="footer" />
    </>
  );
};

export default Layout;
