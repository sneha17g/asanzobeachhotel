import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button.jsx";
import asanzoHotel from "../assets/optimized/hotel-front.jpg";
import frameOne from "../assets/optimized/hero-frame-1.jpg";
import frameTwo from "../assets/optimized/hero-frame-2.jpg";
import frameThree from "../assets/optimized/hero-frame-3.jpg";
import frameFour from "../assets/optimized/hero-frame-4.jpg";
import frameFive from "../assets/optimized/hero-frame-5.jpg";
import frameSix from "../assets/optimized/hero-frame-6.jpg";
import { rooms } from "../data/rooms.js";
import SEO from "../components/SEO.jsx";
import Eyebrow from "../components/Eyebrow.jsx";
import "./Home.css";

const heroPhotos = [
  { src: frameOne, alt: "A moment from the Asanzo hotel experience" },
  { src: frameTwo, alt: "A view from the Asanzo hotel experience" },
  { src: frameThree, alt: "Guests enjoying a tropical seaside stay" },
  { src: frameFour, alt: "A view of the Pattaya coastline" },
  { src: frameFive, alt: "A beachside moment in Pattaya" },
  { src: frameSix, alt: "The beach and hotels near Asanzo" },
];

const roomAmenities = [
  { title: "Safe Storage", icon: "storage" },
  { title: "Lodge's Wi-Fi", icon: "wifi" },
  { title: "Air-conditioning", icon: "temperature" },
];

function AmenityIcon({ name }) {
  if (name === "wifi") {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="M7 18a26 26 0 0 1 34 0M13 25a17 17 0 0 1 22 0m-16 7a9 9 0 0 1 10 0M24 39h.01" />
      </svg>
    );
  }

  if (name === "temperature") {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="M19 28V10a5 5 0 0 1 10 0v18a10 10 0 1 1-10 0Z" />
        <path d="M24 22v13m0 0a3 3 0 1 0 0 .01" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <path d="M10 15h28v26H10zM15 15V9h18v6m-18 8h18m-18 6h12" />
    </svg>
  );
}

