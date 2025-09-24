import React, {useState} from "react";
import {Cross, DollarSignIcon, X, CloudLightning} from "lucide-react";
import queueImage from '/images/queue.jpg';
import queueImage2 from '/images/queue2.jpg';
import queueImage3 from '/images/queue3.jpg';
import { useFormModal } from './FormContext.tsx';
import Carousel from "./Carousel";



const AboutUs: React.FC = () => {
    const { setShowForm } = useFormModal();
    const [showCarousel, setShowCarousel] = useState(false);
    return (
        <>
            <section className="hero-section">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-8 mx-auto text-center hero-content">
                            <h1 className="display-4 fw-bold mb-4">Revolutionizing Urban Mobility</h1>
                            <p className="lead mb-4">We're building the future of ride-hailing with cutting-edge
                                technology, sustainable practices, and a commitment to connecting communities.</p>
                            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
                                <button className="btn btn-light btn-lg" onClick={() => setShowForm((prev) => !prev)}>
                                    <i className="fas fa-rocket me-2" ></i> Join the Waitlist
                                </button>
                                <button className="btn btn-outline-light btn-lg" onClick={() => setShowCarousel(true)}>
                                    <i className="fas fa-play me-2"></i>Watch Demo
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 mx-auto text-center">
                            <h2 className="section-title">Our Mission</h2>
                            <p className="section-subtitle">To create seamless, safe, and sustainable transportation
                                solutions that bring people together and reduce urban congestion.Our mission is to
                                transform urban travel by making every ride seamless, cashless, and convenient — whether
                                on demand or on schedule — while empowering drivers to earn more through a flexible
                                hybrid of subscriptions and commission-based pricing</p>
                        </div>
                    </div>
                    <div className="row g-4">
                        <div className="col-md-4">
                            <div className="feature-card">
                                <div className="feature-icon">
                                    <i className="Cross"><Cross></Cross></i>
                                </div>
                                <h4 className="fw-bold mb-3">Safety First</h4>
                                <p className="text-muted">Advanced safety features including real-time tracking, driver
                                    verification, Accident Insurance and 24/7 support to ensure every ride is
                                    secure.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="feature-card">
                                <div className="feature-icon">
                                    <i className="fas fa-leaf"><CloudLightning></CloudLightning></i>
                                </div>
                                <h4 className="fw-bold mb-3">Seamless Ride booking</h4>
                                <p className="text-muted">  We leverage cutting-edge technology to eliminate friction between wanting a ride and being picked up With our integrated WhatsApp feature, you can check availability, reserve rides, and access 24/7 support—
  all without needing to download an app.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="feature-card">
                                <div className="feature-icon">
                                    <i className="fas fa-users"><DollarSignIcon></DollarSignIcon></i>
                                </div>
                                <h4 className="fw-bold mb-3">Community Driven</h4>
                                <p className="text-muted">Building stronger communities by supporting local drivers with
                                    fair compensation while giving Riders frictionless,enjoyable,discounted
                                    experiences.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-5 custom-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 mx-auto text-center mb-5">
                            <h2 className="section-title">Ride Smarter, Skip the Queues — Matatu Travel, Reimagined</h2>
                            <p className="section-subtitle">Are you tired of waiting in queues after a long day at work? Worry no more Nexa is here. Skip the queue and get home in time with our one of a kind feature.
                               </p>
                        </div>
                    </div>
                    <div className="row g-4">
                        <div className="col-md-5 col-lg-5 col-sm-4">
                            <div className="card queue">
                                <div className="overlay-x">
                                    <X size={80} color="red"/>
                                </div>
                                <div className="conatiner images">
                                    <img className="queue1" src={queueImage} alt="queue"/>
                                    <img className="queue2" src={queueImage2} alt="queue"/>
                                    <img className="queue3" src={queueImage3} alt="queue"/>
                                </div>
                            </div>
                        </div>
                        <div className="container pick-up" style={{marginTop:"10px",marginBottom:"10px"}}><p className="text-black" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: '700'}}>SKIP THE QUEUE, SAVE YOUR TIME, SAVE YOUR BACK.</p></div>
                        <div className="col-md-7 col-lg-7 col-sm-7">
                            <div className="container matfeatureabt">
                                <div className="feature-highlights text-black">

                                    <div className="highlight-item mb-4">
                                        <h5 className="fw-bold">Transparent Prcing</h5>
                                        <p>
                                            Enjoy hassle-free PSV rides with guaranteed comfort and fast boarding - Just 10ksh Extra per trip
                                        </p>
                                    </div>



                                    <div className="highlight-item mb-4">
                                        <h5 className="fw-bold">Cashless Payments for Easy, Contactless Boarding</h5>
                                        <p>
                                            Riders can conveniently pay for their fares using an in app wallet, making
                                            transactions fast, secure, and cashless.
                                        </p>
                                    </div>

                                    <div className="highlight-item mb-4">
                                        <h5 className="fw-bold">On-Demand or Scheduled Rides with Real-Time Updates</h5>
                                        <p>
                                            Choose rides instantly when you need them or schedule ahead for your daily
                                            commute.
                                            Real-time GPS tracking keeps you informed about matatu arrivals and delays.
                                        </p>
                                    </div>


                                    <div className="highlight-item mb-4">
                                        <h5 className="fw-bold">Queue Reduction and Faster Boarding for Busy
                                            Commuters</h5>
                                        <p>
                                            Our smart booking system prioritizes riders, organizes pick-ups efficiently,
                                            and minimizes waiting times,
                                            so commuters can skip long lines and get home faster.
                                        </p>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <section className="stats-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 mx-auto text-center mb-5">
                            <h2 className="section-title">Our Vision in Numbers</h2>
                            <p className="section-subtitle">Projected impact for our first year of operation</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6 col-md-3">
                            <div className="stat-card">
                                <span className="stat-number">2k+</span>
                                <span className="stat-label">Registered Users</span>
                            </div>
                        </div>
                        <div className="col-6 col-md-3">
                            <div className="stat-card">
                                <span className="stat-number">500+</span>
                                <span className="stat-label">PSV Rides Completed</span>
                            </div>
                        </div>
                        <div className="col-6 col-md-3">
                            <div className="stat-card">
                                <span className="stat-number">5K+</span>
                                <span className="stat-label">Active Drivers</span>
                            </div>
                        </div>
                        <div className="col-6 col-md-3">
                            <div className="stat-card">
                                <span className="stat-number">1,000+</span>
                                <span className="stat-label">Private Car rides</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 mx-auto text-center mb-5">
                            <h2 className="section-title">Our Journey</h2>
                            <p className="section-subtitle">From concept to launch - here's how we're building the
                                future</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-8 mx-auto">
                            <div className="timeline">
                                <div className="timeline-item">
                                    <h5 className="fw-bold text-primary">Q1 2025 - Idea & Concept</h5>
                                    <p className="mb-0">
                                        The idea was conceived and initial planning began. Market research and concept
                                        validation completed.
                                    </p>
                                </div>
                                <div className="timeline-item">
                                    <h5 className="fw-bold text-primary">Q2 2025 - Building Phase</h5>
                                    <p className="mb-0">
                                        First and second rounds of development. Core platform features implemented,
                                        driver systems designed, and initial testing started.
                                    </p>
                                </div>
                                <div className="timeline-item">
                                    <h5 className="fw-bold text-primary">Q3 2025 - Testing & Iteration</h5>
                                    <p className="mb-0">
                                        Third round of testing and user feedback integration. Platform optimized, beta
                                        users onboarded, and driver training enhanced.
                                    </p>
                                </div>
                                <div className="timeline-item">
                                    <h5 className="fw-bold text-primary">Q4 2025 - Launch</h5>
                                    <h6 className="mb-0">
                                        Public launch of the platform. Marketing campaigns rolled out and partnerships
                                        with the community established.
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 mx-auto text-center">
                            <h2 className="section-title">Ready to Ride with Us?</h2>
                            <p className="section-subtitle">Be among the first to experience the future of urban
                                transportation</p>
                            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
                                <button className="btn btn-primary btn-lg">
                                    <i className="fas fa-mobile-alt me-2"></i>Download App
                                </button>
                                <button className="btn btn-outline-primary btn-lg">
                                    <i className="fas fa-car me-2"></i>Become a Driver
                                </button>
                            </div>
                        </div>
                        {/* Carousel modal */}
      {showCarousel && <Carousel onClose={() => setShowCarousel(false)} />}
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutUs;