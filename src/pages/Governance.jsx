import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Governance() {
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
          <span className="uppercase text-accent reveal">Transparency &amp; Trust</span>
          <h1 className="serif page-title reveal" style={{fontSize:'clamp(3rem, 5vw, 5rem)'}}>Governance &amp;<br/>Accountability</h1>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="editorial-split">
            <div className="editorial-text reveal">
              <span className="uppercase editorial-tag">Corporate Governance</span>
              <h2 className="editorial-title">Framework of Leadership.</h2>
              <p className="editorial-body">
                Our governance framework ensures effective leadership, oversight, and accountability guided by the principles of transparency, equity, and the rule of law. 
              </p>
              <p className="editorial-body">
                The <strong>Board of Directors</strong> provides strategic direction, approves budgets, monitors organizational performance, and ensures strict legal compliance. Daily operations are executed by the Managing Director and the Senior Management Team, strictly adhering to the Delegation of Authority Matrix.
              </p>
            </div>
            <div className="editorial-text reveal" style={{background:'var(--color-surface)', padding:'3rem', borderRadius:'4px'}}>
              <h3 className="serif" style={{fontSize:'2rem', marginBottom:'1.5rem'}}>Code of Ethics</h3>
              <p className="bento-text" style={{opacity:1, transform:'none', marginBottom:'1.5rem'}}>
                All employees and board members uphold the highest ethical standards. We adopt a <strong>zero-tolerance approach to corruption, fraud, and bribery</strong>.
              </p>
              <ul style={{listStyle:'none', color:'var(--color-text-dim)', fontSize:'0.95rem'}}>
                <li style={{marginBottom:'0.5rem'}}>✓ Strict Conflict of Interest Policy</li>
                <li style={{marginBottom:'0.5rem'}}>✓ Whistleblower protection guarantees</li>
                <li style={{marginBottom:'0.5rem'}}>✓ Mandatory financial disclosures</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-bg">
        <div className="container">
          <div className="reveal" style={{marginBottom:'4rem'}}>
            <span className="uppercase text-accent">Financial Integrity</span>
            <h2 className="serif" style={{fontSize: '3.5rem'}}>Financial &amp; Audit Controls</h2>
          </div>
          
          <div className="bento-grid reveal">
            <div className="bento-item">
              <div className="bento-number">01</div>
              <div>
                <h3 className="serif bento-title">Accountability</h3>
                <p className="bento-text">All expenditures require authorization. Strict segregation of duties is maintained between procurement, accounting, and cash management to safeguard donor funds.</p>
              </div>
            </div>
            <div className="bento-item">
              <div className="bento-number">02</div>
              <div>
                <h3 className="serif bento-title">Value for Money</h3>
                <p className="bento-text">Procurement follows competitive tendering. We ensure efficiency and economy, purchasing goods at the best price without compromising quality.</p>
              </div>
            </div>
            <div className="bento-item">
              <div className="bento-number">03</div>
              <div>
                <h3 className="serif bento-title">Rigorous Audits</h3>
                <p className="bento-text">Internal audits are conducted periodically. An independent external auditor conducts annual audits, with findings reported directly to the Board of Directors.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="editorial-split reverse">
            <div className="editorial-text reveal">
              <span className="uppercase editorial-tag">Evidence-Based</span>
              <h2 className="editorial-title">MEAL Framework.</h2>
              <p className="editorial-body">
                Our Monitoring, Evaluation, Accountability, and Learning (MEAL) system ensures that we measure outcomes accurately and learn from our interventions to improve decision-making.
              </p>
              <div className="services-list">
                <div className="service-item">
                  <span className="service-num">—</span>
                  <div>
                    <strong>SMART Indicators</strong>
                    <p>Meticulous tracking of inputs, outputs, outcomes, and impact.</p>
                  </div>
                </div>
                <div className="service-item">
                  <span className="service-num">—</span>
                  <div>
                    <strong>Data Quality Assurance</strong>
                    <p>Accuracy, reliability, and confidentiality through rigorous field verifications.</p>
                  </div>
                </div>
                <div className="service-item">
                  <span className="service-num">—</span>
                  <div>
                    <strong>Beneficiary Accountability</strong>
                    <p>Accessible feedback and complaint mechanisms for all community members.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="editorial-image-wrapper reveal mask-arch">
              <img src="/gallery-2.jpg" alt="Data collection in the field" className="editorial-image" />
            </div>
          </div>
        </div>
      </section>

      <section className="vision-section reveal" style={{padding:'6rem 0'}}>
        <div className="container" style={{textAlign:'center'}}>
          <h2 className="serif" style={{fontSize:'3rem', marginBottom:'2rem'}}>Commitment to Safe Programs</h2>
          <p className="vision-subtext" style={{margin:'0 auto', marginTop:0}}>
            GKG is committed to providing a safe, secure, and respectful environment. We strictly enforce safeguarding policies for vulnerable groups and the environment.
          </p>
          <div style={{marginTop:'3rem'}}>
            <Link to="/safeguarding" className="btn btn-filled">Read Safeguarding Policies</Link>
          </div>
        </div>
      </section>
    </>
  );
}
