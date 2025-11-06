import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Navigation } from "./components/Navigation";
import { MobileNav } from "./components/MobileNav";
import { Hero } from "./components/Hero";
import { ContentSection } from "./components/ContentSection";
import { Footer } from "./components/Footer";
import { TraditionalBackground } from "./components/TraditionalBackground";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [showHero, setShowHero] = useState(true);

  const handleNavigate = (section: string) => {
    setActiveSection(section);
    setShowHero(section === "home");
    
    // Smooth scroll to content
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Traditional Hindu Background */}
      <TraditionalBackground />
      
      {/* Header */}
      <Header onBasketClick={() => handleNavigate("basket")} />

      {/* Navigation */}
      <Navigation onNavigate={handleNavigate} activeSection={activeSection} />
      <MobileNav onNavigate={handleNavigate} activeSection={activeSection} />

      {/* Hero Section - Only show on home */}
      {showHero && <Hero />}

      {/* Main Content */}
      <main className="flex-1 relative z-0">
        <ContentSection section={activeSection} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
