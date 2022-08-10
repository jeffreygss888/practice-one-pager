import ProductCards from './ProductCards';

const HeroSection = () => (
  <section
    className="mt-24 mb-40 grid min-h-[400px] max-w-screen-2xl grid-rows-1 items-center justify-center gap-28 rounded-3xl bg-blue-500 bg-texture bg-cover bg-center py-14  px-8 bg-blend-color-burn shadow-md sm:p-20 2xl:grid-cols-2 2xl:grid-rows-1 2xl:gap-0 2xl:p-8"
    aria-label="Hero section"
    id="hero-section"
  >
    {/* Title */}
    <div className="flex h-full flex-col items-center gap-10 2xl:justify-center">
      <h1 className="text-center text-4xl font-bold tracking-tight text-sky-300 bg-blend-color-dodge sm:text-5xl md:text-7xl">
        GSS Lab Inc.
      </h1>

      <p className="relative w-48 text-center text-2xl text-sky-300 after:block sm:w-96 sm:text-3xl md:text-4xl">
        <span
          className="from-primaryColor absolute -inset-6 block -skew-y-3 -skew-x-12 bg-gradient-to-tr to-transparent mix-blend-color-burn"
          aria-hidden="true"
        />
        <span>IT Solutions Provider</span>
      </p>
    </div>

    {/* Product Cards */}
    <ProductCards />
  </section>
);

export default HeroSection;
