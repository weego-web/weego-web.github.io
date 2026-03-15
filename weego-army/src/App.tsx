import React from 'react';
import { Hero } from './components/Hero';
import { Essence } from './components/Essence';
import { FeatureBlocks } from './components/FeatureBlocks';
import { Architecture } from './components/Architecture';
import { SchemasAndTrees } from './components/SchemasAndTrees';
import { ClassStructure } from './components/ClassStructure';
import { UseCases } from './components/UseCases';
import { ProcessFlow } from './components/ProcessFlow';
import { Documentation } from './components/Documentation';
import { TechStack } from './components/TechStack';
import { ScreenStates } from './components/ScreenStates';
import { UserJourney } from './components/UserJourney';
import { InteractionPatterns } from './components/InteractionPatterns';
import { MetricsDashboard } from './components/MetricsDashboard';
import { AccessibilityUX } from './components/AccessibilityUX';
import { VisualFormsGallery } from './components/VisualFormsGallery';
import { AppServerConnection } from './components/AppServerConnection';
import { CTA } from './components/CTA';

export default function App() {
  return (
    <div className="min-h-screen bg-graphite text-white selection:bg-beige-500/30">
      <Hero />
      <Essence />
      <FeatureBlocks />
      <Architecture />
      <SchemasAndTrees />
      <ClassStructure />
      <UseCases />
      <ProcessFlow />
      <ScreenStates />
      <UserJourney />
      <InteractionPatterns />
      <MetricsDashboard />
      <AccessibilityUX />
      <VisualFormsGallery />
      <AppServerConnection />
      <Documentation />
      <TechStack />
      <CTA />
    </div>
  );
}
