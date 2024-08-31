import React, { useState, useEffect, useCallback } from 'react';
import '../styles/nav.css'; // Ensure you have the styles needed for your component
import heroSlider1 from '../img/hero-slider-1.jpg'; // Import images
import heroSlider2 from '../img/hero-slider-2.jpg';
import heroSlider3 from '../img/hero-slider-3.jpg';
import heroIcon from '../img/hero-icon.png'; // Import additional images

const Header = () => {
  const [currentSlidePos, setCurrentSlidePos] = useState(0);

  // Update the heroSliderItems to use imported images
  const heroSliderItems = [
    {
      imgSrc: heroSlider1,
      subtitle: "Traditional & Hygienic",
      title: "We educate leaders who make a difference in the world.",
      paragraph: "EXCELLENCE IS A MINDSET",
      buttonText: "ENGAGE AND GROW"
    },
    {
      imgSrc: heroSlider2,
      subtitle: "Delightful Experience",
      title: "Guiding leaders to create meaningful global impact.",
      paragraph: "EXCELLENCE IS A MINDSET",
      buttonText: "ENGAGE AND GROW"
    },
    {
      imgSrc: heroSlider3,
      subtitle: "Amazing & Delicious",
      title: "Equipping leaders with the tools to shape a better world.",
      paragraph: "EXCELLENCE IS A MINDSET",
      buttonText: "ENGAGE AND GROW"
    }
  ];

  const updateSlider = (index) => {
    setCurrentSlidePos(index);
  };

  const slideNext = useCallback(() => {
    const nextIndex = (currentSlidePos + 1) % heroSliderItems.length;
    updateSlider(nextIndex);
  }, [currentSlidePos, heroSliderItems.length]);

  const slidePrev = () => {
    const prevIndex = (currentSlidePos - 1 + heroSliderItems.length) % heroSliderItems.length;
    updateSlider(prevIndex);
  };

  useEffect(() => {
    const interval = setInterval(slideNext, 8000);

    return () => {
      clearInterval(interval);
    };
  }, [slideNext]); // Now slideNext is included in the dependencies array

  return (
    <>
      <header className="padding-5">
        <div className="slider-control slider-prev over-slider" onClick={slidePrev}>
          <ion-icon name="chevron-back-outline"></ion-icon>
        </div>
        <div className="slider-control slider-next over-slider" onClick={slideNext}>
          <ion-icon name="chevron-forward-outline"></ion-icon>
        </div>

        {heroSliderItems.map((item, index) => (
          <div
            key={index}
            className={`slider-item ${index === currentSlidePos ? "slider-item--active" : ""}`}
          >
            <div className="slider-bg"><img src={item.imgSrc} alt={item.subtitle} /></div>
            <h2 className="subtitle" style={{ '--delay-item': 0 }}>{item.subtitle}</h2>
            <h1 className="title" style={{ '--delay-item': 1 }}>{item.title}</h1>
            <p className="paragraph" style={{ '--delay-item': 2 }}>{item.paragraph}</p>
            <button className="btn" data-text="View Our Programs" style={{ '--delay-item': 3 }}>
              <span>{item.buttonText}</span>
            </button>
          </div>
        ))}
      </header>

      <div className="book over-slider">
        <img src={heroIcon} alt="Booking icon" />
        <p>Registry</p>
      </div>

      <div className="back-top" title="Go to top">
        <ion-icon name="caret-up-outline"></ion-icon>
      </div>
    </>
  );
};

export default Header;
