import React from "react";
import { Link, useParams, useLocation } from "react-router-dom";

export default function VanDetail() {
  const params = useParams();
  const location = useLocation();

  const [van, setVan] = React.useState(null);

  React.useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans));
  }, [params.id]);

  const search = location.state?.search || "";
  const type = location.state?.type || "all";

  return (
    <div className="van-detail-container">
      <Link to={`..${search}`} relative="path" className="back-button">
        &larr; <span>Back to {type} vans</span>
      </Link>

      {van ? (
        <div className="van-detail">
          <div className="van-detail-top">
            <img src={van.imageUrl} alt={van.name} />
            <div>
              <i className={`van-type ${van.type} selected`}>{van.type}</i>
              <div className="van-detail-summary">
                <h2>{van.name}</h2>
                <p className="van-price">
                  <span>${van.price}</span>/day
                </p>
              </div>
              <p className="page-subtitle">{van.description}</p>
            </div>
          </div>
          <div className="van-detail-features">
            <div className="feature-card">
              <h4>Best for</h4>
              <p>Weekend escapes</p>
            </div>
            <div className="feature-card">
              <h4>Seats</h4>
              <p>4 guests</p>
            </div>
            <div className="feature-card">
              <h4>Range</h4>
              <p>400 km</p>
            </div>
          </div>
          <button className="link-button primary">Rent this van</button>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
}
