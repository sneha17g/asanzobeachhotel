import { Link, useParams } from "react-router-dom";
import Button from "../components/Button.jsx";
import { rooms } from "../data/rooms.js";
import { useLayoutEffect, useRef, useState } from "react";
import "./RoomDetails.css";

function RoomDetails() {
  const { roomId } = useParams();
  const room = rooms.find((item) => item.id === roomId);
  const [galleryPositionState, setGalleryPositionState] = useState(null);
  const [galleryTrackOffset, setGalleryTrackOffset] = useState(0);
  const [galleryTrackAnimated, setGalleryTrackAnimated] = useState(true);
  const galleryWindowRef = useRef(null);
  const galleryTrackRef = useRef(null);
  const gallery = room?.gallery?.length
    ? room.gallery
    : room
      ? [{ image: room.image, imageAlt: room.imageAlt }]
      : [];
  const galleryPosition =
    room && galleryPositionState?.roomId === room.id
      ? galleryPositionState.position
      : gallery.length;
  const selectedGalleryIndex = gallery.length
    ? galleryPosition % gallery.length
    : 0;
  const gallerySlides = [...gallery, ...gallery, ...gallery];

  function moveGallery(direction) {
    if (!room) return;
    setGalleryPositionState((currentState) => {
      const currentPosition =
        currentState?.roomId === room.id
          ? currentState.position
          : gallery.length;
      return { roomId: room.id, position: currentPosition + direction };
    });
  }

  function handleGalleryTrackTransitionEnd(event) {
    if (!room || event.target !== event.currentTarget) return;
    if (
      galleryPosition < gallery.length ||
      galleryPosition >= gallery.length * 2
    ) {
      setGalleryPositionState({
        roomId: room.id,
        position:
          galleryPosition < gallery.length
            ? galleryPosition + gallery.length
            : galleryPosition - gallery.length,
      });
      setGalleryTrackAnimated(false);
      window.requestAnimationFrame(() => setGalleryTrackAnimated(true));
    }
  }

  useLayoutEffect(() => {
    const galleryWindow = galleryWindowRef.current;
    const galleryTrack = galleryTrackRef.current;
    if (!galleryWindow || !galleryTrack) return undefined;

    function updateGalleryTrackOffset() {
      const activeSlide = galleryTrack.children[galleryPosition];
      if (!activeSlide) return;
      setGalleryTrackOffset(
        galleryWindow.clientWidth / 2 -
          (activeSlide.offsetLeft + activeSlide.offsetWidth / 2),
      );
    }

    updateGalleryTrackOffset();
    window.addEventListener("resize", updateGalleryTrackOffset);
    return () => window.removeEventListener("resize", updateGalleryTrackOffset);
  }, [galleryPosition, gallery.length]);

  if (!room) {
    return (
      <section className="room-details-not-found">
        <div className="container room-details-not-found-content">
          <p className="room-details-eyebrow">Asanzo accommodation</p>
          <h1>Room not found</h1>
          <p>We couldn’t find a room matching this link.</p>
          <Button text="Browse all rooms" to="/rooms" />
        </div>
      </section>
    );
  }

  return (
    <>
      <section
        className="room-details-hero rooms-page"
        aria-labelledby="room-details-title"
      >
        <img
          className="room-details-hero-image"
          src={room.image}
          alt={room.imageAlt}
        />
        <div className="room-details-hero-overlay" aria-hidden="true" />
        <div className="container room-details-hero-content">
          <p className="room-details-eyebrow">Asanzo accommodation</p>
          <h1 id="room-details-title">{room.name}</h1>
          <p className="room-details-description">{room.description}</p>
          <Button
            className="room-details-button"
            text="Enquire about this room"
            to="/contact"
          />
        </div>
      </section>

      <section
        className="room-details-description-section"
        aria-labelledby="room-details-description-title"
      >
        <div className="container room-details-description-container">
          <div className="room-details-description-intro">
            <h2 id="room-details-description-title">
              Welcome to {room.name}
            </h2>
            <p>{room.description}</p>
          </div>

          <div className="room-details-description-layout">
            <div className="room-details-description-copy">
              <p className="room-details-description-eyebrow">
                Your stay at Asanzo
              </p>
              <h3>{room.name}</h3>
              <p className="room-details-description-details">
                {room.details}
              </p>
              <div
                className="room-details-description-amenities"
                aria-labelledby="room-details-description-amenities-title"
              >
                <h4 id="room-details-description-amenities-title">
                  Amenities
                </h4>
                <ul>
                  <li>
                    <img
                      src="https://cdn.prod.website-files.com/6710d1b2bc82a2f6d06f926d/67470ad8d41f2f50628846eb_storage.svg"
                      alt=""
                    />
                    <span>Safe Storage</span>
                  </li>
                  <li>
                    <img
                      src="https://cdn.prod.website-files.com/6710d1b2bc82a2f6d06f926d/67470ad8b65f8ea52ab026a4_wifi.svg"
                      alt=""
                    />
                    <span>Lodge&apos;s Wi-Fi</span>
                  </li>
                  <li>
                    <img
                      src="https://cdn.prod.website-files.com/6710d1b2bc82a2f6d06f926d/67470ad89b972f18df5f41bc_temp.svg"
                      alt=""
                    />
                    <span>Air-conditioning</span>
                  </li>
                </ul>
              </div>
              <div className="room-details-description-actions">
                <Button
                  className="room-details-description-button"
                  text="Book Now"
                  to="/contact"
                />
                <Link className="room-details-description-back-link" to="/rooms">
                  <span aria-hidden="true">←</span> All rooms
                </Link>
              </div>
            </div>

            <figure className="room-details-description-image-wrap">
              <img src={room.image} alt={room.imageAlt} />
            </figure>
          </div>
        </div>
      </section>

      <section
        className="room-details-gallery-section"
        aria-labelledby="room-details-gallery-title"
      >
        <div className="container room-details-gallery-container">
          <div className="room-details-gallery-heading-row">
            <button
              className="room-details-gallery-arrow"
              type="button"
              aria-label="Previous room photo"
              disabled={gallery.length < 2}
              onClick={() => moveGallery(-1)}
            >
              <svg viewBox="0 0 36 24" aria-hidden="true">
                <path d="M33 12H4m0 0 9-9m-9 9 9 9" />
              </svg>
            </button>
            <h2 id="room-details-gallery-title">Gallery</h2>
            <button
              className="room-details-gallery-arrow"
              type="button"
              aria-label="Next room photo"
              disabled={gallery.length < 2}
              onClick={() => moveGallery(1)}
            >
              <svg viewBox="0 0 36 24" aria-hidden="true">
                <path d="M3 12h29m0 0-9-9m9 9-9 9" />
              </svg>
            </button>
          </div>

          <div className="room-details-gallery-window" ref={galleryWindowRef}>
            <div
              className={`room-details-gallery-track${galleryTrackAnimated ? "" : " is-resetting"}`}
              ref={galleryTrackRef}
              onTransitionEnd={handleGalleryTrackTransitionEnd}
              style={{ transform: `translate3d(${galleryTrackOffset}px, 0, 0)` }}
            >
              {gallerySlides.map((photo, index) => (
                <figure
                  className={`room-details-gallery-item${index === galleryPosition ? " is-active" : ""}`}
                  key={`${room.id}-gallery-${index}`}
                  aria-hidden={index !== galleryPosition}
                >
                  <img
                    src={photo.image}
                    alt={index === galleryPosition ? photo.imageAlt : ""}
                  />
                </figure>
              ))}
            </div>
          </div>

          {gallery.length > 1 && (
            <div
              className="room-details-gallery-pagination"
              aria-label="Choose a room photo"
            >
              {gallery.map((photo, index) => (
                <button
                  className={`room-details-gallery-dot${selectedGalleryIndex === index ? " is-active" : ""}`}
                  type="button"
                  key={`${room.id}-dot-${index}`}
                  aria-label={`Show room photo ${index + 1}`}
                  aria-current={
                    selectedGalleryIndex === index ? "true" : undefined
                  }
                  onClick={() => {
                    setGalleryPositionState({
                      roomId: room.id,
                      position: gallery.length + index,
                    });
                  }}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default RoomDetails;
