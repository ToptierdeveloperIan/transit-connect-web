import React from 'react';
import { Car, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import TermsOfService from "./TermsOfService.tsx";
import PrivacyPolicy from "./PrivacyPolicy.tsx";

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark border-top border-gold">
      <div className="container">
        <div className="row py-5">
          <div className="col-lg-4 mb-4">
            <div className="d-flex align-items-start mb-3">
              <div className="feature-icon me-2" style={{ width: '40px', height: '40px',position:'relative', marginLeft:"0px" }}>
                <Car size={20} color="#000" />
              </div>
              <p className="fw-bold fs-4 ml-2">Nexa</p>
            </div>
            <p className="text-light opacity-75 mb-4">
              Your premium ride-hailing service. Safe, reliable, and convenient transportation 
              solutions for the modern world.
            </p>
            {/* Footer -- Social Media Links */}
            <div className="d-flex gap-3">
              <a href="#" className="btn btn-outline-gold btn-sm">
                <Facebook size={16} />
              </a>
              <a href="#" className="btn btn-outline-gold btn-sm">
                <Twitter size={16} />
              </a>
              <a href="#" className="btn btn-outline-gold btn-sm">
                <Instagram size={16} />
              </a>
              <a href="#" className="btn btn-outline-gold btn-sm">
                <Linkedin size={16} />
              </a>
            </div>
          </div>

          {/* Footer -- Support */}
          <div className="col-lg-4 mb-4">
            <h6 className="fw-bold text-gold mb-3">Contact Info</h6>
            <div className="d-flex align-items-center mb-2">
              <Mail size={16} className="text-gold me-2" />
              <span className="text-light opacity-75">Nexasupport@nexakenya.co.ke</span>
            </div>

            <div className="d-flex align-items-center mb-3">
              <MapPin size={16} className="text-gold me-2" />
              <span className="text-light opacity-75">Acacia,Kajiado</span>
            </div>
            <a href="#contact" className="btn btn-gold">Get in Touch</a>
          </div>
        </div>

        {/* Footer -- Data Protection*/}
        <div className="border-top border-gold pt-4 pb-4">
          <div className="row align-items-center">
            <div className="col-md-6">
              <p className="text-light opacity-75 mb-0">
                © 2025 Nexa. All rights reserved.
              </p>
            </div>
            <div className="col-md-6 text-md-end d-flex justify-content-end gap-3" >
              <PrivacyPolicy></PrivacyPolicy>  <TermsOfService></TermsOfService>

            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;