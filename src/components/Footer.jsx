export const Footer = () => {
  return (
    <footer className="bg-primary-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-2">SKINCARE</h2>
            <p className="text-sm opacity-80">
              © {new Date().getFullYear()} Glow Naturally. All rights reserved.
            </p>
          </div>

          <div className="flex space-x-6 mb-8">
            <a href="#" className="hover:text-accent-yellow transition">About</a>
            <a href="#" className="hover:text-accent-yellow transition">Products</a>
            <a href="#" className="hover:text-accent-yellow transition">Contact</a>
          </div>



        </div>
      </div>
    </footer>
  );
};