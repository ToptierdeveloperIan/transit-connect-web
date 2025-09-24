import React, { useState, useEffect } from 'react';
import { Car } from 'lucide-react';
import { useFormModal } from './FormContext.tsx';

const Navbar: React.FC = () => {
  const { setShowForm } = useFormModal();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navbarHeight = 68.2;

  const handle = () => setIsOpen(prev => !prev);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determine navbar background & link colors
  const navbarBg = isOpen || isScrolled ? 'bg-white shadow-md' : 'bg-transparent';
  const linkColor = isOpen || isScrolled ? 'text-black' : 'text-white';

  return (

    <nav
      className={`navbar navbar-expand-lg fixed-top transition-all duration-300 ${navbarBg}`}
      style={{ height: `${navbarHeight}px` }}
    >
      <div className="container relative" >

        {/* Logo */}
        <a className={`navbar-brand d-flex align-items-center ${linkColor}` } style={{marginTop:"10px"}} href="#home">
          <div className="feature-icon me-2" style={{ width: '40px', height: '40px' }}>
            <Car size={20} color={isOpen || isScrolled ? '#000' : '#fff'}  />
          </div>
          <span className="fw-bold fs-4" style={{marginTop:"-25px"}}>Nexa</span>
        </a>

        {/* Desktop Nav */}
        <div className="navbarNav d-none d-lg-block" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item" >
              <a className={`nav-link ${linkColor}`} href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${linkColor}`} href="/Aboutus">About us</a>
            </li>
            <li className="nav-item ms-2">
              <a className="btn btn-gold px-4" onClick={() => setShowForm((prev) => !prev)}>Sign up to get early access</a>
            </li>
          </ul>
        </div>

        {/* Mobile Hamburger */}
        <div className="d-lg-none absolute right-4 top-1/2 transform -translate-y-1/2 z-50">
          <button onClick={handle} className="border-0 position-relative " style={{top:"-10px"}}>
            {isOpen ? (
              <span className="fs-3 font-bold text-black ">&times;</span>
            ) : (
              <div className="hamburger flex flex-col justify-between" style={{ height: '18px' }}>
                <span className="block w-6 h-[2px] bg-black"></span>
                <span className="block w-6 h-[2px] bg-black"></span>
                <span className="block w-6 h-[2px] bg-black"></span>
              </div>
            )}
          </button>
        </div>

        {/* Mobile Slide-down Menu */}
        <div
          className={`fixed left-0 w-full bg-white z-40 overflow-hidden transition-all duration-500`}
          style={{
            top: `${navbarHeight}px`,
            height: isOpen ? '50vh' : '0',
          }}
        >
          <div className="flex flex-col items-center justify-center h-full space-y-6 pt-4">
            <a className="btn btn-gold px-4 text-black" href="/" onClick={handle}>Home</a>
            <a className="btn btn-gold px-4 text-black" href="/Aboutus" onClick={handle}>About us</a>
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
