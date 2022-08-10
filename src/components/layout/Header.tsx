import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import gssLogo from '../../assets/default.svg';
import HamburgerButton from '../UI/HamburgerButton';

const Header = () => {
  const [burgerOpen, setBurgerOpen] = useState(false);

  return (
    <header className="fixed top-0 z-[9999] flex h-16 w-full items-center bg-sky-700 px-10 shadow">
      <div className="flex w-screen justify-between">
        <img src={gssLogo} className="h-10 w-10 rounded-full" alt="gss-logo" />
        <HamburgerButton
          burgerOpen={burgerOpen}
          setBurgerOpen={setBurgerOpen}
        />
      </div>

      {/* Mobile Navbar` */}
      <AnimatePresence exitBeforeEnter>
        {burgerOpen && (
          <motion.nav
            key="mobile-nav`"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ type: 'tween', duration: 0.3, ease: 'easeIn' }}
            className="absolute inset-0 mt-16 h-full w-full bg-slate-300 shadow"
          >
            <ul className="flex h-full w-full items-center justify-center gap-4 sm:gap-10">
              <li>
                <a
                  className="text-xs text-gray-800 hover:text-gray-700 hover:underline focus:underline active:underline sm:text-base"
                  href="/"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="text-xs text-gray-800 hover:text-gray-700 hover:underline focus:underline active:underline sm:text-base"
                  href="/products"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  className="text-xs text-gray-800 hover:text-gray-700 hover:underline focus:underline active:underline sm:text-base"
                  href="/about-us"
                >
                  About us
                </a>
              </li>
              <li>
                <a
                  className="text-xs text-gray-800 hover:text-gray-700 hover:underline focus:underline active:underline sm:text-base"
                  href="/contact-us"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Desktop Navbar */}
      <nav className="hidden w-full lg:block">
        <ul className="flex h-full items-center justify-center gap-10">
          <li>
            <a
              className="text-gray-800 hover:text-gray-700 hover:underline focus:underline active:underline"
              href="/"
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="text-gray-800 hover:text-gray-700 hover:underline focus:underline active:underline"
              href="/products"
            >
              Products
            </a>
          </li>
          <li>
            <a
              className="text-gray-800 hover:text-gray-700 hover:underline focus:underline active:underline"
              href="/about-us"
            >
              About us
            </a>
          </li>
          <li>
            <a
              className="text-gray-800 hover:text-gray-700 hover:underline focus:underline active:underline"
              href="/contact-us"
            >
              Contact Us
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
