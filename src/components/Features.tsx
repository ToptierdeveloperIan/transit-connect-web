import React from 'react';
import {Shield, Clock, MapPin, CreditCard, Headphones, BusIcon} from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: 'Safe & Secure',
      description: 'All drivers are thoroughly vetted with background checks and real-time tracking for your safety.'
    },
    {
      icon: Clock,
      title: '24/7 Availability',
      description: 'Need a ride at any time? We\'re here for you around the clock, every day of the year.'
    },
    {
      icon: MapPin,
      title: 'Real-time Tracking',
      description: 'Track your ride in real-time and share your trip details with friends and family.'
    },
    {
      icon: CreditCard,
      title: 'Cashless Payments',
      description: 'Seamless payment experience with multiple payment options and automatic receipts.'
    },
    {
      icon: BusIcon,
      title: 'PSV matatu feature',
      description: 'Skip the queues and travel smarter with our PSV matatu feature. Enjoy cashless payments, faster boarding, and seamless rides with drivers who know the city inside out.'
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Get help whenever you need it with our dedicated customer support team.'
    }
  ];

  return (
    <section id="features" className="section-padding bg-dark">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto text-center mb-5">
            <h2 className="display-4 fw-bold mb-4">
              Why Choose <span className="text-blue-500">Nexa?</span>
            </h2>
            <p className="lead text-light opacity-75">
              We're not just another ride-hailing service. We're your trusted partner in urban mobility,
              committed to providing exceptional experiences every time you ride with us.
            </p>
          </div>
        </div>

        <div className="row g-4">
          {features.map((feature, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div className="card card-dark h-100 p-4 text-center">
                <div className="feature-icon">
                  <feature.icon size={24} color="#500" />
                </div>
                <h5 className="fw-bold mb-3 text-white">{feature.title}</h5>
                <p className="text-light opacity-75">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;