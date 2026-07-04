import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer-top reveal">
          <h2 className="footer-huge">Partner with <span>purpose.</span></h2>
          <a href="mailto:info@goldenkitchengarden.com" className="btn btn-accent-outline">Get in touch ↗</a>
        </div>

        <div className="footer-grid reveal">
          <div className="footer-col">
            <h4>Organization</h4>
            <p className="text-dim" style={{marginBottom: '0.75rem'}}>Golden Kitchen Garden Rwanda Ltd.</p>
            <p className="text-dim" style={{marginBottom: '0.75rem'}}>Nkotsi, Musanze, Rwanda</p>
            <p className="text-dim">RDB Code: 112368548</p>
          </div>
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/governance">Our Products</Link></li>
              <li><Link to="/safeguarding">Our Impact</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Leadership</h4>
            <ul className="footer-links">
              <li><span className="text-dim">Jean de Dieu TWAGIRIMANA</span></li>
              <li><span className="text-dim">Managing Director & Founder</span></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact Us</h4>
            <ul className="footer-links footer-contact">
              <li><a href="https://wa.me/250788206976">WhatsApp: +250 788 206 976</a></li>
              <li><a href="tel:+250788206976">Phone: +250 788 206 976</a></li>
              <li><a href="mailto:info@goldenkitchengarden.com">info@goldenkitchengarden.com</a></li>
              <li><a href="mailto:customer@goldenkitchengarden.com">customer@goldenkitchengarden.com</a></li>
            </ul>
          </div>
          <div className="footer-col" style={{textAlign: 'right'}}>
            <img src="/logo.jpg" alt="GKG" style={{height:'60px', filter: 'invert(1) grayscale(1) brightness(2)', mixBlendMode: 'screen', marginBottom:'2rem'}} />
            <p className="text-dim uppercase" style={{fontSize: '0.75rem'}}>&copy; {new Date().getFullYear()} Golden Kitchen Garden Rwanda. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
