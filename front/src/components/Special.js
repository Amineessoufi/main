import React from 'react';
import '../styles/special.css'; // Ensure you have the styles needed for your component
import specialDishBanner from '../img/special-dish-banner.jpg';
import badge1 from '../img/badge-1.png';

const Special = () => {
  return (
    <section className="special-dish">
      <div className="special__image">
        <img src={specialDishBanner} alt="Special Offer banner" />
      </div>
      <div className="special__info">
        <img src={badge1} alt="Special Offer badge" />
        <h2 className="subtitle">Special Offer</h2>
        <h1 className="section-title">Finance Degree Program</h1>
        <p className="paragraph">
          This is another dish that will amaze you from the first bite. We present the Lobster Tortellini that integrates the most special and unique flavors of the house. We elaborate a versatile dish with a subtle yet aesthetic innovation.
        </p>
        <div className="price">
          <span>40.00 Dinars/month</span>
          <span>20.00 Dinars/month</span>
        </div>
        <button className="btn" data-text="Engage And Grow">
          <span>Join the journey</span>
        </button>
      </div>
    </section>
  );
};

export default Special;
