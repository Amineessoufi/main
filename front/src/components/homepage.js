import React from 'react';
import { ChevronBackOutline, ChevronForwardOutline, CloseCircleOutline, CaretUpOutline } from 'react-ionicons';
import { Link } from 'react-router-dom';
import './css/header.css';
import './css/nav.css';

function HomePage() {
  return (
    <div className="container" id="home">
      {/* PRELOAD */}
      <div className="preload">
        <div className="preload-circle"></div>
        <p>Elite Academy</p>
      </div>

      <div className="primary-screen">
        {/* TOPBAR */}
        <div className="topbar padding-2 over-slider">
          {/* Topbar content */}
        </div>

        {/* NAV */}
        <nav className="padding-2 over-slider">
          <img src="./img/logo.svg" width="160" height="50" alt="Grilli Logo" />
          <div className="nav__items">
            <Link to="#home" className="nav-items--active">Home</Link>
            <Link to="#menu">Programs</Link>
            <Link to="#about">About Us</Link>
            <Link to="#chefs">Specialized Courses</Link>
            <Link to="#contact">Contact</Link>
          </div>
          {/* Other nav content */}
        </nav>

        {/* ASIDE (RESPONSIVE) */}
        <aside>
          <div className="aside-close">
            <CloseCircleOutline />
          </div>
          {/* Other aside content */}
        </aside>
        <div className="aside-overlay"></div>

        {/* HEADER */}
        <header className="padding-5">
          <div className="slider-control slider-prev over-slider">
            <ChevronBackOutline />
          </div>
          <div className="slider-control slider-next over-slider">
            <ChevronForwardOutline />
          </div>

          <div className="slider-item">
            <div className="slider-bg">
              <img src="./img/hero-slider-1.jpg" alt="Hero slider 1" />
            </div>
            <h2 className="subtitle" reveal style={{ "--delay-item": "0" }}>
              Traditional & Hygiene
            </h2>
            <h1 className="title" reveal style={{ "--delay-item": "1" }}>
              We educate leaders who make a difference in the world.
            </h1>
            <p className="paragraph" reveal style={{ "--delay-item": "2" }}>
              EXCELLENCE IS A MINDSET
            </p>
            <button className="btn" data-text="View Our Programs" reveal style={{ "--delay-item": "3" }}>
              <span>ENGAGE AND GROW</span>
            </button>
          </div>
          {/* Repeat similar structure for other slider items */}
        </header>

        {/* Additional content like SERVICES, ABOUT, SPECIAL DISH, MENU, TESTIMONIALS, RESERVATION goes here */}

        <div className="back-top" title="Go to top">
          <CaretUpOutline />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
