import standardRoomPhoto from "../assets/optimized/single-room.jpg";
import deluxeRoomPhoto from "../assets/optimized/deluxe-room.jpg";
import familyRoomPhoto from "../assets/optimized/family-room.jpg";
import familyRoomPhotoTwo from "../assets/optimized/family-room-2.jpg";

export const rooms = [
  {
    id: "standard-room",
    name: "Standard Room",
    description:
      "A calm, comfortable retreat for easy days and restful nights.",
    details:
      "A bright guest room with a large bed and a simple, welcoming setting for a restful stay.",
    image: standardRoomPhoto,
    imageAlt: "Bright standard guest room with a large bed",
    gallery: [
      {
        image: standardRoomPhoto,
        imageAlt: "Bright standard guest room with a large bed",
      },
    ],
  },
  {
    id: "deluxe-room",
    name: "Deluxe Room",
    description: "A welcoming room with thoughtful details for a relaxed stay.",
    details:
      "Settle into a king bed and seating area in a comfortable room designed for unwinding.",
    image: deluxeRoomPhoto,
    imageAlt: "Deluxe guest room with a king bed and seating area",
    gallery: [
      {
        image: deluxeRoomPhoto,
        imageAlt: "Deluxe guest room with a king bed and seating area",
      },
    ],
  },
  {
    id: "family-room",
    name: "Family Room",
    description: "A spacious place to settle in and enjoy a stay together.",
    details:
      "With two beds and room to settle in together, this is a comfortable base for a shared stay.",
    image: familyRoomPhoto,
    imageAlt: "Family guest room with two beds",
    gallery: [
      {
        image: familyRoomPhoto,
        imageAlt: "Family guest room with two beds",
      },
      {
        image: familyRoomPhotoTwo,
        imageAlt: "Second view of the family guest room",
      },
    ],
  },
];
