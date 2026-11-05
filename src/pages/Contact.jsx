import "./Contact.css";
import asanzoHotel from "../assets/optimized/hotel-front.jpg";
import pattayaCoast from "../assets/optimized/hero-frame-2.jpg";
import SEO from "../components/SEO.jsx";
import Eyebrow from "../components/Eyebrow.jsx";

function Contact() {
  return (
    <>
      <SEO
        title="Contact ASANZO Beach Hotel in Pattaya | Jomtien Beach"
        description="Contact ASANZO Beach Hotel in Pattaya to ask about room availability, current rates, directions, and planning a stay near Jomtien Beach."
        path="/contact"
        pageType="ContactPage"
      />
      <section
        className="contact-hero"
        aria-labelledby="contact-hero-title"
      >
        <div className="container contact-hero-layout">
          <div className="contact-hero-copy">
            <Eyebrow className="contact-hero-eyebrow">A warm welcome awaits</Eyebrow>
            <h1 id="contact-hero-title">Your home in Thailand</h1>
            <p className="contact-hero-description">
              Make your way to Pattaya and settle in by the coast at ASANZO
              Beach Hotel.
            </p>
            <a className="contact-hero-link" href="#contact-details">
              Plan your visit <span aria-hidden="true">↘</span>
            </a>
          </div>

          <div
            className="contact-hero-journey"
            aria-label="Travel from the coast to your stay in Pattaya"
          >
            <svg
              className="contact-hero-route"
              viewBox="0 0 600 360"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path d="M75 282C180 65 300 328 408 177S520 85 540 72" />
            </svg>
            <span className="contact-hero-route-dot contact-hero-route-dot-start" />
            <span className="contact-hero-route-dot contact-hero-route-dot-end" />

            <figure className="contact-hero-stop contact-hero-stop-coast">
              <img
                src={pattayaCoast}
                alt="Pattaya coastline near Jomtien Beach"
                aria-hidden="true"
                fetchPriority="high"
              />
              <figcaption>
                <span>THE JOURNEY</span>
                <strong>Pattaya coast</strong>
              </figcaption>
            </figure>

            <figure className="contact-hero-stop contact-hero-stop-hotel">
              <img
                src={asanzoHotel}
                alt="Exterior of ASANZO Beach Hotel in Pattaya"
                aria-hidden="true"
                fetchPriority="high"
              />
              <figcaption>
                <span>YOUR DESTINATION</span>
                <strong>ASANZO Beach Hotel</strong>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section
        className="contact-page"
        id="contact-details"
        aria-labelledby="contact-title"
      >
        <div className="container contact-layout">
          <div className="contact-intro">
            <h2 id="contact-title">Plan Your Visit</h2>
            <p>
              Escape to Asanzo Beach Hotel and enjoy a relaxed seaside stay.
              Whether you are planning a quiet retreat or a getaway with family,
              our team is here to help you plan your visit.
            </p>
          </div>

          <div className="contact-information">
            <h2>Contact:</h2>
            <div className="contact-information-columns">
              <section
                className="contact-booking-information"
                aria-labelledby="contact-booking-information-title"
              >
                <h3 id="contact-booking-information-title">
                  Booking and Contact Information
                </h3>
                <p>
                  To plan your stay or learn more about our rooms, get in touch
                  with the Asanzo team. We look forward to welcoming you.
                </p>
              </section>

              <section
                className="contact-booking-details"
                aria-labelledby="contact-booking-details-title"
              >
                <h3 id="contact-booking-details-title">Make a Booking:</h3>
                <a className="contact-phone-link" href="tel:+66889804406">
                  +66-889804406
                </a>
                <a
                  className="contact-location-link"
                  href="https://www.google.com/maps/search/?api=1&query=Asanzo+Beach+Hotel"
                  target="_blank"
                  rel="noreferrer"
                >
                  Find Asanzo Beach Hotel
                </a>
                <a
                  className="contact-email-link"
                  href="mailto:info@asanzobeachhotel.com"
                >
                  info@asanzobeachhotel.com
                </a>
              </section>
            </div>
          </div>
        </div>
      </section>

      <section
        className="contact-map-section"
        aria-labelledby="contact-map-title"
      >
        <div className="container contact-map-container">
          <h2 className="contact-map-heading" id="contact-map-title">
            Here&apos;s how to find us:
          </h2>
          <a
            className="contact-map-directions"
            href="https://www.google.com/maps/search/?api=1&query=12.88397889917869%2C100.88150647669333"
            target="_blank"
            rel="noreferrer"
          >
            Get Directions
          </a>
          <div className="contact-map-frame-wrap">
            <iframe
              className="contact-map-frame"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d924.2315620838554!2d100.88150647669333!3d12.88397889917869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31029700496e3b2f%3A0xad6a82f89a63044d!2sASANZO%20Beach%20Hotel!5e1!3m2!1sen!2sin!4v1793516885182!5m2!1sen!2sin"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="ASANZO Beach Hotel Location"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
