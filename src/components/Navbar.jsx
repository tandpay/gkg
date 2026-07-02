import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const isActive = (path) => location.pathname === path ? 'active-link' : '';

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <Link to="/" className="logo-container">
          <img src="/logo.jpg" alt="GKG Logo" style={{ mixBlendMode: 'multiply' }} />
          <div className="logo-text">GKG Rwanda</div>
        </Link>
        
        {/* Desktop Links */}
        <div className="nav-links desktop-only">
          <Link to="/" className={`nav-link ${isActive('/')}`}>Home</Link>
          <Link to="/about" className={`nav-link ${isActive('/about')}`}>About Us</Link>
          <Link to="/governance" className={`nav-link ${isActive('/governance')}`}>Our Products</Link>
          <Link to="/safeguarding" className={`nav-link ${isActive('/safeguarding')}`}>Our Impact</Link>
          <a href="mailto:goldengarden121@gmail.com" className="btn nav-cta">Partner</a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button 
          className={`hamburger ${menuOpen ? 'open' : ''} mobile-only`} 
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <Link to="/" className={`nav-link ${isActive('/')}`}>Home</Link>
        <Link to="/about" className={`nav-link ${isActive('/about')}`}>About Us</Link>
        <Link to="/governance" className={`nav-link ${isActive('/governance')}`}>Our Products</Link>
        <Link to="/safeguarding" className={`nav-link ${isActive('/safeguarding')}`}>Our Impact</Link>
        <a href="mailto:goldengarden121@gmail.com" className="btn nav-cta" style={{marginTop:'1rem'}}>Partner</a>
      </div>
    </nav>
  );
}
