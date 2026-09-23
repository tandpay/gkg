import React from 'react';

const products = [
  ['Kitchen Garden Design and Installation', '/6.1.jpg'],
  ['Agroforestry Nursery', '/6.2.jpg'],
  ['Landscaping', '/6.3.jpg'],
  ['French Beans Cultivation', '/6.4.jpg'],
  ['Strawberries Cultivation', '/6.5.jpg'],
  ['Vegetables and Spices Nursery Seedbeds', '/6.6.jpg'],
  ['Upcycling', '/6.7.jpg'],
  ['Maize Production', '/6.8.jpg'],
  ['Permaculture Design', '/6.9.jpg'],
  ['Agriculture Consultation', '/6.10.jpg'],
  ['Agriculture Capacity Building', '/6.11.jpg'],
];

export default function Governance() {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <span className="kicker reveal">What We Offer</span>
          <h1 className="page-title reveal">Our<br/>Products</h1>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="section-head single reveal">
            <div>
              <span className="kicker">Products &amp; Services</span>
              <h2 className="display-2">Cultivated for Homes, Farms &amp; Institutions</h2>
            </div>
          </div>

          <ul className="product-grid">
            {products.map(([title, image], index) => (
              <li className="product-card media-zoom reveal" style={{'--i': index % 3}} key={title}>
                <div className="media">
                  <img src={image} alt={`${title} by Golden Kitchen Garden Rwanda`} loading={index < 3 ? 'eager' : 'lazy'} decoding="async" />
                </div>
                <h3>{title}</h3>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
