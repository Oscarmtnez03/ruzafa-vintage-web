import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustSection } from "@/components/TrustSection";
import { ServicesSection } from "@/components/ServicesSection";
import { AnatomyExplorer } from "@/components/AnatomyExplorer";
import { InteractiveDiagnostic } from "@/components/InteractiveDiagnostic";
import { WorkshopGallery } from "@/components/WorkshopGallery";
import { ProcessSection } from "@/components/ProcessSection";
import { LocalCoverageSection } from "@/components/LocalCoverageSection";
import { FaqSection } from "@/components/FaqSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="contenido-principal" className="flex-1">
        <Hero />
        <TrustSection />
        <ServicesSection />
        <AnatomyExplorer />
        <InteractiveDiagnostic />
        <WorkshopGallery />
        <ProcessSection />
        <LocalCoverageSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
