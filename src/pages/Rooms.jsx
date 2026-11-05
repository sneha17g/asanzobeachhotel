import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Button from "../components/Button.jsx";
import roomHeroImage from "../assets/optimized/rooms-hero.jpg";
import roomPhotoOne from "../assets/optimized/room-1.jpg";
import roomPhotoTwo from "../assets/optimized/room-2.jpg";
import roomPhotoThree from "../assets/optimized/room-3.jpg";
import roomPhotoFour from "../assets/optimized/room-4.jpg";
import roomPhotoFive from "../assets/optimized/room-5.jpg";
import roomPhotoSix from "../assets/optimized/room-6.jpg";
import { rooms } from "../data/rooms.js";
import SEO from "../components/SEO.jsx";
import Eyebrow from "../components/Eyebrow.jsx";
import "./Rooms.css";

const amenities = [
  "Aquarius Swimming Pool",
  "Stellar Study",
  "Astral Heritage Museum",
  "Supernova Games Room",
  "Polaris Conference Room",
  "Elysium Wine Cellar",
  "St. Andrews Chapel",
  "Jewel Box Shop",
  "Black Hole Bar",
  "Nebula Restaurant",
];

const amenityPhotos = [
  ...rooms.flatMap((room) =>
    room.gallery.map((photo) => ({
      ...photo,
      id: `${room.id}-${photo.image}`,
    })),
  ),
  {
    id: "hotel-balcony-breakfast",
    image: roomPhotoOne,
    imageAlt: "Breakfast served on a hotel balcony",
  },
  {
    id: "hotel-lounge",
    image: roomPhotoTwo,
    imageAlt: "A comfortable hotel lounge beside the balcony",
  },
  {
    id: "hotel-room-view-one",
    image: roomPhotoThree,
    imageAlt: "A bright hotel bedroom with a double bed",
  },
  {
    id: "hotel-room-view-two",
    image: roomPhotoFour,
    imageAlt: "A hotel bedroom with a window seating area",
  },
  {
    id: "hotel-room-view-three",
    image: roomPhotoFive,
    imageAlt: "A spacious hotel room with a large bed",
  },
  {
    id: "hotel-room-view-four",
    image: roomPhotoSix,
    imageAlt: "A twin-bed room with hotel furnishings",
  },
];