function Home() {
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false);
  const [isResettingSlide, setIsResettingSlide] = useState(false);
  const isTransitionActive = useRef(false);
  const incomingPhotoIndex = (activePhotoIndex + 1) % heroPhotos.length;

  const finishPhotoTransition = useCallback(() => {
    if (!isTransitionActive.current) return;

    isTransitionActive.current = false;
    setIsResettingSlide(true);
    setActivePhotoIndex((index) => (index + 1) % heroPhotos.length);
    setIsSliding(false);
  }, []);

  useEffect(() => {
    if (!isResettingSlide) return undefined;

    const resetTimerId = window.setTimeout(
      () => setIsResettingSlide(false),
      50,
    );
    return () => window.clearTimeout(resetTimerId);
  }, [isResettingSlide]);

  useEffect(() => {
    if (isSliding) {
      const fallbackTimerId = window.setTimeout(
        finishPhotoTransition,
        1100,
      );
      return () => window.clearTimeout(fallbackTimerId);
    }

    const timerId = window.setTimeout(
      () => {
        isTransitionActive.current = true;
        setIsSliding(true);
      },
      4200,
    );
    return () => window.clearTimeout(timerId);
  }, [activePhotoIndex, finishPhotoTransition, isSliding]);

  function handlePhotoTransitionEnd(event) {
    if (
      event.target !== event.currentTarget ||
      event.propertyName !== "transform" ||
      !event.currentTarget.classList.contains("is-sliding")
    ) {
      return;
    }

    finishPhotoTransition();
  }

  return (
    <>
    <SEO
      title="Best Hotels Near Jomtien Beach, Pattaya | Asanzo Beach Hotel"
      description="Looking for the best hotels near Jomtien Beach, Pattaya? Find comfortable double and family rooms at Asanzo Beach Hotel. Contact us for rates and availability."
      path="/"
      pageType="WebPage"
    />
    <section
      className="home-hero"
      aria-labelledby="home-hero-title"
    >
      <img
        className="home-hero-background"
        src={asanzoHotel}
        alt="Exterior of ASANZO Beach Hotel in Pattaya"
      />
      <div className="home-hero-shade" aria-hidden="true" />
      <div className="container home-hero-layout">
        <div className="home-hero-copy">
          <Eyebrow className="home-hero-eyebrow">
            A slower kind
            of seaside stay
          </Eyebrow>
          <h1 className="home-hero-title" id="home-hero-title">
            ASANZO <span>Beach Hotel</span>
          </h1>
          <p className="home-hero-tagline">
            A relaxed stay in Pattaya
          </p>
          <div className="home-hero-actions">
            <Button className="home-hero-cta" text="Explore Rooms" to="/rooms" />
            <Button
              className="home-hero-contact-cta"
              text="Contact Us"
              to="/contact"
            />
          </div>
        </div>

        <div className="home-hero-visual">
          <div className="home-hero-frame" role="group" aria-label="Scenes from ASANZO Beach Hotel">
            <div
              className={`home-hero-track${isSliding ? " is-sliding" : ""}${isResettingSlide ? " is-resetting" : ""}`}
              onTransitionEnd={handlePhotoTransitionEnd}
            >
              <img
                className="home-hero-photo"
                src={heroPhotos[activePhotoIndex].src}
                alt={heroPhotos[activePhotoIndex].alt}
              />
              <img
                className="home-hero-photo"
                src={heroPhotos[incomingPhotoIndex].src}
                alt={heroPhotos[incomingPhotoIndex].alt}
                aria-hidden="true"
              />
            </div>
          </div>
          <p className="home-hero-image-caption">
            <span aria-hidden="true" />
            Moments made by the sea
          </p>
        </div>
      </div>
    </section>

    <section
      className="home-welcome-section"
      aria-labelledby="home-welcome-title"
    >
      <div className="container home-welcome-layout">
        <div className="home-welcome-copy">
          <Eyebrow className="home-section-eyebrow">Welcome to ASANZO</Eyebrow>
          <h2 id="home-welcome-title">
            A little closer to the sea, a little more at ease.
          </h2>
          <p>
            ASANZO Beach Hotel is a comfortable Pattaya hotel with warm Thai
            hospitality, thoughtfully comfortable rooms and Jomtien Beach
            nearby.
          </p>
          <p>
            Compare room options, amenities and location as you choose where to
            stay. If you are comparing affordable hotels in Pattaya, contact
            our team for current rates and availability. The best hotel for
            your trip depends on what matters most to you.
          </p>
          <Button
            className="home-text-button"
            text="Discover our rooms"
            to="/rooms"
          />
        </div>
        <div className="home-welcome-visual">
          <img
            src={asanzoHotel}
            alt="ASANZO Beach Hotel building in Pattaya"
            loading="lazy"
          />
          <span className="home-welcome-image-label">Your Pattaya retreat</span>
        </div>
      </div>
    </section>

    <section
      className="home-accommodation-section"
      aria-labelledby="home-accommodation-title"
    >
      <div className="container">
        <div className="home-section-heading home-accommodation-heading">
          <div>
            <Eyebrow className="home-section-eyebrow">Stay your way</Eyebrow>
            <h2 id="home-accommodation-title">Our accommodation</h2>
          </div>
          <Link className="home-section-link" to="/rooms">
            View all rooms <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <div className="home-room-grid">
          {rooms.map((room, index) => (
            <article
              className={`home-room-card home-room-card-${index + 1}`}
              key={room.id}
            >
              <Link
                className="home-room-image-link"
                to={`/roomDetails/${room.id}`}
                aria-label={`View ${room.name} details`}
              >
                <img
                  src={room.image}
                  alt={room.imageAlt}
                  loading="lazy"
                />
                <span className="home-room-number">
                  0{index + 1} <span aria-hidden="true">/ 03</span>
                </span>
              </Link>
              <div className="home-room-card-copy">
                <div>
                  <h3>{room.name}</h3>
                  <p>{room.description}</p>
                </div>
                <Link
                  className="home-room-details-link"
                  to={`/roomDetails/${room.id}`}
                  aria-label={`View details for ${room.name}`}
                >
                  <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section
      className="home-amenities-section"
      aria-labelledby="home-amenities-title"
    >
      <div className="container home-amenities-layout">
        <div className="home-amenities-copy">
          <Eyebrow className="home-section-eyebrow">Thoughtful essentials</Eyebrow>
          <h2 id="home-amenities-title">Comfort in all the right details.</h2>
          <p>
            Settle in with the essentials for a smooth and comfortable stay.
            These in-room facilities are available across our accommodation.
          </p>
          <ul className="home-amenity-list">
            {roomAmenities.map((amenity) => (
              <li key={amenity.title}>
                <span className="home-amenity-icon">
                  <AmenityIcon name={amenity.icon} />
                </span>
                <span>{amenity.title}</span>
              </li>
            ))}
          </ul>
        </div>
        <figure className="home-amenities-visual">
          <img
            src={rooms[1].image}
            alt={rooms[1].imageAlt}
            loading="lazy"
          />
          <figcaption>Settle into your own comfortable space</figcaption>
        </figure>
      </div>
    </section>

    <section
      className="home-beach-section"
      aria-labelledby="home-beach-title"
    >
      <div className="home-beach-image">
        <img
          src={frameTwo}
          alt="The Pattaya shoreline near the hotel"
          loading="lazy"
        />
      </div>
      <div className="home-beach-copy">
        <Eyebrow className="home-section-eyebrow">The coast is calling</Eyebrow>
        <h2 id="home-beach-title">Pattaya days, at your own pace.</h2>
        <p>
          From a slow morning to an afternoon by the water, Jomtien Beach and
          Pattaya&apos;s coastal atmosphere are close at hand. Come back, unwind,
          and enjoy a little breathing room.
        </p>
        <a
          className="home-beach-map-link"
          href="https://www.google.com/maps/search/?api=1&query=12.88397889917869%2C100.88150647669333"
          target="_blank"
          rel="noreferrer"
        >
          Find us in Pattaya <span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>

    <section
      className="home-gallery-section"
      aria-labelledby="home-gallery-title"
    >
      <div className="container">
        <div className="home-section-heading">
          <div>
            <Eyebrow className="home-section-eyebrow">A glimpse of the stay</Eyebrow>
            <h2 id="home-gallery-title">Discover ASANZO</h2>
          </div>
          <Link className="home-section-link" to="/about">
            Get to know us <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <div className="home-gallery-grid">
          {heroPhotos.slice(0, 5).map((photo, index) => (
            <figure
              className={`home-gallery-item home-gallery-item-${index + 1}`}
              key={photo.src}
            >
              <img src={photo.src} alt={photo.alt} loading="lazy" />
            </figure>
          ))}
        </div>
      </div>
    </section>

    <section
      className="home-location-section"
      aria-labelledby="home-location-title"
    >
      <div className="container home-location-layout">
        <div className="home-location-copy">
          <Eyebrow className="home-section-eyebrow">Find your way here</Eyebrow>
          <h2 id="home-location-title">A Pattaya stay by the coast.</h2>
          <p>
            Find ASANZO Beach Hotel in Pattaya, Thailand, and plan your route
            before your stay.
          </p>
          <a
            className="home-location-directions"
            href="https://www.google.com/maps/search/?api=1&query=12.88397889917869%2C100.88150647669333"
            target="_blank"
            rel="noreferrer"
          >
            Get directions <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="home-location-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d924.2315620838554!2d100.88150647669333!3d12.88397889917869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31029700496e3b2f%3A0xad6a82f89a63044d!2sASANZO%20Beach%20Hotel!5e1!3m2!1sen!2sin!4v1793516885182!5m2!1sen!2sin"
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            title="ASANZO Beach Hotel Location"
          />
        </div>
      </div>
    </section>

    <section className="home-final-cta" aria-labelledby="home-final-cta-title">
      <div className="container home-final-cta-content">
        <Eyebrow className="home-section-eyebrow">Your seaside stay starts here</Eyebrow>
        <h2 id="home-final-cta-title">
          Ready for a slower kind of escape?
        </h2>
        <p>
          Explore the rooms or contact our team to start planning your stay at
          ASANZO Beach Hotel.
        </p>
        <div className="home-final-cta-actions">
          <Button
            className="home-final-cta-primary"
            text="Explore Rooms"
            to="/rooms"
          />
          <Button
            className="home-final-cta-secondary"
            text="Contact Us"
            to="/contact"
          />
        </div>
      </div>
    </section>

    </>
  );
}

export default Home;
