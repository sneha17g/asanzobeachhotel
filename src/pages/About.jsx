import { Link } from "react-router-dom";
import Button from "../components/Button.jsx";
import eventVideo from "../assets/About/eventVideo.mp4";
import hotelAboutvideo from "../assets/About/hotelAboutvideo.mp4";
import aboutTree from "../assets/About/aboutTree.png";
import { rooms } from "../data/rooms.js";
import SEO from "../components/SEO.jsx";
import Eyebrow from "../components/Eyebrow.jsx";
import "./About.css";

const aboutHighlights = [
  "Comfortable accommodation",
  "Essential in-room amenities",
  "Restaurant & bar",
  "Convenient Pattaya location",
];

const aboutFacilities = [
  {
    name: "Restaurant",
    description: "Enjoy convenient dining during your stay.",
    icon: "restaurant",
  },
  {
    name: "Bar",
    description: "Unwind with a relaxed drink after a day out.",
    icon: "bar",
  },
  {
    name: "Wi-Fi",
    description: "Stay connected throughout your visit.",
    icon: "wifi",
  },
  {
    name: "Air-conditioning",
    description: "Settle into a cool, comfortable room.",
    icon: "air",
  },
  {
    name: "Safe Storage",
    description: "Keep your belongings stored with care.",
    icon: "storage",
  },
];

function AboutFacilityIcon({ name }) {
  const paths = {
    restaurant: (
      <>
        <path d="M7 3v8m4-8v8M7 7h4m-2 4v10M17 3v18m0-18c3 2 3 7 0 9" />
      </>
    ),
    bar: (
      <>
        <path d="M4 4h16l-6 7v9h-4v-9L4 4Z" />
        <path d="M8 8h8m-8 12h8" />
      </>
    ),
    wifi: <path d="M3 8a16 16 0 0 1 18 0M6.5 12a10 10 0 0 1 11 0M10 16a4.5 4.5 0 0 1 4 0M12 20h.01" />,
    air: (
      <>
        <path d="M12 3v18m-6-15 12 12M18 6 6 18" />
        <path d="M8 3v4m8 10v4M3 8h4m10 8h4" />
      </>
    ),
    storage: (
      <>
        <rect x="4" y="3" width="16" height="18" rx="1" />
        <path d="M12 3v18m-5-9h1m8 0h1" />
      </>
    ),
  };

  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      {paths[name]}
    </svg>
  );
}

