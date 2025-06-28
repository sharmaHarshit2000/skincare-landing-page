export const ProductsSection = () => {
  const products = [
    {
      id: 1,
      name: "ALYA SKIN CLEANSER",
      price: "FROM $20.99",
      category: "CLEANSING",
      image: "/images/product1.jpg",
    },
    {
      id: 2,
      name: "RITUAL OF SAKURA",
      price: "FROM $20.98",
      category: "NEW ARRIVAL",
      image: "/images/product2.jpg",
    },
    {
      id: 3,
      name: "THE BODY LOTION",
      price: "FROM $19.90",
      category: "ANTI AGING",
      image: "/images/product3.jpg",
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="hidden lg:block relative mb-20 w-full">
        <img
          src="/images/girl3.png"
          alt="Woman holding skincare product"
          className="w-full h-[450px] object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-white text-center px-4">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Feel Beautiful Inside and Out <br className="hidden md:block" /> with Every Product.
          </h2>
          <button className="mt-2 px-6 py-2 border border-white rounded-full text-sm hover:bg-white hover:text-primary-dark transition">
            Shop Now
          </button>
        </div>
      </div>

      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
          Best Selling Products
        </h2>
        <p className="text-primary-dark/80 max-w-2xl mx-auto">
          Skincare That Brings Out Your Natural Radiance
        </p>
        <div className="w-20 h-1 bg-primary-dark mx-auto mt-4"></div>
      </div>


      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all"
            >
              <div className="h-64 w-full overflow-hidden bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-4 bg-white">
                <span className="text-xs font-semibold text-primary-dark/70 mb-1 block">
                  {product.category}
                </span>
                <h3 className="text-lg font-bold text-primary-dark mb-1">
                  {product.name}
                </h3>
                <p className="text-primary-dark font-medium">{product.price}</p>
              </div>

              <div className="absolute inset-0 bg-primary-dark/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="bg-white text-primary-dark px-6 py-2 rounded-full font-medium hover:bg-accent-yellow transition">
                  ADD TO CART
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center lg:hidden">
          <h3 className="text-2xl md:text-3xl font-bold text-primary-dark mb-6">
            Feel Beautiful Inside and Out with Every Product
          </h3>
          <button className="px-8 py-3 bg-primary-dark text-white rounded-full text-base md:text-lg font-medium shadow-lg hover:bg-opacity-90 transition-all hover:scale-105 transform">
            SHOP NOW
          </button>
        </div>
      </div>
    </section>
  );
};
