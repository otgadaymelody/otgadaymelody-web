import { type FC, PropsWithChildren } from 'react';
import Footer from './footer/Footer';
import Header from './header/Header';

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer className="footer" />
    </>
  );
};

export default Layout;
