export const CommunitySection = () => {
  return (
    <section className="py-16 md:py-20 bg-primary-dark text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join The Skincare Community Now.
          </h2>
          <div className="w-20 h-1 bg-accent-yellow mx-auto mt-4"></div>
        </div>

        <div className="flex flex-col items-center">
          <div className="mb-8 text-center">
            <h3 className="text-xl font-semibold mb-2">Get in Touch</h3>
            <p className="text-lg">contact.skincare.com</p>
          </div>

          <div className="flex space-x-6 mb-8">
            <a href="#" className="hover:text-accent-yellow transition">Facebook</a>
            <a href="#" className="hover:text-accent-yellow transition">Instagram</a>
            <a href="#" className="hover:text-accent-yellow transition">YouTube</a>
          </div>

          <div className="flex space-x-6 mb-8">
            <a href="#" className="text-sm hover:text-accent-yellow transition">Terms of Service</a>
            <a href="#" className="text-sm hover:text-accent-yellow transition">Privacy Policy</a>
            <a href="#" className="text-sm hover:text-accent-yellow transition">Cookies Policy</a>
          </div>
        </div>
      </div>
    </section>
  );
};