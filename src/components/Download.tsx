import React from 'react';

import {Smartphone, Download as DownloadIcon, MapPin} from 'lucide-react';
import {DollarSign} from 'lucide-react';
import { useState } from "react";





const Download: React.FC = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Frontend email validation
  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setMessage("Please enter a valid email address.");
      return;
    }

    try {
      const response = await fetch("http://127.0.0.1:8000/api/nofityemail/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("You will be notified when the app launches!");
        setEmail(""); // Clear input
      } else {
        setMessage(data.email || "Something went wrong.");
      }
    } catch (err) {
      console.error(err);
      setMessage("Network error. Please try again later.");
    }
  };
  return (
      <section id="download" className="section-padding bg-light">
        <div className="container">
          <div className="row align-items-center">

            {/* Left Column */}
            <div className="col-lg-6 mb-5 mb-lg-0">
              <h2 className="fw-bold mb-4 text-black fs-3 fs-md-2">
                <span className="text-blue-500">Nexa</span> coming soon on the App Store & Google Play
              </h2>
              <p className="lead mb-4 text-muted opacity-75 fs-6 fs-md-5">
                Get the RideFlow app on your mobile device and start enjoying premium rides today.
                Will be available for both iOS and Android devices.
              </p>

              {/* Feature Highlights */}
              <div className="row g-3 mb-4">
                {/* Easy to Use */}
                <div className="col-12 col-md-6">
                  <div className="d-flex align-items-start justify-content-start p-3 h-100 border rounded-3 shadow-sm" >
                    <div className="feature-icon me-3 d-flex align-items-center justify-content-center flex-shrink-0"
                         style={{width: '40px', height: '40px', marginLeft:"0"}}>
                      <Smartphone size={18} color="#000"/>
                    </div>
                    <div className="d-flex flex-column justify-content-start">
                      <h6 className="fw-bold mb-1 text-blue-500">Easy to Use</h6>
                      <p className="text-muted small mb-0">Intuitive interface designed for everyone</p>
                    </div>
                  </div>
                </div>

                {/* Quick Setup */}
                <div className="col-12 col-md-6">
                  <div className="d-flex align-items-start p-3 h-100 border rounded-3 shadow-sm">
                    <div className="feature-icon me-3 d-flex align-items-center justify-content-center flex-shrink-0"
                         style={{width: '40px', height: '40px', marginLeft:"0"}}>
                      <DownloadIcon size={18} color="#000"/>
                    </div>
                    <div className="d-flex flex-column justify-content-center">
                      <h6 className="fw-bold mb-1 text-blue-500">Quick Setup</h6>
                      <p className="text-muted small mb-0">Get started in less than 2 minutes</p>
                    </div>
                  </div>
                </div>

                {/* Secure Payments */}
                <div className="col-12 col-md-6">
                  <div className="d-flex align-items-start p-3 h-100 border rounded-3 shadow-sm">
                    <div className="feature-icon me-3 d-flex align-items-start justify-content-center flex-shrink-0"
                         style={{width: '40px', height: '40px', marginLeft:"0"}}>
                       {/* Replaced placeholder with lock icon */}
                      <DollarSign style={{marginTop:"9px"}} size={18} color="#000"/>
                    </div>
                    <div className="d-flex flex-column justify-content-center">
                      <h6 className="fw-bold mb-1 text-blue-500">Secure Payments</h6>
                      <p className="text-muted small mb-0">All rides are cashless &amp; safe</p>
                    </div>
                  </div>
                </div>

                {/* Real-Time Tracking */}
                <div className="col-12 col-md-6">
                  <div className="d-flex align-items-start p-3 h-100 border rounded-3 shadow-sm">
                    <div className="feature-icon me-3 d-flex align-items-center justify-content-center flex-shrink-0"
                         style={{width: '40px', height: '40px', marginLeft:"0"}}>
                      <MapPin size={18} color="#000" />
                    </div>
                    <div className="d-flex flex-column justify-content-center">
                      <h6 className="fw-bold mb-1 text-blue-500">Real-Time Tracking</h6>
                      <p className="text-muted small mb-0">See your driver’s location live</p>
                    </div>
                  </div>
                </div>
              </div>


              {/* Social Proof */}
              <div className="mb-4 text-center text-md-start">
                <p className="small text-blue-500 mb-2">Delivering Excellence, One Ride at a Time</p>
                <div className="d-flex justify-content-center justify-content-md-start gap-1">
                  <img src="https://img.icons8.com/color/32/000000/star--v1.png" alt="star"/>
                  <img src="https://img.icons8.com/color/32/000000/star--v1.png" alt="star"/>
                  <img src="https://img.icons8.com/color/32/000000/star--v1.png" alt="star"/>
                  <img src="https://img.icons8.com/color/32/000000/star--v1.png" alt="star"/>
                  <img src="https://img.icons8.com/color/32/000000/star--v1.png" alt="star"/>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="d-flex flex-column flex-md-row gap-3 mb-4">
                <a href="#" className="btn btn-dark btn-lg w-100 w-md-auto px-4 py-3 border border-gold"
                   onClick={() => alert("Coming Soon!")}>
                  <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                       alt="Download on App Store" style={{height: '40px'}}/>
                </a>
                <a href="#" className="btn btn-dark btn-lg w-100 w-md-auto px-4 py-3 border border-gold"
                   onClick={() => alert("Coming Soon!")}>
                  <img src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                       alt="Get it on Google Play" style={{height: '40px'}}/>
                </a>
              </div>

              {/* Optional Email Signup */}
              <p className="small text-muted">Sign up to be notified when the app launches:</p>
            <form
              className="d-flex flex-column flex-md-row gap-2"
              onSubmit={handleSubmit}
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="btn btn-blue">
                Notify Me
              </button>
            </form>

            {message && <p className="mt-2 text-success">{message}</p>}
            </div>

            {/* Right Column */}
            <div className="col-lg-6 text-center">
              <div className="position-relative mx-auto" style={{maxWidth: '350px'}}>
                <img
                    src="https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Mobile App Screenshots"
                    className="img-fluid rounded-4 shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>


  );
};

export default Download;