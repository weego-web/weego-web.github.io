
import React, { Suspense, lazy } from 'react';
import { Hero } from '../components/Hero';

const ServiceList = lazy(() => import('../components/ServiceList').then(module => ({ default: module.ServiceList })));
const TrustBar = lazy(() => import('../components/TrustBar').then(module => ({ default: module.TrustBar })));
const FAQ = lazy(() => import('../components/FAQ').then(module => ({ default: module.FAQ })));
const FinalCTA = lazy(() => import('../components/FinalCTA').then(module => ({ default: module.FinalCTA })));
const Process = lazy(() => import('../components/Process').then(module => ({ default: module.Process })));
const WorkGrid = lazy(() => import('../components/WorkGrid').then(module => ({ default: module.WorkGrid })));

const SectionLoader = () => (
    <div className="w-full h-96 flex items-center justify-center bg-weego-black">
        <div className="w-12 h-12 border-2 border-weego-gray border-t-weego-lime rounded-full animate-spin" />
    </div>
);

export const Home: React.FC = () => {
  return (
    <main>
      <Hero />
      <Suspense fallback={<SectionLoader />}>
        <ServiceList />
        <WorkGrid />
        <Process />
        <FAQ />
        <FinalCTA />
      </Suspense>
    </main>
  );
};
