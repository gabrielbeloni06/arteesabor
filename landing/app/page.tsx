import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import AboutSection from './components/AboutSection';
import ChristmasBanner from './components/ChristmasBanner';
import MenuSection from './components/MenuSection';
import InstagramSection from './components/InstagramSection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FFF8F0]">
      
      <HeroSection />
      
      <FeaturesSection />
      
      <AboutSection />
      
      <ChristmasBanner />
      
      <MenuSection />
      
      <InstagramSection />
      
      <Footer />
      
    </main>
  );
}