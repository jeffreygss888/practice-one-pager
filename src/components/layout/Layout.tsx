import { ReactElement } from 'react';
import Footer from './Footer';
import Header from './Header';

interface LayoutProps {
  children: ReactElement;
}

const Layout = ({ children }: LayoutProps) => (
  <>
    <Header />
    <main className="mt-16 h-screen w-screen flex-1 bg-gradient-to-r from-cyan-500 to-blue-500">
      {children}
    </main>
    <Footer />
  </>
);

export default Layout;
