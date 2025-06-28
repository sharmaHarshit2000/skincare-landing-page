import { useState, useEffect } from 'react';
import { LoadingScreen } from './components/LoadingScreen';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { FeaturesSection } from './components/FeaturesSection';
import { ProductsSection } from './components/ProductsSection';
import { FAQSection } from './components/FAQSection';
import { CommunitySection } from './components/CommunitySection';
import { Footer } from './components/Footer';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = 'auto';
    }, 3000);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className="font-sans antialiased text-primary-dark bg-white">
      {isLoading && <LoadingScreen />}
      <Header />
      <main className={`relative ${isLoading ? 'overflow-hidden h-screen' : ''}`}>
        <HeroSection />
        <FeaturesSection />
        <ProductsSection />
        <FAQSection />
        <CommunitySection />
      </main>
      <Footer />
    </div>
  );
}