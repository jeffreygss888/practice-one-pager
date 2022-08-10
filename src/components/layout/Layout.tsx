import { ReactElement } from 'react';
import Footer from './Footer';
import Header from './Header';

interface LayoutProps {
  children: ReactElement;
}

const Layout = ({ children }: LayoutProps) => (
  <>
    <Header />
    <main className="mx-auto mt-16 w-screen max-w-screen-2xl flex-1 px-2 sm:px-20 2xl:px-10">
      {children}
    </main>
    <Footer />
  </>
);

export default Layout;
