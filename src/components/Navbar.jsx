import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const onHero = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  // Lock page scroll behind the open mobile menu; Escape closes it.
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e) => { if (e.key === 'Escape') setMenuOpen(false); };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [menuOpen]);

  const isActive = (path) => location.pathname === path ? 'active-link' : '';
  const current = (path) => location.pathname === path ? 'page' : undefined;

  return (
    <nav className={`navbar ${onHero ? 'on-hero' : ''} ${scrolled ? 'scrolled' : ''} ${menuOpen ? 'menu-open' : ''}`} aria-label="Main">
      <div className="container">
        <Link to="/" className="logo-container">
          <img className="logo-mark" src="/logo.svg" alt="GKG Logo" width="44" height="44" />
          <div className="logo-text">GKG Rwanda</div>
        </Link>

        {/* Desktop Links */}
        <div className="nav-links desktop-only">
          <Link to="/" className={`nav-link ${isActive('/')}`} aria-current={current('/')}>Home</Link>
          <Link to="/about" className={`nav-link ${isActive('/about')}`} aria-current={current('/about')}>About Us</Link>
          <Link to="/products" className={`nav-link ${isActive('/products')}`} aria-current={current('/products')}>Our Products</Link>
          <Link to="/impact" className={`nav-link ${isActive('/impact')}`} aria-current={current('/impact')}>Our Impact</Link>
          <a href="mailto:goldengarden121@gmail.com" className="btn btn-primary btn-sm nav-cta">Partner</a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          className={`hamburger ${menuOpen ? 'open' : ''} mobile-only`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div id="mobile-menu" className={`mobile-menu ${menuOpen ? 'open' : ''}`} inert={!menuOpen}>
        <Link to="/" className={`nav-link ${isActive('/')}`}>Home</Link>
        <Link to="/about" className={`nav-link ${isActive('/about')}`}>About Us</Link>
        <Link to="/products" className={`nav-link ${isActive('/products')}`}>Our Products</Link>
        <Link to="/impact" className={`nav-link ${isActive('/impact')}`}>Our Impact</Link>
        <a href="mailto:goldengarden121@gmail.com" className="btn btn-primary nav-cta">Partner</a>
      </div>
    </nav>
  );
}
