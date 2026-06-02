import React from "react";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const [vans, setVans] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    fetch("/api/host/vans")
      .then((res) => res.json())
      .then((data) => {
        setVans(data.vans);
        setLoading(false);
      });
  }, []);

  const totalVans = vans.length;
  const averageRating = 4.9;
  const monthlyRevenue = vans.reduce((total, van) => total + van.price * 18, 0);
  const projectedAnnual = Math.round((monthlyRevenue * 10) / 8);

  return (
    <section className="host-dashboard-page">
      <div className="page-heading">
        <div>
          <p className="eyebrow">Host overview</p>
          <h1>Welcome back, host</h1>
          <p className="page-subtitle">
            Track your vans, revenue and guest reviews from one place. Your
            listings are live and ready to welcome new adventures.
          </p>
        </div>
        <Link className="link-button primary" to="/host/vans">
          Manage listings
        </Link>
      </div>

      <div className="stats-grid">
        <article className="card stat-card">
          <p>Total listed vans</p>
          <h2>{totalVans}</h2>
        </article>
        <article className="card stat-card">
          <p>Estimated monthly revenue</p>
          <h2>${monthlyRevenue.toLocaleString()}</h2>
        </article>
        <article className="card stat-card">
          <p>Average review score</p>
          <h2>{averageRating.toFixed(1)} / 5</h2>
        </article>
        <article className="card stat-card">
          <p>Projected annual income</p>
          <h2>${projectedAnnual.toLocaleString()}</h2>
        </article>
      </div>

      <div className="section-group">
        <div className="card host-dashboard-card">
          <h2>Recent performance</h2>
          <p className="page-subtitle">
            Your host dashboard gives you a quick snapshot of guest demand,
            occupancy and new messages.
          </p>
          <ul className="detail-list">
            <li>12 confirmed trips this month</li>
            <li>4 vans at 98% occupancy</li>
            <li>2 new guest messages waiting</li>
          </ul>
        </div>

        <div className="card host-vans-summary">
          <h2>Your vans</h2>
          {loading ? (
            <p>Loading host vans...</p>
          ) : vans.length > 0 ? (
            <div className="host-vans-list">
              {vans.map((van) => (
                <article key={van.id} className="host-van-single">
                  <img src={van.imageUrl} alt={van.name} />
                  <div className="host-van-info">
                    <h3>{van.name}</h3>
                    <p>
                      ${van.price}/day · {van.type}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <p>No vans found for this host yet.</p>
          )}
        </div>
      </div>
    </section>
  );
}
