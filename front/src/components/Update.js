// UpdatesSection.js
import React from 'react';
import '../styles/strength.css'; // Make sure this path matches your project structure
import event1 from '../img/event-1.jpg'; // Adjust the path to match your project's structure
import event2 from '../img/event-2.jpg';
import event3 from '../img/event-3.jpg';

const UpdatesSection = () => {
  return (
    <section className="updates padding-5">
      <h3 className="subtitle">Recent Updates</h3>
      <h2 className="section-title">Latest Blogs, News, & Announcements.</h2>
      <div className="updates-box">
        <div className="updates__item">
          <img src={event1} alt="Updates" />
          <h3 className="subtitle">Keep an eye out.</h3>
          <h2>Flavour so good you’ll try to eat with your eyes.</h2>
          <div className="tag-date">16/01/2023</div>
        </div>
        <div className="updates__item">
          <img src={event2} alt="Updates" />
          <h3 className="subtitle">Keep an eye out.</h3>
          <h2>Flavour so good you’ll try to eat with your eyes.</h2>
          <div className="tag-date">05/01/2023</div>
        </div>
        <div className="updates__item">
          <img src={event3} alt="Updates" />
          <h3 className="subtitle">Keep an eye out.</h3>
          <h2>Flavour so good you’ll try to eat with your eyes.</h2>
          <div className="tag-date">29/12/2022</div>
        </div>
      </div>
      <button className="btn" data-text="You'll love it">
        <span>View Our Blog</span>
      </button>
    </section>
  );
};

export default UpdatesSection;
