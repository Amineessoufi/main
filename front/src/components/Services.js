import React from 'react';
import '../styles/service.css'; // Ensure you have the CSS needed for your component
import service1 from '../img/service-1.jpg'; // Import images
import service2 from '../img/service-2.jpg';
import service3 from '../img/service-3.jpg';

const Services = () => {
  return (
    <section className="services padding-2" id="chefs">
      <h3 className="subtitle">Explore Our Specials Programs.</h3>
      <h2 className="section-title">You can study 5 degrees at Elite Academy.</h2>
      <p className="paragraph">
        Unlock a world of knowledge with our diverse special programs tailored to meet your learning needs.
        Advance your academic journey; our programs are designed to provide a rich and engaging learning experience.
        Join our community of passionate learners and take the next step towards achieving your goals.
      </p>
      <div className="services-box">
        <div className="service">
          <picture>
            <img src={service1} alt="Finance & Accounting" />
          </picture>
          <h2>
            Science of Management Degree <br />
            Licence en Sciences de Gestion <br />
          </h2>
          <button>View More & Register a place</button>
        </div>
        <div className="service">
          <picture>
            <img src={service2} alt="Economics" />
          </picture>
          <h1 className="display-1 hero-title slider-reveal">
            Science of Economics Degree <br />
            Licence en Sciences Economiques <br />
          </h1>
          <button>View More & Register a place</button>
        </div>
        <div className="service">
          <picture>
            <img src={service3} alt="Education" />
          </picture>
          <h2>
            Education Program Degree <br />
            Licence en Sciences d'Education <br />
          </h2>
          <button>View More & Register a place</button>
        </div>
      </div>
    </section>
  );
};

export default Services;
