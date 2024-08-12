import React from 'react';
import './nav.css';

const NavBar = () => {
  return (
    <nav className="padding-2 over-slider">
      <img src="./img/logo.svg" width="160" height="50" alt="Grilli Logo" />
      <div className="nav__items">
        <a href="#home" className="nav-items--active">Home</a>
        <a href="#menu">Programs</a>
        <a href="#about">About Us</a>
        <a href="#chefs">Specialized Courses</a>
        <a href="#contact">Contact</a>
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
  );
};

export default NavBar;
