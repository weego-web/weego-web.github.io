import React from 'react';
import { Hero } from './components/Hero';
import { Essence } from './components/Essence';
import { Architecture } from './components/Architecture';
import { TechStack } from './components/TechStack';
import { CTA } from './components/CTA';

export default function App() {
  return (
    <div className="min-h-screen bg-graphite text-white selection:bg-amber-500/30">
      <Hero />
      <Essence />
      <Architecture />
      <TechStack />
      <CTA />
    </div>
  );
}
