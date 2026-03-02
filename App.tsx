
import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';
import { Home } from './pages/Home';
import { Brief } from './pages/Brief';
import { ServiceDetail } from './pages/ServiceDetail';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="bg-weego-black min-h-screen selection:bg-weego-lime selection:text-weego-black">
          <div className="opacity-100 transition-opacity duration-1000">
              <CustomCursor />
              <Header />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/brief" element={<Brief />} />
                <Route path="/services/:id" element={<ServiceDetail />} />
                {/* Redirect old estimate route to brief */}
                <Route path="/estimate" element={<Navigate to="/brief" replace />} />
                {/* Catch all redirect to home */}
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
              <Footer />
          </div>
        </div>
      </BrowserRouter>
    </LanguageProvider>
  );
};

export default App;
