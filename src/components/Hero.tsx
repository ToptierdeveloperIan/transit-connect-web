import React, { useState } from 'react';
import { Play } from 'lucide-react';
import Carousel from "./Carousel";

const Hero: React.FC = () => {
  const [showCarousel, setShowCarousel] = useState(false);

  return (
    <section id="home" className="hero-gradient section-padding">
      <div className="container">
        <div className="row align-items-center min-vh-100">
          <div className="col-lg-6 fade-in">

            <h1 className="display-2 fw-bold mb-4">
              Your Premium
              <span className="text-blue-500 d-block">Ride Experience</span>
            </h1>

            <p className="lead mb-5 text-white">
              <span className="highlight-item">No More Queues. Just Seamless Rides.</span>
              Skip the wait, ride smarter, and get home faster with Nexa — the first platform that brings matatu and cab hailing together in one app. Cashless, convenient, and built for the modern commuter.
            </p>

            <div className="d-flex flex-wrap gap-3 mb-5">
              <button className="btn btn-outline-light btn-lg px-5 py-3" onClick={() => setShowCarousel(true)}>
                <Play className="me-2" size={20} />
                Watch Demo
              </button>
            </div>

          </div>

          <div className="col-lg-6 text-center">
            <div className="position-relative">
              <div className="position-absolute top-50 start-50 translate-middle"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel modal */}
      {showCarousel && <Carousel onClose={() => setShowCarousel(false)} />}

    </section>
  );
};

export default Hero;
