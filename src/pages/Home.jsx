import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

/* ─── Animated Counter Hook ──────────────────────────── */
function useCountUp(target, duration = 2000) {
  const ref = useRef(null);
  const hasRun = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasRun.current) {
        hasRun.current = true;
        const isDecimal = String(target).includes('.');
        const numericTarget = parseFloat(String(target).replace(/[^0-9.]/g, ''));
        const suffix = String(target).replace(/[0-9.]/g, '');
        const start = performance.now();

        const tick = (now) => {
          const elapsed = now - start;
          const progress = Math.min(elapsed / duration, 1);
          const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
          const current = eased * numericTarget;
          el.textContent = (isDecimal
            ? current.toFixed(1)
            : Math.floor(current).toLocaleString()) + suffix;
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.5 });

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return ref;
}

function scrollTo(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export default function Home() {

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
      });
    }, { threshold: 0.08 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const bg = document.querySelector('.hero-bg');
    if (!bg) return;
    const onScroll = () => {
      bg.style.transform = `translateY(${window.scrollY * 0.35}px)`;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const count1 = useCountUp('12,000+');
  const count2 = useCountUp('1,000+');
  const count3 = useCountUp('150');

  return (
    <>
      {/* ─── HERO ───────────────────────────────────────── */}
      <section className="hero">
        <div className="hero-bg-wrapper">
          <img src="/hero.jpg" alt="Golden Kitchen Garden" className="hero-bg" />
        </div>
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content reveal">
            <p className="hero-eyebrow uppercase">Est. 2020 · Musanze, Rwanda</p>
            <h1 className="hero-title">
              Cultivating Life,<br/>
              <span>Empowering Future.</span>
            </h1>
            <div className="hero-meta">
              <p className="uppercase hero-tag">Urban Agriculture</p>
              <p className="hero-subtitle">Transforming Rwanda's urban spaces into resilient, productive, and beautiful edible landscapes — for communities, investors and the planet.</p>
            </div>
            <div className="hero-btns">
              <button onClick={() => scrollTo('programs')} className="btn btn-light">Explore Initiatives</button>
              <Link to="/about" className="btn btn-outline-light">About Us</Link>
            </div>
          </div>
        </div>
        <div className="hero-scroll-hint">
          <span className="uppercase">Scroll</span>
          <div className="scroll-line"></div>
        </div>
      </section>

      {/* ─── PROGRAMS ───────────────────────────────────── */}
      <section id="programs" className="section section-no-border">
        <div className="container">
          <div className="section-intro reveal">
            <div>
              <span className="uppercase text-accent" style={{display:'block', marginBottom:'1rem'}}>Strategic Initiatives</span>
              <h2 className="serif section-h2">
                Revolutionizing Rwanda's<br/>
                <em>food systems</em> — from<br/>
                the ground up.
              </h2>
            </div>
            <p className="section-intro-body">
              Our five core programs form an integrated ecosystem that addresses food security, climate resilience, innovation, and economic empowerment simultaneously — creating compounding impact at every level.
            </p>
          </div>

          <div className="bento-grid reveal">
            <div className="bento-item large">
              <div className="bento-number">01</div>
              <div>
                <h3 className="serif bento-title">Climate Smart<br/>Agriculture.</h3>
                <p className="bento-text">We advance climate resilience by embedding CSA principles into every community-led initiative — using no-tillage techniques, water-smart irrigation, and biodiversity planting to minimise environmental footprint while maximizing yield per square meter.</p>
              </div>
            </div>
            <div className="bento-item bento-image" style={{backgroundImage: 'url(/seedlings.jpg)'}}>
              <div className="bento-img-overlay"></div>
              <div className="bento-number bento-number-light">02</div>
              <div className="bento-bottom-content">
                <h3 className="serif" style={{fontSize:'2rem', marginBottom:'0.5rem', color:'#fff'}}>Nutrition &amp;<br/>Food Security</h3>
                <p className="bento-text bento-text-light">Our flagship "Ishuri ry'Umurima" program supplies schools with chemical-free vegetables to combat childhood stunting at the source.</p>
              </div>
            </div>
            <div className="bento-item">
              <div className="bento-number">03</div>
              <div>
                <h3 className="serif bento-title">AgriFood<br/>Innovation</h3>
                <p className="bento-text">Integrating IoT-based drip irrigation, remote crop monitoring, and precision composting to transform traditional agro-ecosystems into data-driven productive units.</p>
              </div>
            </div>
            <div className="bento-item">
              <div className="bento-number">04</div>
              <div>
                <h3 className="serif bento-title">Circular<br/>Economy</h3>
                <p className="bento-text">From kitchen waste to premium compost, we close the nutrient loop. Our reuse/recycle model cuts input costs by up to 60% while regenerating soil health.</p>
              </div>
            </div>
            <div className="bento-item bento-wide">
              <div className="bento-number">05</div>
              <div>
                <h3 className="serif bento-title">Commercial Landscaping<br/>&amp; Consultancy</h3>
                <p className="bento-text">High-end, edible landscaping for private estates, luxury hotels, and institutions — promoting our "beauty-meets-nutrition" philosophy where every garden feeds and inspires.</p>
              </div>
              <div className="bento-cta">
                <button onClick={() => scrollTo('services-img')} className="btn btn-filled btn-sm">Learn More →</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SERVICES ───────────────────────────────────── */}
      <section id="services-img" className="section">
        <div className="container">
          <div className="editorial-split reverse">
            <div className="editorial-text reveal">
              <span className="uppercase editorial-tag">Premium Services</span>
              <h2 className="editorial-title">Where Beauty<br/>Meets Nutrition.</h2>
              <p className="editorial-body">
                We design and construct breathtaking edible landscapes that are not only visually stunning but abundantly productive. Every leaf, every pathway, every raised bed is crafted with intention.
              </p>
              <div className="services-list">
                <div className="service-item">
                  <span className="service-num">—</span>
                  <div>
                    <strong>Edible Garden Design &amp; Installation</strong>
                    <p>For private homes, estates, hotels &amp; restaurants</p>
                  </div>
                </div>
                <div className="service-item">
                  <span className="service-num">—</span>
                  <div>
                    <strong>Organic Vegetable Seedlings</strong>
                    <p>Certified chemical-free, grown in our nursery</p>
                  </div>
                </div>
                <div className="service-item">
                  <span className="service-num">—</span>
                  <div>
                    <strong>Premium Organic Compost</strong>
                    <p>High-quality soil amendment for commercial farms</p>
                  </div>
                </div>
                <div className="service-item">
                  <span className="service-num">—</span>
                  <div>
                    <strong>Agricultural Consultancy</strong>
                    <p>Training, planning &amp; field support</p>
                  </div>
                </div>
              </div>
              <a href="mailto:goldengarden121@gmail.com" className="btn">Request a Consultation</a>
            </div>
            <div className="editorial-image-wrapper reveal mask-arch">
              <img src="/landscaping-pathway.jpg" alt="Professional Landscaping" className="editorial-image" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── PARTNERS & ECOSYSTEM ───────────────────────── */}
      <section className="section section-bg">
        <div className="container">
          <div className="reveal" style={{textAlign:'center', marginBottom:'4rem'}}>
            <span className="uppercase text-accent" style={{display:'block', marginBottom:'1rem'}}>Our Ecosystem</span>
            <h2 className="serif" style={{fontSize:'clamp(2.5rem, 4vw, 4rem)'}}>Partners &amp; Collaborators</h2>
            <p className="editorial-body" style={{maxWidth:'600px', margin:'1.5rem auto 0'}}>
              We work alongside a growing network of government agencies, international organizations, and private sector partners to scale impact across Rwanda.
            </p>
          </div>

          <div className="partner-grid reveal">
            <div className="partner-card">
              <div className="partner-icon">🏛️</div>
              <h4>Government</h4>
              <p>Rwanda Agriculture Board (RAB), MINAGRI, Local Government, District Authorities</p>
            </div>
            <div className="partner-card">
              <div className="partner-icon">🌍</div>
              <h4>International NGOs</h4>
              <p>UN Agencies, Development Partners, and International Development Organizations</p>
            </div>
            <div className="partner-card">
              <div className="partner-icon">🏨</div>
              <h4>Private Sector</h4>
              <p>Luxury Hotels, Restaurants, Private Estates, Commercial Farms &amp; Agribusinesses</p>
            </div>
            <div className="partner-card">
              <div className="partner-icon">🎓</div>
              <h4>Education</h4>
              <p>Primary &amp; Secondary Schools, Universities, and Vocational Training Centers across Musanze</p>
            </div>
            <div className="partner-card">
              <div className="partner-icon">👩‍🌾</div>
              <h4>Community Groups</h4>
              <p>Women's Cooperatives, Youth Associations, and Persons with Disabilities (PWD) Groups</p>
            </div>
            <div className="partner-card">
              <div className="partner-icon">🔬</div>
              <h4>Technology</h4>
              <p>IoT &amp; AgriTech Providers, Digital Agriculture Platforms, and Research Institutions</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHAT WE GROW ───────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className="section-intro reveal">
            <div>
              <span className="uppercase text-accent" style={{display:'block', marginBottom:'1rem'}}>From Our Gardens</span>
              <h2 className="serif section-h2">
                What We<br/>
                <em>Grow.</em>
              </h2>
            </div>
            <p className="section-intro-body">
              All of our produce is 100% organic and chemical-free, grown using climate-smart techniques. From leafy greens to companion flowers, every crop serves a purpose in our integrated food systems.
            </p>
          </div>

          <div className="crop-grid reveal">
            <div className="crop-tag">🥬 Kale &amp; Collard Greens</div>
            <div className="crop-tag">🧅 Onions &amp; Spring Onions</div>
            <div className="crop-tag">🫘 Bush Beans &amp; Climbing Beans</div>
            <div className="crop-tag">🌿 Parsley &amp; Dill</div>
            <div className="crop-tag">🥬 Cabbage &amp; Bok Choy</div>
            <div className="crop-tag">🍠 Sweet Potato</div>
            <div className="crop-tag">🌱 Amaranth Greens</div>
            <div className="crop-tag">🌼 Marigolds (Companion)</div>
            <div className="crop-tag">🥒 Fennel</div>
            <div className="crop-tag">🌾 Organic Compost</div>
          </div>
        </div>
      </section>
      <section id="impact" className="vision-section">
        <div className="container">
          <div className="reveal">
            <p className="uppercase" style={{color:'rgba(255,255,255,0.5)', marginBottom:'1rem', display:'block'}}>Our Vision 2030</p>
            <h2 className="vision-title serif">Scale.</h2>
          </div>
          <div className="stats-grid">
            <div className="stat-item reveal">
              <span className="stat-num" ref={count1}>0</span>
              <span className="stat-desc">Trained Beneficiaries</span>
            </div>
            <div className="stat-item reveal" style={{transitionDelay: '0.15s'}}>
              <span className="stat-num" ref={count2}>0</span>
              <span className="stat-desc">Kitchen Gardens Installed</span>
            </div>
            <div className="stat-item reveal" style={{transitionDelay: '0.3s'}}>
              <span className="stat-num" ref={count3}>0</span>
              <span className="stat-desc">Institutional Partnerships</span>
            </div>
          </div>
          <p className="vision-subtext reveal">
            By 2030, GKG aims to be Rwanda's <em>National Hub for Urban Agricultural Excellence</em> — scaling from Musanze into every major city, partnering with NGOs, government, and private investors to permanently transform the nation's food landscape.
          </p>
        </div>
      </section>

      {/* ─── GALLERY ────────────────────────────────────── */}
      <section id="gallery" className="section section-no-border">
        <div className="container">
          <div className="reveal gallery-header">
            <div>
              <span className="uppercase text-accent" style={{display:'block', marginBottom:'1rem'}}>Journal &amp; Work</span>
              <h2 className="serif" style={{fontSize: '4rem'}}>Impact in Action.</h2>
            </div>
            <p className="editorial-body" style={{margin:0, maxWidth:'360px'}}>A visual diary of our daily operations, training sessions, and the communities we empower across Rwanda.</p>
          </div>

          <div className="masonry reveal">
            <div className="masonry-item"><img src="/garden-construction.jpg" alt="Garden Construction" /></div>
            <div className="masonry-item"><img src="/gallery-1.jpg" alt="Community Work" /></div>
            <div className="masonry-item"><img src="/gallery-2.jpg" alt="Training Session" /></div>
            <div className="masonry-item"><img src="/gallery-3.jpg" alt="Kitchen Garden" /></div>
            <div className="masonry-item"><img src="/gallery-4.jpg" alt="Harvest" /></div>
            <div className="masonry-item"><img src="/gallery-5.jpg" alt="Women Farmers" /></div>
            <div className="masonry-item"><img src="/gallery-6.jpg" alt="Organic Seedlings" /></div>
            <div className="masonry-item"><img src="/gallery-7.jpg" alt="Urban Farm" /></div>
            <div className="masonry-item"><img src="/gallery-8.jpg" alt="Community Impact" /></div>
          </div>
        </div>
      </section>
    </>
  );
}
