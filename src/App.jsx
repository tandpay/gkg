import React, { useEffect } from 'react';
import './index.css';

function App() {
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <nav className="navbar">
        <div className="container">
          <div className="logo-container">
            <img src="/logo.png" alt="GKG Logo" />
            <div className="logo-text">GKG Rwanda</div>
          </div>
          <div className="nav-links">
            <a href="#about" className="nav-link">Our Story</a>
            <a href="#programs" className="nav-link">Initiatives</a>
            <a href="#gallery" className="nav-link">Journal</a>
            <a href="#contact" className="btn">Partner</a>
          </div>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-bg-wrapper">
          <img src="/hero.jpg" alt="Golden Kitchen Garden" className="hero-bg" />
        </div>
        <div className="container">
          <div className="hero-content reveal">
            <h1 className="hero-title">
              Cultivating Life,<br/>
              <span>Empowering Future.</span>
            </h1>
            <div className="hero-meta">
              <p className="uppercase">Urban Agriculture</p>
              <p className="hero-subtitle">Transforming Rwanda's urban spaces into resilient, productive, and beautiful edible landscapes.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="container">
          <div className="editorial-split">
            <div className="editorial-text reveal">
              <span className="uppercase editorial-tag">The Mission</span>
              <h2 className="editorial-title">Bridging the Gap Between Rapid Urbanization & Food Security.</h2>
              <p className="editorial-body">
                Founded in 2020 by Jean de Dieu TWAGIRIMANA, Golden Kitchen Garden (GKG) is a social enterprise tackling the critical nexus of land scarcity and high malnutrition rates. 
                <br/><br/>
                We believe that every underutilized space holds the potential to foster economic resilience and combat childhood malnutrition right from the source.
              </p>
              <a href="#programs" className="btn btn-filled">Discover Our Work</a>
            </div>
            <div className="editorial-image-wrapper reveal mask-organic">
              <img src="/empowering-women.jpg" alt="Empowering Women in Agriculture" className="editorial-image" />
            </div>
          </div>
        </div>
      </section>

      <section id="programs" className="section section-no-border">
        <div className="container">
          <div className="reveal" style={{marginBottom: '5rem'}}>
            <span className="uppercase text-accent" style={{display:'block', marginBottom:'1rem'}}>Strategic Initiatives</span>
            <h2 className="serif" style={{fontSize: '4rem', maxWidth: '700px'}}>Revolutionizing Rwanda's food systems.</h2>
          </div>
          
          <div className="bento-grid reveal">
            <div className="bento-item large">
              <div className="bento-number">01</div>
              <div>
                <h3 className="serif bento-title">Climate Smart Agriculture.</h3>
                <p className="bento-text">Advancing climate resilience by embedding CSA into community-led initiatives, minimizing our environmental footprint while maximizing yield.</p>
              </div>
            </div>
            <div className="bento-item" style={{backgroundImage: 'url(/seedlings.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', color: '#fff'}}>
              <div style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)'}}></div>
              <div className="bento-number" style={{position:'relative', zIndex:10, color:'#fff'}}>02</div>
              <div style={{position:'relative', zIndex:10}}>
                <h3 className="serif" style={{fontSize:'2rem', marginBottom:'1rem'}}>Food Security</h3>
              </div>
            </div>
            <div className="bento-item">
              <div className="bento-number">03</div>
              <div>
                <h3 className="serif bento-title">AgriFood Innovation</h3>
                <p className="bento-text">Integrating IoT-based irrigation systems and advanced technologies to transform traditional agro-ecosystems.</p>
              </div>
            </div>
            <div className="bento-item">
              <div className="bento-number">04</div>
              <div>
                <h3 className="serif bento-title">Circular Economy</h3>
                <p className="bento-text">Promoting approaches that reduce waste, utilizing recycle techniques and producing premium organic compost.</p>
              </div>
            </div>
            <div className="bento-item" style={{gridColumn: 'span 2'}}>
              <div className="bento-number">05</div>
              <div>
                <h3 className="serif bento-title">Commercial Landscaping</h3>
                <p className="bento-text">High-end, edible landscaping services promoting our "beauty-meets-nutrition" philosophy for private estates and luxury hotels.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services-img" className="section">
         <div className="container">
           <div className="editorial-split reverse">
            <div className="editorial-text reveal">
              <span className="uppercase editorial-tag">Premium Services</span>
              <h2 className="editorial-title">Edible Landscaping.</h2>
              <p className="editorial-body">
                We design and construct breathtaking landscapes that are not only visually stunning but abundantly productive. Perfect for high-end hospitality and private estates.
              </p>
              <a href="#contact" className="btn">Request Consultation</a>
            </div>
            <div className="editorial-image-wrapper reveal mask-arch">
              <img src="/landscaping-pathway.jpg" alt="Professional Landscaping" className="editorial-image" />
            </div>
          </div>
         </div>
      </section>

      <section className="vision-section reveal">
        <div className="container">
          <h2 className="vision-title serif">Vision 2030</h2>
          <div className="stats-grid">
            <div className="stat-item reveal">
              <span className="stat-num">12k</span>
              <span className="stat-desc">Trained Beneficiaries</span>
            </div>
            <div className="stat-item reveal" style={{transitionDelay: '0.2s'}}>
              <span className="stat-num">1k+</span>
              <span className="stat-desc">Kitchen Gardens Installed</span>
            </div>
            <div className="stat-item reveal" style={{transitionDelay: '0.4s'}}>
              <span className="stat-num">150</span>
              <span className="stat-desc">Institutional Partnerships</span>
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="section section-no-border">
        <div className="container">
          <div className="reveal" style={{marginBottom: '5rem', display:'flex', justifyContent:'space-between', alignItems:'flex-end'}}>
            <div>
              <span className="uppercase text-accent" style={{display:'block', marginBottom:'1rem'}}>Journal & Work</span>
              <h2 className="serif" style={{fontSize: '4rem'}}>Impact in Action.</h2>
            </div>
            <p className="editorial-body" style={{margin:0}}>A visual diary of our daily operations and the communities we empower.</p>
          </div>
          
          <div className="masonry reveal">
            <div className="masonry-item"><img src="/garden-construction.jpg" alt="Construction" /></div>
            <div className="masonry-item"><img src="/gallery-1.jpg" alt="Gallery" /></div>
            <div className="masonry-item"><img src="/gallery-2.jpg" alt="Gallery" /></div>
            <div className="masonry-item"><img src="/gallery-3.jpg" alt="Gallery" /></div>
            <div className="masonry-item"><img src="/gallery-4.jpg" alt="Gallery" /></div>
            <div className="masonry-item"><img src="/gallery-5.jpg" alt="Gallery" /></div>
            <div className="masonry-item"><img src="/gallery-6.jpg" alt="Gallery" /></div>
            <div className="masonry-item"><img src="/gallery-7.jpg" alt="Gallery" /></div>
            <div className="masonry-item"><img src="/gallery-8.jpg" alt="Gallery" /></div>
          </div>
        </div>
      </section>

      <footer id="contact" className="footer">
        <div className="container">
          <div className="footer-top reveal">
            <h2 className="footer-huge">Partner with <span>purpose.</span></h2>
            <a href="mailto:goldengarden121@gmail.com" className="btn btn-filled">Get in touch</a>
          </div>
          
          <div className="footer-grid reveal">
            <div className="footer-col">
              <h4>Organization</h4>
              <p className="text-dim" style={{marginBottom: '1rem'}}>Golden Kitchen Garden Rwanda Ltd.<br/>Nkotsi, Musanze, Rwanda</p>
              <p className="text-dim">RDB Code: 112368548</p>
            </div>
            <div className="footer-col">
              <h4>Contact</h4>
              <ul className="footer-links">
                <li><a href="mailto:goldengarden121@gmail.com">goldengarden121@gmail.com</a></li>
                <li><a href="tel:+250788206976">+250 788 206 976</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Leadership</h4>
              <ul className="footer-links">
                <li><span className="text-dim">Jean de Dieu TWAGIRIMANA</span></li>
                <li><span className="text-dim">Managing Director</span></li>
              </ul>
            </div>
            <div className="footer-col" style={{textAlign: 'right'}}>
               <img src="/logo.png" alt="GKG" style={{height:'60px', filter: 'brightness(0) invert(1) sepia(1) hue-rotate(330deg) saturate(3) brightness(0.8)', marginBottom:'2rem'}} />
               <p className="text-dim uppercase" style={{fontSize: '0.75rem'}}>&copy; {new Date().getFullYear()} Golden Kitchen Garden. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App;
