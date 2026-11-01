import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import asanzoLogo from "../assets/asanzo-logo.webp";

const navigationLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Rooms", to: "/rooms" },
  { label: "Contact", to: "/contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function closeMenuOnHistoryNavigation() {
      setMenuOpen(false);
    }

    window.addEventListener("popstate", closeMenuOnHistoryNavigation);
    return () =>
      window.removeEventListener("popstate", closeMenuOnHistoryNavigation);
  }, []);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header
      className={`site-header${menuOpen ? " menu-is-open" : ""}`}
    >
      <div className="header-inner">
        <nav
          className={`primary-navigation${menuOpen ? " is-open" : ""}`}
          id="primary-navigation"
          aria-label="Main navigation"
        >
          {navigationLinks.map(({ label, to }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              className={({ isActive }) =>
                `navigation-link${isActive ? " is-active" : ""}`
              }
              onClick={closeMenu}
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <Link
          className="brand-link"
          to="/"
          aria-label="Asanzo Beach Hotel home"
          onClick={closeMenu}
        >
          <img
            className="brand-logo"
            src={asanzoLogo}
            alt="Asanzo Beach Hotel"
          />
        </Link>

        <button
          className={`menu-toggle${menuOpen ? " is-open" : ""}`}
          type="button"
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((isOpen) => !isOpen)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}

export default Navbar;
