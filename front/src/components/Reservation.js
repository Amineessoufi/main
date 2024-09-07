// ReservationSection.js
import React, { useEffect } from 'react';
import '../styles/testimonial.css'; // Ensure you have the styles needed for your component

const ReservationSection = () => {
  useEffect(() => {
    // JavaScript code to set the date input to the current date and set the min attribute
    const inputDate = document.getElementById('reservation-date');
    const now = new Date();
    const currentTime = now.toISOString().substring(0, 10);
    inputDate.value = currentTime;
    inputDate.setAttribute('min', currentTime);
  }, []);

  return (
    <div className="container-reservation padding-2">
      <section className="reservation">
        <form>
          <h2 className="section-title">Online registration</h2>
          <p className="paragraph">
            Phone Reservation Line <a href="tel:+216 54215210">+216 54 215 210</a>
          </p>
          <div className="inputs">
            <div>
              <input
                className="input-field"
                type="text"
                placeholder="Your full Name"
                autoComplete="off"
                required
              />
              <input
                className="input-field"
                type="tel"
                placeholder="Phone Number"
                autoComplete="off"
                inputMode="numeric"
                required
              />
            </div>
            <div>
              <span>
                <ion-icon name="person-outline"></ion-icon>
                <select name="person" className="input-field" required>
                  <option value="1-Person">1st year Economics</option>
                  <option value="2-Person">2nd year Economics</option>
                  <option value="3-Person">3rd year Economics</option>
                  <option value="4-Person">1st year Management</option>
                  <option value="5-Person">2nd year Management</option>
                  <option value="6-Person">2nd year Accounting</option>
                  <option value="7-Person">3rd year Accounting</option>
                  <option value="8-Person">3rd year Management</option>
                  <option value="9-Person">3rd year Finance</option>
                  <option value="10-Person">3rd year Marketing</option>
                  <option value="11-Person">3rd year Human Resources</option>
                </select>
                <ion-icon name="chevron-down-outline"></ion-icon>
              </span>
              <input className="input-field" id="reservation-date" type="date" />
              <span>
                <ion-icon name="time-outline"></ion-icon>
                <select name="hour" className="input-field" required>
                  <option value="Tounes 1">Tounes 1</option>
                  <option value="Tounes 2">Tounes 2</option>
                  <option value="Ariana">Ariana</option>
                  <option value="Mannouba">Mannouba</option>
                  <option value="Ben Arous">Ben Arous</option>
                  <option value="Nabeul">Nabeul</option>
                  <option value="Bizerte">Bizerte</option>
                  <option value="Sousse">Sousse</option>
                  <option value="Zaghouen">Zaghouen</option>
                  <option value="Monastir">Monastir</option>
                  <option value="Mahdia">Mahdia</option>
                  <option value="Sfax 1">Sfax 1</option>
                  <option value="Sfax 2">Sfax 2</option>
                  <option value="Touzer">Touzer</option>
                  <option value="Gbelli">Gbelli</option>
                  <option value="Tataouine">Tataouine</option>
                  <option value="Gabes">Gabes</option>
                  <option value="Sidi Bouzid">Sidi Bouzid</option>
                  <option value="El Gassrin">El Gassrin</option>
                  <option value="Siliana">Siliana</option>
                  <option value="El Kef">El Kef</option>
                  <option value="Jandouba">Jandouba</option>
                  <option value="Beja">Beja</option>
                  <option value="Kairouan">Kairouan</option>
                  <option value="Gafsa">Gafsa</option>
                </select>
                <ion-icon name="chevron-down-outline"></ion-icon>
              </span>
            </div>
            <input type="password" className="input-field" placeholder="Password" />
            <input type="password" className="input-field" placeholder="Confirmation Password" />
          </div>
          <button className="btn btn-secondary" data-text="Registry">
            <span>Join The Journey</span>
          </button>
        </form>

        <div className="reservation-right">
          <h2 className="section-title">Contact Us</h2>
          <h3 className="highlight">Elite Academy</h3>
          <strong>+215-54215210</strong>
          <div className="separator"></div>
          <h3>Location</h3>
          <p>Elite Academy, Delicious City, Gafsa 9578, TN</p>
          <h3>Lunch Time</h3>
          <p>Monday to Sunday 8.00 am - 19.00pm</p>
          <h3>Dinner Time</h3>
          <p>Monday to Sunday 9.00 pm - 17.00pm</p>
        </div>
      </section>
    </div>
  );
};

export default ReservationSection;
