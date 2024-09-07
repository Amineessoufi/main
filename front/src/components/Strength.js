import React from 'react';
import '../styles/strength.css'; // Ensure you have the styles needed for your component
import featuresIcon1 from '../img/features-icon-1.png';
import featuresIcon2 from '../img/features-icon-2.png';
import featuresIcon3 from '../img/features-icon-3.png';
import featuresIcon4 from '../img/features-icon-4.png';

const Strength = () => {
  return (
    <section className="strength padding-2">
      <h3 className="subtitle">Why Choose Us</h3>
      <h2 className="section-title">Elite Academy in Numbers</h2>
      <div className="strength-box">
        <div className="strength__item">
          <img src={featuresIcon1} alt="6720 Videos" />
          <h2>6720 Videos</h2>
          <p>Over 6720 high-quality videos to enhance your learning experience.</p>
        </div>
        <div className="strength__item">
          <img src={featuresIcon2} alt="2760 Students" />
          <h2>2760 Students</h2>
          <p>Join a community of over 2760 students excelling in their studies.</p>
        </div>
        <div className="strength__item">
          <img src={featuresIcon3} alt="24 Live per Month" />
          <h2>24 Live per Month</h2>
          <p>Enjoy over 24 live sessions per month for interactive learning experiences.</p>
        </div>
        <div className="strength__item">
          <img src={featuresIcon4} alt="29 Professors" />
          <h2>+29 Professors</h2>
          <p>Learn from a team of over 29 expert professors.</p>
        </div>
      </div>
    </section>
  );
};

export default Strength;