function About() {
  return (
    <>
      <SEO
        title="About ASANZO Beach Hotel | Pattaya Hotel Near Jomtien Beach"
        description="Learn about ASANZO Beach Hotel in Pattaya, Thailand, and explore our rooms, dining options, in-room amenities, and location near Jomtien Beach."
        path="/about"
        pageType="AboutPage"
      />
      <section className="about-hero" aria-labelledby="about-hero-title">
        <div className="about-hero-copy">
          <Eyebrow className="about-eyebrow">ASANZO BEACH HOTEL</Eyebrow>
          <h1 id="about-hero-title">
            We are Asanzo
          </h1>
          <p className="about-intro">
            Find a welcoming base for your Pattaya stay, with comfortable
            accommodation, warm hospitality, restaurant and bar options,
            Wi-Fi, and Jomtien Beach nearby.
          </p>
          <div className="about-hero-actions">
            <Button
              className="about-hero-rooms-button"
              text="Explore Our Rooms"
              to="/rooms"
            />
            <Button
              className="about-hero-contact-button"
              text="Contact Us"
              to="/contact"
            />
          </div>
        </div>
        <div
          className="about-hero-visual"
          aria-label="A glimpse of the Asanzo experience"
        >
          <video
            className="about-background-video"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden="true"
          >
            <source src={hotelAboutvideo} type="video/mp4" />
          </video>
          <div className="about-video-frame">
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-label="Guests relaxing by the pool"
            >
              <source src={eventVideo} type="video/mp4" />
            </video>
          </div>
          <p className="about-visual-caption">
            <span aria-hidden="true" /> The Asanzo feeling
          </p>
        </div>
      </section>
      <section
        className="about-tree-section"
        aria-labelledby="about-tree-title"
      >
        <div className="container about-tree-container">
          <div className="about-tree-copy">
            <h2 id="about-tree-title">
              Welcome to Hotel Asanzo, where resort excellence meets innovation
            </h2>
            <p>
              ASANZO Beach Hotel is a welcoming seaside retreat in Pattaya,
              Thailand. Thoughtful comforts, warm hospitality and a convenient
              location make it easy to slow down between beach days and
              exploring the city.
            </p>
            <p>
              Whether you are travelling as a couple, with friends or as a
              family, our team is here to help make your stay feel comfortable
              from arrival to departure.
            </p>
            <ul className="about-tree-highlights">
              {aboutHighlights.map((highlight) => (
                <li key={highlight}>
                  <span aria-hidden="true">+</span>
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
          <img
            className="about-tree-image"
            src={aboutTree}
            alt="A palm tree leaning toward the coast"
          />
        </div>
      </section>
      <section
        className="about-tree-quote-section"
        aria-labelledby="about-tree-quote-title"
      >
        <div className="container about-tree-quote-container">
          <span className="about-tree-quote-mark" aria-hidden="true">
            “
          </span>
          <h2 className="about-tree-quote" id="about-tree-quote-title">
            At ASANZO Beach Hotel, tropical charm and thoughtful comfort come
            together for a relaxed seaside stay. Discover Pattaya’s coast,
            unwind beneath the palms{" "}
            <img
              className="about-tree-inline-image"
              src={aboutTree}
              alt=""
              aria-hidden="true"
            />{" "}
            and enjoy a warm welcome from the moment you arrive.
          </h2>
          <p className="about-tree-attribution">The ASANZO experience</p>
        </div>
      </section>

      <section
        className="about-rooms-section"
        aria-labelledby="about-rooms-title"
      >
        <div className="container">
          <div className="about-section-heading">
            <div>
              <Eyebrow className="about-section-eyebrow">Find your room</Eyebrow>
              <h2 id="about-rooms-title">Space to settle in.</h2>
            </div>
            <p>
              Choose a comfortable room for a Pattaya getaway, a coastal break
              or family time together.
            </p>
          </div>

          <div className="about-rooms-grid">
            {rooms.map((room, index) => (
              <article
                className={`about-room-card about-room-card-${index + 1}`}
                key={room.id}
              >
                <Link
                  className="about-room-image-link"
                  to={`/roomDetails/${room.id}`}
                  aria-label={`View ${room.name}`}
                >
                  <img
                    src={room.image}
                    alt={room.imageAlt}
                    loading="lazy"
                  />
                  <span className="about-room-number">0{index + 1}</span>
                </Link>
                <div className="about-room-card-copy">
                  <h3>{room.name}</h3>
                  <p>{room.description}</p>
                  <Link
                    className="about-room-link"
                    to={`/roomDetails/${room.id}`}
                  >
                    View Room <span aria-hidden="true">↗</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <div className="about-rooms-footer">
            <Button
              className="about-rooms-all-button"
              text="Explore All Rooms"
              to="/rooms"
            />
          </div>
        </div>
      </section>

      <section
        className="about-facilities-section"
        aria-labelledby="about-facilities-title"
      >
        <div className="container about-facilities-container">
          <div className="about-facilities-intro">
            <Eyebrow className="about-section-eyebrow">Made for an easy stay</Eyebrow>
            <h2 id="about-facilities-title">Hotel Amenities in Pattaya</h2>
            <p>
              From a place to dine to the everyday essentials in your room,
              find the comforts that help you feel at home.
            </p>
          </div>
          <div className="about-facilities-list">
            {aboutFacilities.map((facility, index) => (
              <article className="about-facility-item" key={facility.name}>
                <span className="about-facility-index">0{index + 1}</span>
                <span className="about-facility-icon">
                  <AboutFacilityIcon name={facility.icon} />
                </span>
                <div>
                  <h3>{facility.name}</h3>
                  <p>{facility.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="about-location-section"
        aria-labelledby="about-location-title"
      >
        <div className="container about-location-layout">
          <div className="about-location-copy">
            <Eyebrow className="about-section-eyebrow">A convenient place to stay</Eyebrow>
            <h2 id="about-location-title">Pattaya, close to the coast.</h2>
            <p>
              Settle into the energy of Pattaya with Jomtien Beach nearby. Make
              the hotel your base for relaxed days by the sea and time spent
              discovering the city.
            </p>
            <address>
              279/121 Soi Somprasong, Pattaya, Bang Lamung, Chon Buri Province,
              Thailand.
            </address>
            <a
              className="about-location-link"
              href="https://www.google.com/maps/search/?api=1&query=12.88397889917869%2C100.88150647669333"
              target="_blank"
              rel="noreferrer"
            >
              Get Directions <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="about-location-image">
            <img
              src={aboutTree}
              alt="Tropical palms and coastline near Pattaya"
              loading="lazy"
            />
            <span>Discover the coast at your own pace</span>
          </div>
        </div>
      </section>

      <section className="about-final-cta" aria-labelledby="about-final-title">
        <div className="container about-final-content">
          <Eyebrow className="about-section-eyebrow">Your Pattaya stay begins here</Eyebrow>
          <h2 id="about-final-title">Ready to Experience ASANZO?</h2>
          <p>
            We look forward to welcoming you. Explore our rooms or get in touch
            to start planning your stay.
          </p>
          <div className="about-final-actions">
            <Button
              className="about-final-rooms-button"
              text="Explore Rooms"
              to="/rooms"
            />
            <Button
              className="about-final-contact-button"
              text="Contact Us"
              to="/contact"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
