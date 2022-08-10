import gssLogo from '../../assets/default.svg';

const Header = () => (
  <header className="fixed top-0 flex w-full items-center bg-sky-700 px-10 shadow">
    <img src={gssLogo} className="h-10 w-10 rounded-full" alt="gss-logo" />
    <nav className="h-16 w-full">
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

export default Header;
