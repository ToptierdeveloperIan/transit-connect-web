import { useState, useEffect } from "react";
import carouselImage2 from '/images/carouselimage2.jpg';
import openappimage from '/images/openingappimage.jpg'
import requestride from '/images/requestride.jpg'
import busimage from '/images/bus.jpg'
interface CarouselProps {
  onClose: () => void; // callback to close the carousel
}

const Carousel: React.FC<CarouselProps> = ({ onClose }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Storytelling slides
  const slides = [
    {
      id: 1,
      img: carouselImage2,
      title: "The Daily Struggle",
      description:
        "Passengers waste hours queuing for PSVs every evening during peak hours. Save your back, skip the lines, and reach home to your kids faster. With Nexa, you can ride stress-free, reclaim your time, and enjoy a smoother commute every day."
    },
    {
      id: 2,
      img: openappimage,
      title: "Step 1: Open the App",
      description: "Launch the app on your phone."
    },
    {
      id: 3,
      img: requestride,
      title: "Step 2: Request a Ride",
      description: "Choose your route and see available rides instantly."
    },
    {
      id: 4,
      img: busimage,
      title: "Step 3: Enjoy the Ride",
      description: "Skip the queue and ride stress-free."
    }
  ];

  // Autoplay
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  // Navigation handlers
  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
      <div className="relative w-full max-w-4xl overflow-hidden rounded-xl shadow-lg bg-gray-900 text-white">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-white text-2xl font-bold hover:text-yellow-500"
        >
          ×
        </button>

        {/* Slide */}
        <div
          className="w-full h-[28rem] flex flex-col items-center justify-center transition-all duration-700"
          key={slides[activeIndex].id}
        >
          <img
            src={slides[activeIndex].img}
            alt={slides[activeIndex].title}
            className="w-full h-64 object-cover"
          />
          <div className="p-6 text-center bg-gray-800 w-full">
            <h2 className="text-2xl font-bold">{slides[activeIndex].title}</h2>
            <p className="text-gray-300 mt-2">{slides[activeIndex].description}</p>
          </div>
        </div>

        {/* Controls */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/50 px-3 py-2 rounded-full hover:bg-black/70"
        >
          ◀
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/50 px-3 py-2 rounded-full hover:bg-black/70"
        >
          ▶
        </button>

        {/* Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, i) => (
            <span
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                activeIndex === i ? "bg-yellow-500" : "bg-gray-500"
              }`}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
