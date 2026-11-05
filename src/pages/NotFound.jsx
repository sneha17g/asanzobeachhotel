import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
  useEffect(() => {
    document.title = "Page Not Found | ASANZO Beach Hotel";
    let robots = document.head.querySelector('meta[name="robots"]');
    if (!robots) {
      robots = document.createElement("meta");
      robots.name = "robots";
      document.head.append(robots);
    }
    robots.content = "noindex, follow";
    document.head.querySelector('link[rel="canonical"]')?.remove();
    document.head.querySelector('script[data-page-schema="true"]')?.remove();
  }, []);

  return (
    <section className="not-found-page" aria-labelledby="not-found-title">
      <div className="not-found-content">
        <p className="not-found-eyebrow">ASANZO Beach Hotel · Pattaya</p>
        <p className="not-found-code" aria-hidden="true">404</p>
        <h1 id="not-found-title">This page wandered off.</h1>
        <p className="not-found-description">
          We can’t find the page you’re looking for. Head back to the hotel or
          browse our rooms to continue planning your stay.
        </p>
        <div className="not-found-actions">
          <Link className="not-found-home-link" to="/">
            Back to home <span aria-hidden="true">↗</span>
          </Link>
          <Link className="not-found-rooms-link" to="/rooms">
            Explore our rooms
          </Link>
        </div>
      </div>
      <div className="not-found-side-note" aria-hidden="true">
        A slower kind of seaside stay
      </div>
    </section>
  );
}

export default NotFound;
