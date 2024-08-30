// src/components/Header.jsx
import React, { useEffect } from 'react';
import '../styles/nav.css'; // Ensure the CSS file is imported
import logo from '../img/logo.svg'; // Adjust path as needed


const Header = () => {
  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector('nav');
      const backTop = document.querySelector('.back-top');

      if (window.scrollY >= 200) {
        nav.classList.add('scrolled');
        backTop.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
        backTop.classList.remove('scrolled');
      }
    };

    const handleLoad = () => {
      const preload = document.querySelector('.preload');

      setTimeout(() => {
        preload.classList.add('loaded');
        document.body.classList.add('loaded');
      }, 100);

      // setTimeout(() => {
      //   // Assuming heroSliderItems and autoSlide are defined elsewhere
      //   const heroSliderItems = document.querySelectorAll('.hero-slider-item');
      //   if (heroSliderItems.length > 0) {
      //     heroSliderItems[0].classList.add('slider-item--active');
      //     autoSlide(); // Make sure autoSlide function is defined somewhere
      //   }
      // }, 200);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <>
      <div className="container" id="home">
        {/* PRELOAD */}
        <div className="preload">
          <div className="preload-circle"></div>
          <p>Elite Academy</p>
        </div>

        <div className="primary-screen">
          {/* TOPBAR */}
          <div className="topbar padding-2 over-slider">
            <div className="topbar-section">
              <div className="topbar__item">
                <ion-icon name="location-outline"></ion-icon>
                <p>Elite Academy</p>
              </div>
              <div className="separator"></div>
              <div className="topbar__item">
                <ion-icon name="time-outline"></ion-icon>
                <p>Daily: 8.00 am to 10.00 pm</p>
              </div>
            </div>
            <div className="topbar-section">
              <div className="topbar__item">
                <ion-icon name="call-outline"></ion-icon>
                <p>+126 54 215 210</p>
              </div>
              <div className="separator"></div>
              <div className="topbar__item">
                <ion-icon name="mail-outline"></ion-icon>
                <p>booking@Academy.com</p>
              </div>
            </div>
          </div>
          <nav className="header">
          <img src={logo} width="160" height="50" alt="Grilli Logo" />
          <div className="nav-items">
              <a href="home" className="nav-item active">Home</a>
              <a href="menu" className="nav-item">Programs</a>
              <a href="about" className="nav-item">About Us</a>
              <a href="chefs" className="nav-item">Specialized Courses</a>
              <a href="contact" className="nav-item">Contact</a>
            </div>
            <div className="nav-right">
              <button className="btn btn-secondary" data-text="For the first time!">
                <span>Sign up Free</span>
              </button>
              <button className="btn btn-secondary" data-text="I have an account">
                <span>Log in</span>
              </button>
              <div className="aside-open">
                <span></span><span></span><span></span>
              </div>
            </div>
          </nav>
          <button className="back-top" onClick={() => window.scrollTo(0, 0)}>Back to Top</button>
        </div>
      </div>
    </>
  );
};

export default Header;
