interface HamburgerButtonProps {
  setBurgerOpen: React.Dispatch<React.SetStateAction<boolean>>;
  burgerOpen: boolean;
}

const HamburgerButton = ({
  setBurgerOpen,
  burgerOpen,
}: HamburgerButtonProps) => {
  const hamburgerDefault = `h-1 w-6 my-1 rounded-full bg-black transition ease transform duration-300`;

  return (
    <button
      type="button"
      aria-label="Mobile Navigation Menu Button"
      className="group flex h-10 w-10 flex-col items-center justify-center rounded lg:hidden"
      onClick={() => setBurgerOpen((prevState) => !prevState)}
    >
      <div
        className={`${hamburgerDefault} ${
          burgerOpen
            ? 'translate-y-3 rotate-45 opacity-50 group-hover:opacity-100'
            : 'opacity-50 group-hover:opacity-100'
        }`}
      />
      <div
        className={`${hamburgerDefault} ${
          burgerOpen ? 'opacity-0' : 'opacity-50 group-hover:opacity-100'
        }`}
      />
      <div
        className={`${hamburgerDefault} ${
          burgerOpen
            ? '-translate-y-3 -rotate-45 opacity-50 group-hover:opacity-100'
            : 'opacity-50 group-hover:opacity-100'
        }`}
      />
    </button>
  );
};

export default HamburgerButton;
