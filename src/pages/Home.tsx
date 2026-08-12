import React from 'react';
import { HomeHero } from '../components/home/HomeHero';
import { DriverFirst } from '../components/home/DriverFirst';
import { AppShowcase } from '../components/home/AppShowcase';
import { GrowthStory } from '../components/home/GrowthStory';
import { PartnershipModel } from '../components/home/PartnershipModel';
import { RegionalOpportunityGrid } from '../components/home/RegionalOpportunityGrid';
import { FounderStory } from '../components/home/FounderStory';
import { ClosingStatement } from '../components/home/ClosingStatement';

export const Home: React.FC = () => {
  return (
    <>
      <HomeHero />
      <DriverFirst />
      <AppShowcase />
      <GrowthStory />
      <PartnershipModel />
      <RegionalOpportunityGrid />
      <FounderStory />
      <ClosingStatement />
    </>
  );
};

export default Home;
