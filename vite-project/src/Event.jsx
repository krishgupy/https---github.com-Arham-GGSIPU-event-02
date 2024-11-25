import React, { useState, useEffect } from "react";
import "tailwindcss/tailwind.css";

const images = [
  { src: "/bg0.jpg", alt: "Slide 1" },
  { src: "/bg2.jpg", alt: "Slide 3" },
  { src: "/bg11.jpg", alt: "Slide 4" },
  { src: "/bg4.jpg", alt: "Slide 5" },
];

const events = [
  {
    title: "Plantation Drive",
    description:
      "Join us in making the Earth greener! Participate in planting trees and contribute to a sustainable future.",
    date: "Dec 5, 2024",
    image: "bg6.jpg",
  },
  {
    title: "Nature Walk",
    description:
      "Experience the beauty of nature! A guided walk through serene landscapes, perfect for nature enthusiasts.",
    date: "Jan 15, 2025",
    image: "bg8.jpg",
  },
  {
    title: "Eco Workshop",
    description:
      "Learn about sustainable living, recycling, and eco-friendly practices in this interactive workshop.",
    date: "Feb 10, 2025",
    image: "bg9.jpg",
  },
];

const EventPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const timer = setTimeout(goToNext, 5000);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <div
      className="min-h-screen bg-[#232E26] text-white font-poiret"
      style={{ fontFamily: "'Poiret One', cursive" }}
    >
      <div className="container mx-auto p-6">
        {/* Carousel Heading */}
        <h1 className="text-4xl font-bold text-center mb-8">Events</h1>

        {/* Carousel */}
        <div className="relative bg-[#D9EFDE] p-8 rounded-lg shadow-xl mb-12">
          {/* Slide */}
          <div
            className="w-full h-[600px] lg:h-[500px] bg-cover bg-center rounded-lg"
            style={{
              backgroundImage: `url(${images[currentIndex].src})`,
              transition: "all 0.7s ease-in-out",
            }}
          ></div>

          {/* Left Arrow */}
          <button
            onClick={goToPrevious}
            className="absolute top-1/2 transform -translate-y-1/2 left-4 bg-[#232E26] text-white rounded-full p-3 shadow-md hover:bg-gray-600 transition-all"
          >
            &#9664;
          </button>
          {/* Right Arrow */}
          <button
            onClick={goToNext}
            className="absolute top-1/2 transform -translate-y-1/2 right-4 bg-[#232E26] text-white rounded-full p-3 shadow-md hover:bg-gray-600 transition-all"
          >
            &#9654;
          </button>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-3 mt-4">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-4 h-4 rounded-full transition-all ${
                  currentIndex === index
                    ? "bg-blue-500 scale-125 shadow-lg"
                    : "bg-gray-400 hover:bg-blue-400"
                }`}
              ></button>
            ))}
          </div>
        </div>

        {/* Event Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
              style={{ height: "450px" }}
            >
              <div className="relative w-full h-full">
                {/* Image */}
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-110"
                />
                {/* Hover Text */}
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center text-center p-6">
                  <h2 className="text-3xl font-bold text-white mb-2">
                    {event.title}
                  </h2>
                  <p className="text-sm text-gray-300 mb-4">{event.description}</p>
                  <p className="text-sm font-semibold text-gray-300">
                    📅 {event.date}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventPage;
