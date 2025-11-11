import { useState } from "react";
import { Header } from "./components/Header";
import { Navigation } from "./components/Navigation";
import { MobileNav } from "./components/MobileNav";
import { Hero } from "./components/Hero";
import { ContentSection } from "./components/ContentSection";
import { Footer } from "./components/Footer";
import TraditionalBackground from "./components/TraditionalBackground";

interface Book {
  title: string;
  author: string;
  description: string;
  imageUrl: string;
}

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [showHero, setShowHero] = useState(true);
  const [basket, setBasket] = useState<Book[]>([]);

  const handleNavigate = (section: string) => {
    setActiveSection(section);
    setShowHero(section === "home");

    // Smooth scroll to content
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const addToBasket = (book: Book) => {
    setBasket(prev => [...prev, book]);
  };

  const removeFromBasket = (index: number) => {
    setBasket(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Traditional Hindu Background */}
      <TraditionalBackground />
      
      {/* Header */}
      <Header onBasketClick={() => handleNavigate("basket")} basketCount={basket.length} />

      {/* Navigation */}
      <Navigation onNavigate={handleNavigate} activeSection={activeSection} />
      <MobileNav onNavigate={handleNavigate} activeSection={activeSection} />

      {/* Hero Section - Only show on home */}
      {showHero && <Hero onNavigate={handleNavigate} />}

      {/* Main Content */}
      <main className="flex-1 relative z-0">
        <ContentSection
          section={activeSection}
          onNavigate={handleNavigate}
          basket={basket}
          onAddToBasket={addToBasket}
          onRemoveFromBasket={removeFromBasket}
        />
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
