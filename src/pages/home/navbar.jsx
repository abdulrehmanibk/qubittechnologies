import React from 'react';
import './navbar.css';
import imgnav from '../../image/Q-removebg-preview.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useRef } from 'react';

const Navbar = () => {

  const navbarRef = useRef(null);
  const lastScrollTop = useRef(0);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop.current) {
        // Scroll down
        if (navbarRef.current) {
          navbarRef.current.style.top = '-10rem';
        }
      } else {
        // Scroll up
        if (navbarRef.current) {
          navbarRef.current.style.top = '0rem';
        }
      }
      lastScrollTop.current = scrollTop;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
    <nav className="nav_container" id="navbar" ref={navbarRef} style={{ top: '0', transition: 'top 0.3s'}}>
      <div className="logo"><img src={imgnav} alt="" />
      <p>Qubit Technologies</p>
      </div>
    <ul>
      <a href="#home"><li>Home</li></a>
      <a href="#services"><li>Services</li></a>
      <a href="#trustedBy"><li>TrustedBy</li></a>
      <a href="#contact"><li>Contact</li></a>
    </ul>
    </nav>
    </>
  );
};

export default Navbar;