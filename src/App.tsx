import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { OpportunityIntro } from './components/OpportunityIntro';
import { WhatIsUrban } from './components/WhatIsUrban';
import { HowItWorks } from './components/HowItWorks';
import { Benefits } from './components/Benefits';
import { Manifesto } from './components/Manifesto';
import { InvestmentModel } from './components/InvestmentModel';
import { WhoCanParticipate } from './components/WhoCanParticipate';
import { FounderCounty } from './components/FounderCounty';
import { TerritoryMap } from './components/TerritoryMap';
import { PlatformTech } from './components/PlatformTech';
import { SupportEcosystem } from './components/SupportEcosystem';
import { SocialProof } from './components/SocialProof';
import { FinalCTA } from './components/FinalCTA';
import { LeadCaptureForm } from './components/LeadCaptureForm';
import { FAQ } from './components/FAQ';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="min-h-screen bg-midnight text-ice selection:bg-urban-blue selection:text-white">
      <Header />
      <main>
        <Hero />
        <OpportunityIntro />
        <WhatIsUrban />
        <HowItWorks />
        <Benefits />
        <Manifesto />
        <InvestmentModel />
        <WhoCanParticipate />
        <FounderCounty />
        <TerritoryMap />
        <PlatformTech />
        <SupportEcosystem />
        <SocialProof />
        <FinalCTA />
        <LeadCaptureForm />
        <FAQ />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
