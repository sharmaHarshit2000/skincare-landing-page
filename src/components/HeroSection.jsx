export const HeroSection = () => {
  return (
    <section className="min-h-screen bg-primary-light flex flex-col items-center justify-center relative px-6 pt-24 pb-12 md:pt-32 md:pb-20 overflow-hidden">
      <img
        src="images/girl1.png"
        alt="Happy customer with glowing skin"
        className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1/3 max-w-xs hidden md:block"
      />
      <img
        src="images/plum.jpg"
        alt="Natural plum skincare ingredient"
        className="absolute right-0 top-1/4 w-1/4 max-w-xs hidden md:block"
      />

      <div className="container mx-auto text-center flex-1 flex flex-col justify-center relative z-10 px-4">

        <div className="mb-4 md:mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-dark mb-1 leading-tight">
            GLOWWWW
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold text-primary-dark italic">
            NATURALLY
          </h2>
        </div>


        <p className="text-base md:text-lg text-primary-dark mb-4 md:mb-6 max-w-md mx-auto leading-relaxed">
          Transform your skincare routine with premium products that restore, protect, and enhance your natural glow every day.
        </p>


        <p className="text-sm md:text-base text-primary-dark mb-6 md:mb-8 italic max-w-md mx-auto">
          While giving you an invigorating cleansing experience.
        </p>


        <p className="text-xl md:text-2xl text-primary-dark mb-6 font-medium tracking-widest">
          SKINCARE
        </p>


        <div className="flex justify-center">
          <button className="px-8 py-3 md:px-10 md:py-3 bg-primary-dark text-white rounded-full text-base md:text-lg font-medium shadow-lg hover:bg-opacity-90 transition-all hover:scale-105 transform">
            SHOP NOW
          </button>
        </div>
      </div>

      <div className="absolute bottom-6 md:bottom-8 left-0 right-0 z-10">
        <div className="flex justify-center space-x-4 md:space-x-6">
          {['facebook', 'instagram', 'twitter'].map((social) => (
            <a
              key={social}
              href="#"
              className="w-8 h-8 md:w-10 md:h-10 bg-primary-dark rounded-full flex items-center justify-center text-white hover:bg-accent-yellow hover:text-primary-dark transition-colors"
              aria-label={social}
            >
              {social.charAt(0).toUpperCase()}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
