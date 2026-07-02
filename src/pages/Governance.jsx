import React, { useEffect } from 'react';

const products = [
  ['01', 'Kitchen Garden Design and Installation', '/6.1.jpg'],
  ['02', 'Agroforestry Nursery', '/6.2.jpg'],
  ['03', 'Landscaping', '/6.3.jpg'],
  ['04', 'French Beans Cultivation', '/6.4.jpg'],
  ['05', 'Strawberries Cultivation', '/6.5.jpg'],
  ['06', 'Vegetables and Spices Nursery Seedbeds', '/6.6.jpg'],
  ['07', 'Upcycling', '/6.7.jpg'],
  ['08', 'Maize Production', '/6.8.jpg'],
  ['09', 'Permaculture Design', '/6.9.jpg'],
  ['10', 'Agriculture Consultation', '/6.10.jpg'],
  ['11', 'Agriculture Capacity Building', '/6.11.jpg'],
];

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
          <span className="uppercase text-accent reveal">What We Offer</span>
          <h1 className="serif page-title reveal" style={{fontSize:'clamp(3rem, 5vw, 5rem)'}}>Our<br/>Products</h1>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="reveal" style={{marginBottom:'4rem'}}>
            <span className="uppercase text-accent">Products &amp; Services</span>
            <h2 className="serif" style={{fontSize: '3.5rem'}}>Cultivated for Homes, Farms &amp; Institutions</h2>
          </div>

          <div className="bento-grid product-grid reveal">
            {products.map(([number, title, image], index) => (
              <div
                className={`bento-item bento-image product-card ${index === 0 || index === 2 ? 'large' : ''}`}
                style={{backgroundImage: `url(${image})`}}
                key={title}
              >
                <div className="bento-img-overlay"></div>
                <div className="bento-number bento-number-light">{number}</div>
                <div className="bento-bottom-content">
                  <h3 className="serif bento-title bento-title-light">{title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
