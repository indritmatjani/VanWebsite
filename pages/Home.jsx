import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <section className="home-container">
        <div className="home-hero-content">
          <span className="eyebrow">Adventure rental</span>
          <h1>Your next road trip starts with the perfect van.</h1>
          <p>
            Discover curated vans, trusted hosts, and unforgettable travel
            moments. Choose your route, pack your gear, and go explore.
          </p>
          <div className="home-hero-actions">
            <Link className="link-button primary" to="vans">
              Browse vans
            </Link>
            <Link className="link-button" to="about">
              Learn more
            </Link>
          </div>
        </div>
      </section>

      <section className="home-highlights">
        <div className="card">
          <h2>Ready for any journey</h2>
          <p>
            Our vans are fully equipped for weekend getaways, remote work trips,
            and coastal escapes.
          </p>
        </div>
        <div className="card">
          <h2>Transparent pricing</h2>
          <p>
            Simple daily rates with no hidden fees so you can book confidently.
          </p>
        </div>
        <div className="card">
          <h2>Host-ready listings</h2>
          <p>
            Each van is reviewed and verified for comfort, cleanliness, and
            convenience.
          </p>
        </div>
      </section>
    </div>
  );
}
