import { useState } from "react";
import { Header } from "./src/components/Header";
import { Navigation } from "./src/components/Navigation";
import { MobileNav } from "./src/components/MobileNav";
import { Hero } from "./src/components/Hero";
import { ContentSection } from "./src/components/ContentSection";
import { Footer } from "./src/components/Footer";
import TraditionalBackground from "./src/components/TraditionalBackground";

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
      {showHero && <Hero onNavigate={handleNavigate} />}

      {/* Main Content */}
      <main className="flex-1 relative z-0">
        <ContentSection section={activeSection} onNavigate={handleNavigate} />
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
