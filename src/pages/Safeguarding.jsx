import React from 'react';
import Img from '../components/Img';

export default function Safeguarding() {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <span className="kicker reveal">Measured Progress</span>
          <h1 className="page-title reveal">Our<br/>Impact</h1>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="editorial-split reverse">
            <div className="editorial-text reveal">
              <span className="kicker">Across Rwanda</span>
              <h2 className="editorial-title">Growing resilient communities.</h2>
              <p className="body-text">
                Golden Kitchen Garden Rwanda strengthens livelihoods, food security, and climate resilience through practical agriculture programs, modern kitchen gardens, community organizations, and school-based learning.
              </p>
            </div>
            <div className="editorial-image-wrapper mask-organic reveal-media">
              <Img src="/7.jpg" sizes="(max-width: 900px) 100vw, 600px" alt="Golden Kitchen Garden Rwanda community impact" className="editorial-image" loading="lazy" decoding="async" />
            </div>
          </div>
        </div>
      </section>

      <section className="section section-bg">
        <div className="container">
          <div className="impact-grid">
            <div className="impact-card reveal" style={{'--i': 0}}>
              <h3>Women, Youth and Persons with Disabilities</h3>
              <p className="impact-number">3,300+</p>
              <p className="bento-text">Empowered through Regenerative &amp; Climate-Smart Agriculture</p>
            </div>
            <div className="impact-card reveal" style={{'--i': 1}}>
              <h3>Kitchen Gardens</h3>
              <p className="impact-number">400+</p>
              <p className="bento-text">Modern Kitchen Gardens Installed Across Rwanda</p>
            </div>
            <div className="impact-card reveal" style={{'--i': 0}}>
              <h3>Community Organizations</h3>
              <p className="impact-number list">50+ VSLAs<br/>10 Cooperatives<br/>11+ Companies</p>
              <p className="bento-text">Supported and served</p>
            </div>
            <div className="impact-card reveal" style={{'--i': 1}}>
              <h3>School Programs</h3>
              <p className="impact-number">30+</p>
              <p className="bento-text">Primary and Secondary School Agriculture Clubs Established</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
