import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Governance from './pages/Governance';
import Safeguarding from './pages/Safeguarding';

import './index.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/governance" element={<Governance />} />
          <Route path="/safeguarding" element={<Safeguarding />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
