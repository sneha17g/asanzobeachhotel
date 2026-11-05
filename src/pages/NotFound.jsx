import { useEffect } from "react";
import { Link } from "react-router-dom";

function NotFound() {
  useEffect(() => {
    document.title = "Page Not Found | Asanzo Beach Hotel";
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
    <section className="container" aria-labelledby="not-found-title">
      <h1 id="not-found-title">Page not found</h1>
      <p>The page you requested does not exist.</p>
      <p>
        <Link to="/">Return to the homepage</Link>
        {" · "}
        <Link to="/rooms">Explore our rooms</Link>
        {" · "}
        <Link to="/contact">Contact us</Link>
      </p>
    </section>
  );
}

export default NotFound;
