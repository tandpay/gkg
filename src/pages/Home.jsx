import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Img from '../components/Img';

/* ─── Animated Counter Hook ──────────────────────────── */
// Counts up to a figure like "12,000+" once it scrolls into view. The
// prerendered HTML carries the final figure for crawlers and no-JS visitors.
function useCountUp(target, duration = 1800) {
  const ref = useRef(null);
  const hasRun = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || hasRun.current) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const numericTarget = Number(String(target).replace(/[^0-9.]/g, ''));
    const suffix = String(target).replace(/[0-9.,]/g, '');
    const format = (n) => Math.round(n).toLocaleString('en-US') + suffix;
    el.textContent = format(0);

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || hasRun.current) return;
      hasRun.current = true;
      observer.disconnect();
      const start = performance.now();
      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        el.textContent = format(eased * numericTarget);
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, { threshold: 0.5 });

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return ref;
}

function scrollTo(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const smooth = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  el.scrollIntoView({ behavior: smooth ? 'smooth' : 'auto', block: 'start' });
}

const icon = {
  government: <path d="M3 21h18M4 10h16M12 3 3.5 8h17L12 3ZM6 10v8m4-8v8m4-8v8m4-8v8M4 18h16" />,
  ngo: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3Z" /></>,
  private: <path d="M4 21V5.5L12 3l8 2.5V21M4 21h16M9 21v-4h6v4M8 8h1m3 0h1m3 0h1M8 12h1m3 0h1m3 0h1" />,
  education: <path d="m2 9 10-5 10 5-10 5L2 9Zm4 2v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5m4-2v6" />,
  community: <><circle cx="9" cy="8" r="3.2" /><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" /><circle cx="17" cy="9" r="2.4" /><path d="M16.5 14.1c2.6.3 4.5 2.6 4.5 5.4" /></>,
  technology: <><rect x="6" y="6" width="12" height="12" rx="2" /><path d="M10 10h4v4h-4zM9 2v4m6-4v4M9 18v4m6-4v4M2 9h4m-4 6h4m12-6h4m-4 6h4" /></>,
};

function PartnerIcon({ name }) {
  return (
    <div className="partner-icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        {icon[name]}
      </svg>
    </div>
  );
}

