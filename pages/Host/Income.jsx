import React from "react";
import { Link } from "react-router-dom";

const incomeReport = [
  { month: "January", income: 4200, trend: "+12%" },
  { month: "February", income: 5600, trend: "+8%" },
  { month: "March", income: 4870, trend: "-3%" },
  { month: "April", income: 6520, trend: "+15%" },
];

export default function Income() {
  const totalEarnings = incomeReport.reduce((sum, row) => sum + row.income, 0);

  return (
    <section className="host-income-page">
      <div className="page-heading">
        <div>
          <p className="eyebrow">Revenue report</p>
          <h1>Income summary</h1>
          <p className="page-subtitle">
            Review your recent earnings and payout history. This page helps you
            keep track of all host revenue for the season.
          </p>
        </div>
        <Link className="link-button primary" to="/host/vans">
          Update listing
        </Link>
      </div>

      <div className="card">
        <div className="income-grid">
          <article className="income-card">
            <p>Last 30 days</p>
            <h3>${(totalEarnings / incomeReport.length).toLocaleString()}</h3>
          </article>
          <article className="income-card">
            <p>Total earnings</p>
            <h3>${totalEarnings.toLocaleString()}</h3>
          </article>
          <article className="income-card">
            <p>Next payout</p>
            <h3>$2,120</h3>
          </article>
          <article className="income-card">
            <p>Average daily rate</p>
            <h3>$89</h3>
          </article>
        </div>

        <div className="income-table">
          {incomeReport.map((row) => (
            <div key={row.month} className="income-row">
              <span>{row.month}</span>
              <strong>${row.income.toLocaleString()}</strong>
              <span>{row.trend}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
