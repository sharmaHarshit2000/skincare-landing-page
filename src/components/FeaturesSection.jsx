export const FeaturesSection = () => {
  return (
    <section className="bg-primary-light text-primary-dark">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-12 py-16 items-center">
    
        <div>
          <button className="px-4 py-1 border border-primary-dark rounded-full text-sm mb-4">
            Why Our Products
          </button>

          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-snug">
            YOUR SKIN DESERVES <br />THE BEST CARE.
          </h2>

          <p className="text-base text-primary-dark mb-10">
            Discover a curated collection of skincare products designed to rejuvenate,
            protect, and pamper your skin. Explore our range crafted with love backed by
            science, and inspired by nature.
          </p>

          <div className="space-y-8">
          
            <div className="flex items-start gap-6">
              <span className="text-2xl font-bold">01</span>
              <div>
                <h3 className="text-xl font-semibold mb-1">Bio Ingredients</h3>
                <p className="text-sm text-primary-dark">
                  Get naturally beautiful and transform with our bio ingredients creams
                  for healthy, radiant skin.
                </p>
              </div>
            </div>

         
            <div className="flex items-start gap-6">
              <span className="text-2xl font-bold">02</span>
              <div>
                <h3 className="text-xl font-semibold mb-1">Everything Natural</h3>
                <p className="text-sm text-primary-dark">
                  Pure ingredients for pure skin. The perfect solution for your skin care
                  needs.
                </p>
              </div>
            </div>

          
            <div className="flex items-start gap-6">
              <span className="text-2xl font-bold">03</span>
              <div>
                <h3 className="text-xl font-semibold mb-1">All Handmade</h3>
                <p className="text-sm text-primary-dark">
                  Made with love and care. Just for you. Give your skin the tender loving
                  care it deserves.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative flex justify-center items-center">
          <div className="rounded-xl overflow-hidden shadow-lg w-[90%] max-w-[400px] aspect-[3/4]">
            <img
              src="/images/girl2.png" 
              alt="Woman with green eye patches"
              className="w-full h-full object-cover"
            />
          </div>

      
          <div className="absolute bottom-4 left-4 bg-white rounded-full px-4 py-2 shadow flex items-center gap-2">
            <img src="/images/award-icon.png" alt="Award" className="w-5 h-5" />
            <div className="text-xs">
              <span className="block font-medium text-primary-dark leading-tight">
                Best Skin Care Product
              </span>
              <span className="text-gray-500 text-[10px]">Award Winning</span>
            </div>
          </div>
        </div>
      </div>

    
      <div className="border-t border-gray-300 text-sm text-gray-600 px-6 md:px-12 py-4 flex justify-between">
        <span>SINCE 2001</span>
        <span className="cursor-pointer hover:underline">LEARN MORE</span>
      </div>
    </section>
  );
};
