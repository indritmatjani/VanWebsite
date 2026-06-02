import React from "react";

const reviewList = [
  {
    guest: "Mia",
    rating: 5,
    summary: "Exceptional stay",
    comment:
      "The van was spotless, easy to drive and it felt like a cozy home on wheels. The host responded quickly to every question.",
  },
  {
    guest: "Jon",
    rating: 5,
    summary: "Perfect weekend trip",
    comment:
      "Everything went smoothly from pickup to dropoff. The camper had everything we needed for a relaxed beach weekend.",
  },
  {
    guest: "Ava",
    rating: 4,
    summary: "Great value",
    comment:
      "The van was comfy and exactly as described. The only issue was a small navigation glitch, but the trip was amazing overall.",
  },
];

export default function Reviews() {
  const averageScore = (
    reviewList.reduce((total, review) => total + review.rating, 0) /
    reviewList.length
  ).toFixed(1);

  return (
    <section className="host-reviews-page">
      <div className="page-heading">
        <div>
          <p className="eyebrow">Guest feedback</p>
          <h1>Ratings & reviews</h1>
          <p className="page-subtitle">
            See what guests are saying about your vans. Positive reviews help
            build trust and increase bookings.
          </p>
        </div>
        <div>
          <p className="eyebrow">Average score</p>
          <h2>{averageScore} / 5</h2>
        </div>
      </div>

      <div className="review-grid">
        {reviewList.map((review) => (
          <article key={review.guest} className="review-card">
            <div className="review-stars">
              {"★".repeat(review.rating)}
              {"☆".repeat(5 - review.rating)}
            </div>
            <h3>{review.summary}</h3>
            <p>{review.comment}</p>
            <div className="review-meta">
              <span>{review.guest}</span>
              <span>{review.rating}.0</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
