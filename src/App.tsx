import { Header } from "./components/Header";
import { ImageCarousel } from "./components/ImageCarousel";
import { HeroSection } from "./components/HeroSection";
import { NewsSection } from "./components/NewsSection";
import { DignitariesSection } from "./components/DignitariesSection";
import { EventsSection } from "./components/EventsSection";
import { SportsGallery } from "./components/SportsGallery";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ImageCarousel />
      <main>
        <HeroSection />
        <NewsSection />
        <DignitariesSection />
        <EventsSection />
        <SportsGallery />
      </main>
      <Footer />
    </div>
  );
}