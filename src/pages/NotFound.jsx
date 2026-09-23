import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="page-header">
      <div className="container">
        <span className="uppercase text-accent">404</span>
        <h1 className="serif page-title">Page not found</h1>
        <p className="editorial-body">The page you were looking for doesn't exist.</p>
        <Link to="/" className="btn">Back to home</Link>
      </div>
    </div>
  );
}
