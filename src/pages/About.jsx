import React from 'react';
import { Link } from 'react-router-dom';

const objectives = [
  ['Strengthen nutrition and food security', 'Focusing on vulnerable populations through sustainable means.'],
  ['Expand climate-smart kitchen gardens', 'Deploying models in both households and institutions.'],
  ['Promote sustainable agricultural technologies', 'Leveraging innovation for resilient food systems.'],
  ['Increase income generation opportunities', 'Focusing specifically on empowering women, youth, and persons with disabilities.'],
  ['Develop strong market linkages', 'Enhancing value chains for our beneficiaries.'],
  ['Enhance institutional capacity', 'Ensuring the sustainability and growth of GKG operations.'],
  ['Scale operations and Job Creation', 'Aiming to create up to 12,000 jobs by 2030.'],
];

export default function About() {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <span className="kicker reveal">Corporate Overview</span>
          <h1 className="page-title reveal">About Us</h1>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="editorial-split">
            <div className="editorial-text reveal">
              <span className="kicker">Who we are</span>
              <h2 className="editorial-title display-3">Bridging the Gap Between Rapid Urbanization &amp; Food Security.</h2>
              <p className="body-text">
                Golden Kitchen Garden Rwanda Ltd (GKG) is a registered social enterprise established to promote climate-smart agriculture, food security, nutrition improvement, environmental sustainability, and economic empowerment in Rwanda.
              </p>
              <p className="body-text">
                Founded in 2020 by Jean de Dieu TWAGIRIMANA with the vision of transforming underutilized spaces into productive and sustainable food systems that improve livelihoods and resilience among communities. We operate through innovative extension on climate-smart agricultural approaches including kitchen gardens, school gardens, organic farming, circular economy solutions, digital agriculture, and value chain development.
              </p>
              <div className="about-chips">
                <span className="chip">RDB Code: 112368548</span>
                <span className="chip">HQ: Nkotsi, Musanze</span>
              </div>
            </div>
            <div className="editorial-image-wrapper mask-organic reveal-media">
              <img src="/empowering-women.jpg" alt="Women farmers empowered through GKG climate-smart agriculture in Rwanda" className="editorial-image" loading="lazy" decoding="async" />
            </div>
          </div>
        </div>
      </section>

      <section className="section section-bg">
        <div className="container">
          <div className="foundation-simple">
            <div className="foundation-statement reveal" style={{'--i': 0}}>
              <h3 className="foundation-title">Our Vision</h3>
              <p>A climate-resilient Rwanda free from hunger where every community has access to sustainable and nutritious food systems.</p>
            </div>
            <div className="foundation-statement reveal" style={{'--i': 1}}>
              <h3 className="foundation-title">Our Mission</h3>
              <p>To improve livelihoods through regenerative climate-smart agriculture, nutrition systems, environmental sustainability, and inclusive value chains driven by innovative farming systems.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head single reveal">
            <div>
              <span className="kicker">Goals &amp; Structure</span>
              <h2 className="display-2">Strategic Objectives</h2>
            </div>
          </div>
          <ol className="services-list objectives reveal">
            {objectives.map(([title, text], i) => (
              <li className="service-item" key={title}>
                <span className="service-num">{i + 1}</span>
                <div>
                  <strong>{title}</strong>
                  <p>{text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="vision-section leadership on-dark">
        <div className="container">
          <h2 className="vision-title reveal">Leadership.</h2>
          <p className="vision-subtext reveal">
            GKG adopts a functional organizational structure that promotes efficiency and accountability. Governed by a <strong>Board of Directors</strong> providing strategic oversight, daily operations are led by the <strong>Managing Director</strong>, supported by dedicated department heads across Finance, Programs, MEAL, and Procurement.
          </p>
          <div className="reveal" style={{marginTop: '2.5rem'}}>
            <Link to="/products" className="btn btn-harvest">View Our Products</Link>
          </div>
        </div>
      </section>
    </>
  );
}