function Rooms() {
  const [roomSlidePosition, setRoomSlidePosition] = useState(rooms.length);
  const [roomTrackAnimated, setRoomTrackAnimated] = useState(true);
  const [roomTrackOffset, setRoomTrackOffset] = useState(0);
  const [amenitySlidePosition, setAmenitySlidePosition] = useState(
    amenityPhotos.length,
  );
  const [amenityTrackAnimated, setAmenityTrackAnimated] = useState(true);
  const [amenityTrackOffset, setAmenityTrackOffset] = useState(0);
  const roomCarouselRef = useRef(null);
  const amenitiesGalleryRef = useRef(null);
  const activeRoom = roomSlidePosition % rooms.length;
  const activeAmenityPhoto = amenitySlidePosition % amenityPhotos.length;
  const roomSlides = [...rooms, ...rooms, ...rooms];
  const amenitySlides = [...amenityPhotos, ...amenityPhotos, ...amenityPhotos];

  function moveRoomSelection(direction) {
    setRoomSlidePosition((currentPosition) => currentPosition + direction);
  }

  function moveAmenityPhoto(direction) {
    setAmenitySlidePosition((currentPosition) => currentPosition + direction);
  }

  function handleRoomTrackTransitionEnd(event) {
    if (event.target !== event.currentTarget) return;
    if (
      roomSlidePosition < rooms.length ||
      roomSlidePosition >= rooms.length * 2
    ) {
      setRoomSlidePosition((currentPosition) =>
        currentPosition < rooms.length
          ? currentPosition + rooms.length
          : currentPosition - rooms.length,
      );
      setRoomTrackAnimated(false);
      window.requestAnimationFrame(() => setRoomTrackAnimated(true));
    }
  }

  function handleAmenityTrackTransitionEnd(event) {
    if (event.target !== event.currentTarget) return;
    if (
      amenitySlidePosition < amenityPhotos.length ||
      amenitySlidePosition >= amenityPhotos.length * 2
    ) {
      setAmenitySlidePosition((currentPosition) =>
        currentPosition < amenityPhotos.length
          ? currentPosition + amenityPhotos.length
          : currentPosition - amenityPhotos.length,
      );
      setAmenityTrackAnimated(false);
      window.requestAnimationFrame(() => setAmenityTrackAnimated(true));
    }
  }

  useEffect(() => {
    const timerId = window.setInterval(() => {
      const gallery = amenitiesGalleryRef.current;
      const canHover = window.matchMedia("(hover: hover)").matches;
      if (canHover && gallery?.matches(":hover")) return;
      setAmenitySlidePosition((currentPosition) => currentPosition + 1);
    }, 3800);
    return () => window.clearInterval(timerId);
  }, []);

  useLayoutEffect(() => {
    const carousel = roomCarouselRef.current;
    if (!carousel) return undefined;

    function updateTrackOffset() {
      const activeSlide = carousel.querySelector(
        ".rooms-slider-card:nth-child(" + (roomSlidePosition + 1) + ")",
      );
      if (!activeSlide) return;
      setRoomTrackOffset(
        carousel.clientWidth / 2 -
          (activeSlide.offsetLeft + activeSlide.offsetWidth / 2),
      );
    }

    updateTrackOffset();
    window.addEventListener("resize", updateTrackOffset);
    return () => window.removeEventListener("resize", updateTrackOffset);
  }, [roomSlidePosition]);

  useLayoutEffect(() => {
    const gallery = amenitiesGalleryRef.current;
    if (!gallery) return undefined;

    function updateTrackOffset() {
      const firstSlide = gallery.querySelector(".rooms-amenities-photo");
      if (!firstSlide) return;
      setAmenityTrackOffset(
        gallery.clientWidth / 2 -
          (amenitySlidePosition + 0.5) * firstSlide.offsetWidth,
      );
    }

    updateTrackOffset();
    window.addEventListener("resize", updateTrackOffset);
    return () => window.removeEventListener("resize", updateTrackOffset);
  }, [amenitySlidePosition]);

  return (
    <>
      <SEO
        title="Pattaya Hotel Rooms Near Jomtien Beach | ASANZO Beach Hotel"
        description="Compare standard, deluxe, and family rooms at ASANZO Beach Hotel in Pattaya, near Jomtien Beach. Review room details and contact us for current rates and availability."
        path="/rooms"
        pageType="CollectionPage"
      />
      <section className="rooms-page rooms-hero" aria-labelledby="rooms-title">
        <img
          className="rooms-hero-image"
          src={roomHeroImage}
          alt=""
          aria-hidden="true"
          fetchPriority="high"
          decoding="async"
        />
        <div className="rooms-hero-overlay" aria-hidden="true" />
        <div className="container rooms-hero-content">
          <Eyebrow className="rooms-hero-eyebrow">Stay at Asanzo</Eyebrow>
          <h1 id="rooms-title">Hotel Rooms in Pattaya</h1>
          <p className="rooms-hero-description">
            Explore comfortable standard, deluxe and family accommodation in
            Pattaya. For room details, current availability and rates, our team
            can help you plan your stay.
          </p>
          <div className="rooms-hero-actions">
            <Button
              className="rooms-hero-button"
              text="Enquire about a stay"
              to="/contact"
            />
            <Button
              className="rooms-hero-about-button"
              text="Discover Asanzo"
              to="/about"
            />
          </div>
        </div>
      </section>

      <section
        className="rooms-slider-section"
        aria-labelledby="rooms-slider-title"
      >
        <div className="container rooms-slider-container">
          <div className="rooms-slider-heading-row">
            <button
              className="rooms-slider-arrow"
              type="button"
              aria-label="Previous room"
              onClick={() => moveRoomSelection(-1)}
            >
              <svg viewBox="0 0 36 24" aria-hidden="true">
                <path d="M33 12H4m0 0 9-9m-9 9 9 9" />
              </svg>
            </button>
            <div className="rooms-slider-heading">
              <h2 id="rooms-slider-title">Our Accommodation</h2>
            </div>
            <button
              className="rooms-slider-arrow"
              type="button"
              aria-label="Next room"
              onClick={() => moveRoomSelection(1)}
            >
              <svg viewBox="0 0 36 24" aria-hidden="true">
                <path d="M3 12h29m0 0-9-9m9 9-9 9" />
              </svg>
            </button>
          </div>

          <span className="rooms-slider-status" aria-live="polite">
            {String(activeRoom + 1).padStart(2, "0")} /{" "}
            {String(rooms.length).padStart(2, "0")}: {rooms[activeRoom].name}
          </span>

          <div
            className="rooms-slider-carousel"
            aria-label="Room options"
            ref={roomCarouselRef}
          >
            <div
              className={`rooms-slider-track${roomTrackAnimated ? "" : " is-resetting"}`}
              style={{
                transform: `translate3d(${roomTrackOffset}px, 0, 0)`,
              }}
              onTransitionEnd={handleRoomTrackTransitionEnd}
            >
              {roomSlides.map((room, index) => (
                <article
                  className={`rooms-slider-card${
                    index === roomSlidePosition
                      ? " is-active"
                      : index === roomSlidePosition - 1
                        ? " is-previous"
                        : index === roomSlidePosition + 1
                          ? " is-next"
                          : ""
                  }`}
                  key={`${index}-${room.id}`}
                  aria-current={index === roomSlidePosition ? "true" : undefined}
                  aria-hidden={
                    index < rooms.length || index >= rooms.length * 2
                  }
                  inert={index < rooms.length || index >= rooms.length * 2}
                >
                  <h3 className="rooms-slider-card-title">{room.name}</h3>
                  <figure className="rooms-slider-card-image-wrap">
                    <img
                      className="rooms-slider-card-image"
                      src={room.image}
                      alt={room.imageAlt}
                    />
                  </figure>
                  <Button
                    className="rooms-slider-details-button"
                    text="View Details"
                    to={`/roomDetails/${room.id}`}
                  />
                </article>
              ))}
            </div>
          </div>

          <div
            className="rooms-slider-pagination"
            role="group"
            aria-label="Room pages"
          >
            {rooms.map((room, index) => (
              <button
                className={`rooms-slider-dot${activeRoom === index ? " is-active" : ""}`}
                type="button"
                key={room.id}
                aria-label={`Go to ${room.name}`}
                aria-current={activeRoom === index ? "true" : undefined}
                onClick={() =>
                  setRoomSlidePosition(rooms.length + index)
                }
              />
            ))}
          </div>
        </div>
      </section>

      <section
        className="rooms-amenities-section"
        aria-labelledby="rooms-amenities-title"
      >
        <div className="container rooms-amenities-container">
          <h2 id="rooms-amenities-title">Hotel Amenities</h2>
          <div className="rooms-amenities-list">
            {[amenities.slice(0, 5), amenities.slice(5)].map(
              (row, rowIndex) => (
                <div
                  className="rooms-amenities-row"
                  key={`amenities-row-${rowIndex}`}
                >
                  {row.map((amenity, index) => (
                    <span className="rooms-amenities-item" key={amenity}>
                      {index > 0 && (
                        <span
                          className="rooms-amenities-separator"
                          aria-hidden="true"
                        >
                          //
                        </span>
                      )}
                      {amenity}
                    </span>
                  ))}
                </div>
              ),
            )}
          </div>

          <div
            className="rooms-amenities-gallery"
            role="region"
            aria-label="Asanzo spaces"
            ref={amenitiesGalleryRef}
          >
            <div
              className={`rooms-amenities-track${amenityTrackAnimated ? "" : " is-resetting"}`}
              style={{ transform: `translate3d(${amenityTrackOffset}px, 0, 0)` }}
              onTransitionEnd={handleAmenityTrackTransitionEnd}
            >
              {amenitySlides.map((photo, index) => (
                <figure
                  className={`rooms-amenities-photo${
                    index === amenitySlidePosition
                      ? " is-active"
                      : index === amenitySlidePosition - 1
                        ? " is-previous"
                        : index === amenitySlidePosition + 1
                          ? " is-next"
                          : ""
                  }`}
                  key={`${index}-${photo.id}`}
                  aria-hidden={index !== amenitySlidePosition}
                >
                  <img src={photo.image} alt={photo.imageAlt} />
                </figure>
              ))}
            </div>
            <button
              className="rooms-amenities-arrow"
              type="button"
              aria-label="Previous amenity photo"
              onClick={() => moveAmenityPhoto(-1)}
            >
              <svg viewBox="0 0 36 24" aria-hidden="true">
                <path d="M33 12H4m0 0 9-9m-9 9 9 9" />
              </svg>
            </button>
            <button
              className="rooms-amenities-arrow"
              type="button"
              aria-label="Next amenity photo"
              onClick={() => moveAmenityPhoto(1)}
            >
              <svg viewBox="0 0 36 24" aria-hidden="true">
                <path d="M3 12h29m0 0-9-9m9 9-9 9" />
              </svg>
            </button>
          </div>
          <div
            className="rooms-amenities-pagination"
            role="group"
            aria-label="Amenity photo pages"
          >
            {amenityPhotos.map((photo, index) => (
              <button
                className={`rooms-amenities-dot${index === activeAmenityPhoto ? " is-active" : ""}`}
                type="button"
                key={photo.id}
                aria-label={`Go to photo ${index + 1}`}
                aria-current={index === activeAmenityPhoto ? "true" : undefined}
                onClick={() =>
                  setAmenitySlidePosition(amenityPhotos.length + index)
                }
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Rooms;
