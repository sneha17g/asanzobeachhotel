import { NavLink } from "react-router-dom";
import asanzoLogo from "../assets/asanzo-logo.webp";
import "./Footer.css";

const currentYear = new Date().getFullYear();

const footerLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Rooms", to: "/rooms" },
  { label: "Contact", to: "/contact" },
];

const roomLinks = [
  { label: "Standard Room", to: "/roomDetails/standard-room" },
  { label: "Deluxe Room", to: "/roomDetails/deluxe-room" },
  { label: "Family Room", to: "/roomDetails/family-room" },
];

function Footer() {
  return (
    <footer className="site-footer footer-layout">
      <div className="container footer-layout-container">
        <div className="footer-topbar">
          <NavLink
            className="footer-logo-link"
            to="/"
            aria-label="Asanzo Beach Hotel home"
          >
            <img
              src={asanzoLogo}
              alt="Asanzo Beach Hotel"
              loading="lazy"
              decoding="async"
            />
          </NavLink>
          <a className="footer-return-link" href="#top">
            <span>Back to top</span>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 19V5m0 0-6 6m6-6 6 6" />
            </svg>
          </a>
        </div>

        <div className="footer-columns">
          <section
            className="footer-brand-column"
            aria-labelledby="footer-brand-title"
          >
            <h3 className="footer-column-title" id="footer-brand-title">
              A slower kind of seaside stay
            </h3>
            <p className="footer-description">
              Settle in, find your pace and enjoy a comfortable coastal stay at
              ASANZO Beach Hotel in Pattaya, Thailand.
            </p>
            <div className="footer-socials" aria-label="Social media">
              <a
                href="https://www.instagram.com/"
                aria-label="Instagram"
                target="_blank"
                rel="noreferrer"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle
                    className="footer-social-dot"
                    cx="17.7"
                    cy="6.7"
                    r="1"
                  />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61595507664388"
                aria-label="Facebook"
                target="_blank"
                rel="noreferrer"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5h1.7V3.9c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3V10H7.4v3h2.7v8z" />
                </svg>
              </a>
            </div>
          </section>

          <section
            className="footer-contact-column"
            aria-labelledby="footer-contact-title"
          >
            <h3 className="footer-column-title" id="footer-contact-title">
              Contact
            </h3>
            <a className="footer-email" href="mailto:info@asanzobeachhotel.com">
              info@asanzobeachhotel.com
            </a>
            <a className="footer-phone" href="tel:+66889804406">
              +66-889804406
            </a>
            <address className="footer-address">
              279/121 Soi Somprasong, Pattaya, Bang Lamung, Chon Buri Province,
              Thailand.
            </address>
          </section>

          <section
            className="footer-link-column"
            aria-labelledby="footer-links-title"
          >
            <h3 className="footer-column-title" id="footer-links-title">
              Quick links
            </h3>
            <nav className="footer-nav" aria-label="Footer navigation">
              {footerLinks.map(({ label, to }) => (
                <NavLink key={to} to={to}>
                  {label}
                </NavLink>
              ))}
            </nav>
          </section>

          <section
            className="footer-room-column"
            aria-labelledby="footer-rooms-title"
          >
            <h3 className="footer-column-title" id="footer-rooms-title">
              Our rooms
            </h3>
            <ul className="footer-room-list">
              {roomLinks.map(({ label, to }) => (
                <li key={to}>
                  <NavLink to={to}>{label}</NavLink>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <div className="footer-legal">
          <span>© {currentYear} Asanzo Beach Hotel</span>
          <span className="footer-legal-note">
            Pattaya, Thailand <span aria-hidden="true">·</span> A slower kind
            of seaside stay
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
