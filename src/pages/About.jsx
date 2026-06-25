import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function About() {
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
          <span className="uppercase text-accent reveal">Corporate Overview</span>
          <h1 className="serif page-title reveal">About Us</h1>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="editorial-split">
            <div className="editorial-text reveal">
              <span className="uppercase editorial-tag">Who we are</span>
              <h2 className="editorial-title">Bridging the Gap Between Rapid Urbanization &amp; Food Security.</h2>
              <p className="editorial-body">
                Golden Kitchen Garden Rwanda Ltd (GKG) is a registered social enterprise established to promote climate-smart agriculture, food security, nutrition improvement, environmental sustainability, and economic empowerment in Rwanda.
              </p>
              <p className="editorial-body">
                Founded in 2020 by Jean de Dieu TWAGIRIMANA with the vision of transforming underutilized spaces into productive and sustainable food systems that improve livelihoods and resilience among communities. We operate through innovative extension on climate-smart agricultural approaches including kitchen gardens, school gardens, organic farming, circular economy solutions, digital agriculture, and value chain development.
              </p>
              <div className="about-chips">
                <span className="chip">RDB Code: 112368548</span>
                <span className="chip">HQ: Nkotsi, Musanze</span>
              </div>
            </div>
            <div className="editorial-image-wrapper reveal mask-organic">
              <img src="/empowering-women.jpg" alt="Empowering Women in Agriculture" className="editorial-image" />
            </div>
          </div>
        </div>
      </section>

      <section className="section section-bg">
        <div className="container">
          <div className="reveal" style={{textAlign:'center', marginBottom:'4rem'}}>
            <h2 className="serif" style={{fontSize: '3.5rem'}}>Our Foundation</h2>
          </div>
          
          <div className="bento-grid reveal">
            <div className="bento-item">
              <div className="bento-number">01</div>
              <div>
                <h3 className="serif bento-title">Our Vision</h3>
                <p className="bento-text">To build a hunger-free and climate-resilient Rwanda where every household, school, and community has access to sustainable and nutritious food systems.</p>
              </div>
            </div>
            <div className="bento-item large">
              <div className="bento-number">02</div>
              <div>
                <h3 className="serif bento-title">Our Mission</h3>
                <p className="bento-text" style={{fontSize:'1.1rem', maxWidth:'500px'}}>To promote climate-smart agriculture, nutrition security, environmental sustainability, and economic empowerment through innovative kitchen gardens, training, and inclusive value chains.</p>
              </div>
            </div>
            <div className="bento-item bento-wide">
              <div className="bento-number">03</div>
              <div>
                <h3 className="serif bento-title">Core Values</h3>
                <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'1rem', marginTop:'1.5rem'}}>
                  <p className="bento-text"><strong>Integrity:</strong> We conduct all activities honestly, transparently, and ethically.</p>
                  <p className="bento-text"><strong>Innovation:</strong> We embrace modern technologies and innovative solutions.</p>
                  <p className="bento-text"><strong>Sustainability:</strong> All interventions promote environmental conservation.</p>
                  <p className="bento-text"><strong>Inclusiveness:</strong> We promote participation of women, youth, and PWDs.</p>
                  <p className="bento-text"><strong>Accountability:</strong> Staff are accountable for resources and results.</p>
                  <p className="bento-text"><strong>Collaboration:</strong> We value partnerships with communities and government.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="reveal" style={{marginBottom:'3rem'}}>
            <span className="uppercase text-accent">Goals &amp; Structure</span>
            <h2 className="serif" style={{fontSize: '3rem'}}>Strategic Objectives</h2>
          </div>
          <div className="services-list reveal">
            <div className="service-item">
              <span className="service-num">1</span>
              <div>
                <strong>Strengthen nutrition and food security</strong>
                <p>Focusing on vulnerable populations through sustainable means.</p>
              </div>
            </div>
            <div className="service-item">
              <span className="service-num">2</span>
              <div>
                <strong>Expand climate-smart kitchen gardens</strong>
                <p>Deploying models in both households and institutions.</p>
              </div>
            </div>
            <div className="service-item">
              <span className="service-num">3</span>
              <div>
                <strong>Promote sustainable agricultural technologies</strong>
                <p>Leveraging innovation for resilient food systems.</p>
              </div>
            </div>
            <div className="service-item">
              <span className="service-num">4</span>
              <div>
                <strong>Increase income generation opportunities</strong>
                <p>Focusing specifically on empowering women, youth, and persons with disabilities.</p>
              </div>
            </div>
            <div className="service-item">
              <span className="service-num">5</span>
              <div>
                <strong>Develop strong market linkages</strong>
                <p>Enhancing value chains for our beneficiaries.</p>
              </div>
            </div>
            <div className="service-item">
              <span className="service-num">6</span>
              <div>
                <strong>Enhance institutional capacity</strong>
                <p>Ensuring the sustainability and growth of GKG operations.</p>
              </div>
            </div>
            <div className="service-item">
              <span className="service-num">7</span>
              <div>
                <strong>Scale operations and Job Creation</strong>
                <p>Aiming to create up to 12,000 jobs by 2030.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="vision-section reveal">
        <div className="container">
          <h2 className="vision-title serif" style={{fontSize:'6vw'}}>Leadership.</h2>
          <p className="vision-subtext" style={{margin:'0 auto', textAlign:'center'}}>
            GKG adopts a functional organizational structure that promotes efficiency and accountability. Governed by a <strong>Board of Directors</strong> providing strategic oversight, daily operations are led by the <strong>Managing Director</strong>, supported by dedicated department heads across Finance, Programs, MEAL, and Procurement.
          </p>
          <div style={{marginTop:'3rem', textAlign:'center'}}>
            <Link to="/governance" className="btn btn-accent-outline">View Governance Framework</Link>
          </div>
        </div>
      </section>
    </>
  );
}
