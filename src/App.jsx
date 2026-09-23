import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import HeadSync from './components/HeadSync';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import useReveal from './components/useReveal';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Governance from './pages/Governance';
import Safeguarding from './pages/Safeguarding';
import NotFound from './pages/NotFound';

import './index.css';

// The router itself is supplied by main.jsx (browser) or entry-server.jsx (prerender).
function App() {
  useReveal();

  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <ScrollToTop />
      <HeadSync />
      <Navbar />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Governance />} />
          <Route path="/impact" element={<Safeguarding />} />
          <Route path="/governance" element={<Navigate to="/products" replace />} />
          <Route path="/safeguarding" element={<Navigate to="/impact" replace />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