export default function Home() {

  useEffect(() => {
    const bg = document.querySelector('.hero-bg');
    if (!bg || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        if (window.scrollY < window.innerHeight * 1.2) {
          bg.style.transform = `translateY(${window.scrollY * 0.18}px)`;
        }
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => { cancelAnimationFrame(frame); window.removeEventListener('scroll', onScroll); };
  }, []);

  const count1 = useCountUp('12,000+');
  const count2 = useCountUp('1,000+');
  const count3 = useCountUp('150');

  return (
    <>
      {/* ─── HERO ───────────────────────────────────────── */}
      <section className="hero">
        <div className="hero-bg-wrapper">
          <Img src="/hero.jpg" sizes="100vw" alt="Golden Kitchen Garden Rwanda farm team tending a strawberry field" className="hero-bg" fetchPriority="high" />
        </div>
        <div className="hero-overlay"></div>
        <div className="hero-terraces" aria-hidden="true"><span></span><span></span><span></span><span></span><span></span></div>
        <div className="container">
          <div className="hero-content">
            <p className="hero-eyebrow">Est. 2020 · Musanze, Rwanda</p>
            <h1 className="hero-title">
              <span className="line"><span>Empowering Future Generations</span></span>
              <span className="line line-soft"><span>through Regenerative &amp; Climate-Smart Agriculture</span></span>
            </h1>
            <div className="hero-meta">
              <p className="hero-subtitle">Transforming Rwanda's urban and rural spaces into resilient, productive, and beautiful edible landscapes for communities, investors, and the planet.</p>
              <div className="hero-btns">
                <button onClick={() => scrollTo('programs')} className="btn btn-light">Explore Initiatives</button>
                <Link to="/about" className="btn btn-outline-light">About Us</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PROGRAMS ───────────────────────────────────── */}
      <section id="programs" className="section">
        <div className="container">
          <div className="section-head single reveal">
            <h2 className="display-2">Our Core Programs</h2>
          </div>

          <article className="program-feature">
            <div className="media reveal-media">
              <Img src="/1.jpg" sizes="(max-width: 900px) 100vw, 740px" alt="Regenerative and climate-smart agriculture" loading="lazy" decoding="async" />
            </div>
            <div className="reveal">
              <h3>Regenerative and<br/>Climate-Smart Agriculture</h3>
              <p className="body-text">We advance climate resilience by embedding CSA principles into every community-led initiative — using no-tillage techniques, water-smart irrigation, and biodiversity planting to minimise environmental footprint while maximizing yield per square meter.</p>
            </div>
          </article>

          <div className="program-grid">
            <article className="program reveal" style={{'--i': 0}}>
              <div className="media"><Img src="/2.jpg" sizes="(max-width: 640px) 100vw, (max-width: 1080px) 50vw, 300px" alt="Nutrition and food security programs" loading="lazy" decoding="async" /></div>
              <h3>Nutrition &amp;<br/>Food Security</h3>
              <p>We empower smallholder farmers through practical Farmer Field Schools, providing hands-on training from nursery establishment to sustainable crop production. The program promotes nutrition, food security, and climate-smart agriculture while engaging youth, women, and persons with disabilities through secondary school clubs, VSLAs, and cooperatives.</p>
            </article>
            <article className="program reveal" style={{'--i': 1}}>
              <div className="media"><Img src="/3.jpg" sizes="(max-width: 640px) 100vw, (max-width: 1080px) 50vw, 300px" alt="Agrifood innovation" loading="lazy" decoding="async" /></div>
              <h3>Agrifood<br/>Innovation</h3>
              <p>Integrating IoT-based drip irrigation, remote crop monitoring, and precision composting to transform traditional agro-ecosystems into data-driven productive units.</p>
            </article>
            <article className="program reveal" style={{'--i': 2}}>
              <div className="media"><Img src="/4.jpg" sizes="(max-width: 640px) 100vw, (max-width: 1080px) 50vw, 300px" alt="Circular economy composting" loading="lazy" decoding="async" /></div>
              <h3>Circular<br/>Economy</h3>
              <p>From kitchen waste to premium compost, we close the nutrient loop. Our reuse/recycle model cuts input costs by up to 60% while regenerating soil health.</p>
            </article>
            <article className="program reveal" style={{'--i': 3}}>
              <div className="media"><Img src="/program-commercial-landscaping.jpg" sizes="(max-width: 640px) 100vw, (max-width: 1080px) 50vw, 300px" alt="Commercial edible landscaping" loading="lazy" decoding="async" /></div>
              <h3>Commercial Landscaping</h3>
              <p>High-end, edible landscaping for private estates, luxury hotels, and institutions — promoting our "beauty-meets-nutrition" philosophy where every garden feeds and inspires.</p>
              <button onClick={() => scrollTo('services-img')} className="btn btn-ghost btn-sm">Learn More →</button>
            </article>
          </div>
        </div>
      </section>

      {/* ─── SERVICES ───────────────────────────────────── */}
      <section id="services-img" className="section section-bg">
        <div className="container">
          <div className="editorial-split reverse">
            <div className="editorial-text reveal">
              <span className="kicker">Premium Services</span>
              <h2 className="editorial-title">Where Beauty<br/>Meets Nutrition.</h2>
              <p className="body-text">
                We design and construct breathtaking edible landscapes that are not only visually stunning but abundantly productive. Every leaf, every pathway, every raised bed is crafted with intention.
              </p>
              <div className="services-list">
                <div className="service-item no-num">
                  <div>
                    <strong>Edible Garden Design &amp; Installation</strong>
                    <p>For private homes, estates, hotels &amp; restaurants</p>
                  </div>
                </div>
                <div className="service-item no-num">
                  <div>
                    <strong>Organic Vegetable Seedlings</strong>
                    <p>Certified chemical-free, grown in our nursery</p>
                  </div>
                </div>
                <div className="service-item no-num">
                  <div>
                    <strong>Premium Organic Compost</strong>
                    <p>High-quality soil amendment for commercial farms</p>
                  </div>
                </div>
                <div className="service-item no-num">
                  <div>
                    <strong>Agricultural Consultancy</strong>
                    <p>Training, planning &amp; field support</p>
                  </div>
                </div>
              </div>
              <a href="mailto:goldengarden121@gmail.com" className="btn btn-primary">Request a Consultation</a>
            </div>
            <div className="editorial-image-wrapper mask-arch reveal-media">
              <Img src="/landscaping-pathway.jpg" sizes="(max-width: 900px) 100vw, 600px" alt="Edible landscaping pathway designed by Golden Kitchen Garden Rwanda" className="editorial-image" loading="lazy" decoding="async" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── PARTNERS & ECOSYSTEM ───────────────────────── */}
      <section className="section">
        <div className="container">
          <div className="section-head reveal">
            <div>
              <span className="kicker">Our Ecosystem</span>
              <h2 className="display-2">Partners &amp; Collaborators</h2>
            </div>
            <p className="lede">
              We work alongside a growing network of government agencies, international organizations, and private sector partners to scale impact across Rwanda.
            </p>
          </div>

          <div className="partner-grid reveal">
            <div className="partner-card">
              <PartnerIcon name="government" />
              <h4>Government</h4>
              <p>Rwanda Agriculture Board (RAB), MINAGRI, Local Government, District Authorities</p>
            </div>
            <div className="partner-card">
              <PartnerIcon name="ngo" />
              <h4>International NGOs</h4>
              <p>UN Agencies, Development Partners, and International Development Organizations</p>
            </div>
            <div className="partner-card">
              <PartnerIcon name="private" />
              <h4>Private Sector</h4>
              <p>Luxury Hotels, Restaurants, Private Estates, Commercial Farms &amp; Agribusinesses</p>
            </div>
            <div className="partner-card">
              <PartnerIcon name="education" />
              <h4>Education</h4>
              <p>Primary &amp; Secondary Schools, Universities, and Vocational Training Centers across Musanze</p>
            </div>
            <div className="partner-card">
              <PartnerIcon name="community" />
              <h4>Community Groups</h4>
              <p>Women's Cooperatives, Youth Associations, and Persons with Disabilities (PWD) Groups</p>
            </div>
            <div className="partner-card">
              <PartnerIcon name="technology" />
              <h4>Technology</h4>
              <p>IoT &amp; AgriTech Providers, Digital Agriculture Platforms, and Research Institutions</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHAT WE GROW ───────────────────────────────── */}
      <section className="section section-bg">
        <div className="container">
          <div className="section-head reveal">
            <div>
              <span className="kicker">From Our Gardens</span>
              <h2 className="display-2">
                What We<br/>
                <em>Grow.</em>
              </h2>
            </div>
            <p className="lede">
              All of our produce is 100% organic and chemical-free, grown using climate-smart techniques. From leafy greens to companion flowers, every crop serves a purpose in our integrated food systems.
            </p>
          </div>

          <ul className="crop-grid reveal">
            <li className="crop-tag">Kale &amp; Collard Greens</li>
            <li className="crop-tag">Onions &amp; Spring Onions</li>
            <li className="crop-tag">Bush Beans &amp; Climbing Beans</li>
            <li className="crop-tag">Parsley &amp; Dill</li>
            <li className="crop-tag">Cabbage &amp; Bok Choy</li>
            <li className="crop-tag">Sweet Potato</li>
            <li className="crop-tag">Amaranth Greens</li>
            <li className="crop-tag">Marigolds (Companion)</li>
            <li className="crop-tag">Fennel</li>
            <li className="crop-tag">Organic Compost</li>
          </ul>
        </div>
      </section>

      {/* ─── VISION 2030 ────────────────────────────────── */}
      <section id="impact" className="vision-section on-dark">
        <div className="container">
          <div className="reveal">
            <p className="vision-kicker">Our Vision 2030</p>
            <h2 className="vision-title">Scale.</h2>
          </div>
          <div className="stats-grid">
            <div className="stat-item reveal" style={{'--i': 0}}>
              <span className="stat-num" ref={count1}>12,000+</span>
              <span className="stat-desc">Trained Beneficiaries</span>
            </div>
            <div className="stat-item reveal" style={{'--i': 1}}>
              <span className="stat-num" ref={count2}>1,000+</span>
              <span className="stat-desc">Kitchen Gardens Installed</span>
            </div>
            <div className="stat-item reveal" style={{'--i': 2}}>
              <span className="stat-num" ref={count3}>150</span>
              <span className="stat-desc">Institutional Partnerships</span>
            </div>
          </div>
          <p className="vision-subtext reveal">
            By 2030, GKG aims to be Rwanda's <em>National Hub for Urban Agricultural Excellence</em> — scaling from Musanze into every major city, partnering with NGOs, government, and private investors to permanently transform the nation's food landscape.
          </p>
        </div>
      </section>

      {/* ─── GALLERY ────────────────────────────────────── */}
      <section id="gallery" className="section">
        <div className="container">
          <div className="section-head reveal">
            <div>
              <span className="kicker">Journal &amp; Work</span>
              <h2 className="display-2">Impact in Action.</h2>
            </div>
            <p className="lede">A visual diary of our daily operations, training sessions, and the communities we empower across Rwanda.</p>
          </div>

          <div className="masonry gallery-grid">
            <div className="masonry-item reveal-media"><Img src="/garden-construction.jpg" sizes="(max-width: 900px) 100vw, 820px" alt="Kitchen garden construction by GKG Rwanda" loading="lazy" decoding="async" /></div>
            <div className="masonry-item reveal-media"><Img src="/gallery-1.jpg" sizes="(max-width: 900px) 50vw, 400px" alt="GKG community work in Musanze, Rwanda" loading="lazy" decoding="async" /></div>
            <div className="masonry-item reveal-media"><Img src="/gallery-10.jpg" sizes="(max-width: 900px) 50vw, 400px" alt="Community members preparing farmland together with GKG Rwanda" loading="lazy" decoding="async" /></div>
            <div className="masonry-item reveal-media"><Img src="/gallery-3.jpg" sizes="(max-width: 900px) 50vw, 400px" alt="Kitchen garden installed by GKG Rwanda" loading="lazy" decoding="async" /></div>
            <div className="masonry-item reveal-media"><Img src="/gallery-4.jpg" sizes="(max-width: 900px) 50vw, 400px" alt="Organic vegetable harvest from a GKG garden" loading="lazy" decoding="async" /></div>
            <div className="masonry-item reveal-media"><Img src="/gallery-5.jpg" sizes="(max-width: 900px) 50vw, 400px" alt="Women farmers trained by GKG Rwanda" loading="lazy" decoding="async" /></div>
            <div className="masonry-item reveal-media"><Img src="/gallery-6.jpg" sizes="(max-width: 900px) 50vw, 400px" alt="Organic vegetable seedlings from the GKG nursery" loading="lazy" decoding="async" /></div>
            <div className="masonry-item reveal-media"><Img src="/gallery-12.jpg" sizes="(max-width: 900px) 50vw, 400px" alt="Farmer tending crops in a GKG-supported field" loading="lazy" decoding="async" /></div>
            <div className="masonry-item reveal-media"><Img src="/gallery-8.jpg" sizes="(max-width: 900px) 50vw, 400px" alt="Community impact of GKG programs in Rwanda" loading="lazy" decoding="async" /></div>
          </div>
        </div>
      </section>
    </>
  );
}
