import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="simple-bg-screen big-wrap inner_page">
      <div className="container">
        <div className="error-page">
          <h2>4<span>0</span>4</h2>
          <p>Oops...looks like we got lost</p>
          <Link to="/" className="btn btn-success small-btn">Let's Go Home</Link>
        </div>
      </div>
    </section>
  );
}
