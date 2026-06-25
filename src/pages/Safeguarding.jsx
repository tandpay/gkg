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
          <span className="uppercase text-accent reveal">Protection &amp; Safety</span>
          <h1 className="serif page-title reveal" style={{fontSize:'clamp(3rem, 5vw, 5rem)'}}>Safeguarding &amp;<br/>HSE Policy</h1>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="reveal" style={{maxWidth:'800px', marginBottom:'5rem'}}>
            <h2 className="serif" style={{fontSize:'2.5rem', marginBottom:'1.5rem'}}>Our Commitment to Protection</h2>
            <p className="editorial-body" style={{maxWidth:'100%'}}>
              Golden Kitchen Garden Rwanda Ltd (GKG) is committed to providing a safe, secure, and respectful environment for employees, beneficiaries, partners, and communities. We have established robust policies to prevent harm, protect vulnerable groups, promote workplace safety, safeguard the environment, and manage organizational risks.
            </p>
          </div>

          <div className="bento-grid reveal">
            <div className="bento-item large">
              <div className="bento-number">01</div>
              <div>
                <h3 className="serif bento-title">Child Safeguarding &amp;<br/>Protection</h3>
                <p className="bento-text">
                  GKG adopts a zero-tolerance approach to child abuse and exploitation. All employees must treat children with dignity, ensure safety during all program activities, and immediately report any suspected abuse. We strictly prohibit physical or emotional abuse, child labor, and neglect.
                </p>
              </div>
            </div>
            <div className="bento-item">
              <div className="bento-number">02</div>
              <div>
                <h3 className="serif bento-title">PSEA</h3>
                <p className="bento-text">
                  Protection from Sexual Exploitation and Abuse. We prohibit all forms of sexual exploitation, abuse, and harassment. No employee may use their position of authority for sexual gain.
                </p>
              </div>
            </div>
            <div className="bento-item">
              <div className="bento-number">03</div>
              <div>
                <h3 className="serif bento-title">Inclusion</h3>
                <p className="bento-text">
                  We promote gender equality and the active inclusion of women, youth, and persons with disabilities (PWDs). Discrimination of any kind in employment or program delivery is prohibited.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-bg">
        <div className="container">
          <div className="editorial-split reverse">
            <div className="editorial-text reveal">
              <span className="uppercase editorial-tag">Health, Safety &amp; Environment</span>
              <h2 className="editorial-title">Environmental Protection.</h2>
              <p className="editorial-body">
                As a climate-smart agriculture enterprise, GKG is intrinsically committed to environmental sustainability and conservation. We proactively minimize environmental impacts arising from our operations.
              </p>
              <div className="services-list">
                <div className="service-item">
                  <span className="service-num">—</span>
                  <div>
                    <strong>Sustainable Practices</strong>
                    <p>Organic farming, zero-tillage, water conservation, and large-scale composting.</p>
                  </div>
                </div>
                <div className="service-item">
                  <span className="service-num">—</span>
                  <div>
                    <strong>Waste Management</strong>
                    <p>Rigorous reduction, segregation, and safe recycling of all materials.</p>
                  </div>
                </div>
                <div className="service-item">
                  <span className="service-num">—</span>
                  <div>
                    <strong>Occupational Safety</strong>
                    <p>Mandatory Personal Protective Equipment (PPE) and regular safety training for all staff.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="editorial-image-wrapper reveal mask-organic">
              <img src="/seedlings.jpg" alt="Organic Seedlings" className="editorial-image" />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="reveal" style={{textAlign:'center', maxWidth:'700px', margin:'0 auto'}}>
            <span className="uppercase text-accent">Risk Management</span>
            <h2 className="serif" style={{fontSize:'3rem', margin:'1rem 0'}}>Proactive Risk Mitigation</h2>
            <p className="editorial-body" style={{maxWidth:'100%'}}>
              GKG maintains a comprehensive risk management framework to identify, assess, and mitigate threats. A formal risk register monitors financial, operational, environmental, reputational, and safeguarding risks continuously, ensuring our operations remain resilient and uninterrupted.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
