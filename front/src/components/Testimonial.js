// TestimonialSection.js
import React from 'react';
import '../styles/testimonial.css'; // Ensure you have the styles needed for your component
import testiAvatar from '../img/testi-avatar.jpg';

const TestimonialSection = () => {
  return (
    <section className="testi padding-2" id="contact">
      <h2 className="section-title">
        <span>★★★★★</span>
        'El hak 3ejbetni el khedma barcha, kol chay mnadhem. Merci beaucoup'
      </h2>
      <div className="testi__separator">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="avatar">
        <img src={testiAvatar} alt="Customer's avatar" />
        <h3 className="subtitle">Mohamed Amine Essoufi</h3>
      </div>
    </section>
  );
};

export default TestimonialSection;
