import React, { useEffect } from 'react';

export default function Safeguarding() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
      });
    }, { threshold: 0.08 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="page-header">
        <div className="container">
          <span className="uppercase text-accent reveal">Measured Progress</span>
          <h1 className="serif page-title reveal" style={{fontSize:'clamp(3rem, 5vw, 5rem)'}}>Our<br/>Impact</h1>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="editorial-split reverse">
            <div className="editorial-text reveal">
              <span className="uppercase editorial-tag">Across Rwanda</span>
              <h2 className="editorial-title">Growing resilient communities.</h2>
              <p className="editorial-body">
                Golden Kitchen Garden Rwanda strengthens livelihoods, food security, and climate resilience through practical agriculture programs, modern kitchen gardens, community organizations, and school-based learning.
              </p>
            </div>
            <div className="editorial-image-wrapper reveal mask-organic">
              <img src="/7.jpg" alt="Golden Kitchen Garden Rwanda impact" className="editorial-image" />
            </div>
          </div>
        </div>
      </section>

      <section className="section section-bg">
        <div className="container">
          <div className="bento-grid impact-grid reveal">
            <div className="bento-item large impact-card">
              <div className="bento-number">01</div>
              <div>
                <h3 className="serif bento-title">Women, Youth and Persons with Disabilities</h3>
                <p className="impact-number">3,300+</p>
                <p className="bento-text">Empowered through Regenerative &amp; Climate-Smart Agriculture</p>
              </div>
            </div>
            <div className="bento-item impact-card">
              <div className="bento-number">02</div>
              <div>
                <h3 className="serif bento-title">Kitchen Gardens</h3>
                <p className="impact-number">400+</p>
                <p className="bento-text">Modern Kitchen Gardens Installed Across Rwanda</p>
              </div>
            </div>
            <div className="bento-item impact-card">
              <div className="bento-number">03</div>
              <div>
                <h3 className="serif bento-title">Community Organizations</h3>
                <p className="impact-number">50+ VSLAs<br/>10 Cooperatives<br/>11+ Companies</p>
                <p className="bento-text">Supported and served</p>
              </div>
            </div>
            <div className="bento-item bento-wide impact-card">
              <div className="bento-number">04</div>
              <div>
                <h3 className="serif bento-title">School Programs</h3>
                <p className="impact-number">30+</p>
                <p className="bento-text">Primary and Secondary School Agriculture Clubs Established</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
