import React from 'react';
import '../styles/footer.css'; // Assuming you have a separate CSS file for styling

const Footer = () => {
  return (
    <footer>
      <div className="footer__links">
        <a href="#home">Home</a>
        <a href="#menu">Programs</a>
        <a href="#about">About us</a>
        <a href="#chefs">Specialized Courses</a>
        <a href="#contact">Contact</a>
      </div>
      <div className="getInToch padding-2">
        <img src="./img/logo.svg" alt="Grilli Logo" />
        <p className="text">Elite Academy, Delicious City, Gafsa 9578, TN</p>
        <a href="mailto:booking@grilli.com" className="text">booking@grilli.com</a>
        <a href="tel:+88123123456" className="text">Booking Request : +88-123-123456</a>
        <p className="text">Open : 09:00 am - 01:00 pm</p>
        <div className="footer-separator">
          <span></span><span></span><span></span>
        </div>
        <h2 className="section-title">Get News & Offers</h2>
        <h3>Subscribe us & Get <span>25% Off.</span></h3>
        <div className="subscribe">
          <ion-icon name="mail-outline"></ion-icon>
          <input type="email" inputMode="email" placeholder="Your email" maxLength="70" />
          <button className="btn btn-secondary" data-text="Appreciated!">
            <span>Subscribe</span>
          </button>
        </div>
      </div>
      <div className="footer__links">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">Youtube</a>
        <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer">Google Maps</a>
      </div>
      <p className="credits">
        © 2023 Elite Academy. All Rights Reserved ~{' '}
        <a href="https://github.com/iannellotomas" target="_blank" rel="noopener noreferrer">
          Mohamed Amine Essoufi
        </a>
      </p>
    </footer>
  );
};

export default Footer;
