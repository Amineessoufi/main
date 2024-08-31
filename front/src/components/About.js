import React from 'react';
import '../styles/about.css'; // Ensure you have the styles needed for your component
import badge2 from '../img/badge-2.png';
import badge2Bg from '../img/badge-2-bg.png';
import aboutAbsImage from '../img/about-abs-image.jpg';

const About = () => {
  return (
    <section className="about padding-2" id="about">
      <div className="about__info">
        <h3 className="subtitle">About Us</h3>
        <h2 className="section-title">What Makes Us Different</h2>
        <p className="paragraph">
          Grilli® is based on hospitality with
        </p>
        <h3 className="highlight">Phone Registration Line</h3>
        <strong>+216 54 215 210</strong>
        <button className="btn" data-text="Read more">
          <span>Read more</span>
        </button>
      </div>
      <div className="about__image">
        <div className="badge">
          <img src={badge2} alt="Grilli Academy award badge" />
          <img src={badge2Bg} alt="Background design for award badge" />
        </div>
        <picture>
          <img src={aboutAbsImage} alt="Decorative abstract background for the about section" />
        </picture>
      </div>
    </section>
  );
};

export default About;
