import React from 'react';
import '../styles/menu.css'; // Ensure the CSS file is imported
import shape5 from '../img/shape-5.png';
import shape6 from '../img/shape-6.png';

// Menu data
const menu = [
  {
    dish: 'Program Finance degree',
    tag: '',
    price: '25.50 Dinars',
    description: 'Tomatoes, green bell pepper, sliced cucumber onion, olives, and feta cheese.',
  },
  {
    dish: 'Program Finance degree',
    tag: '',
    price: '10.00 Dinars',
    description: 'Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices.',
  },
  {
    dish: 'Program Management',
    tag: '',
    price: '32.00 Dinars',
    description: 'Typesetting industry lorem Lorem Ipsum is simply dummy text of the priand.',
  },
  {
    dish: 'Program Marketing',
    tag: 'New',
    price: '40.00 Dinars',
    description: 'Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices.',
  },
  {
    dish: 'Program Economics',
    tag: '',
    price: '29.50 Dinars',
    description: 'Avocados with crab meat, red onion, crab salad stuffed red bell pepper and green bell pepper.',
  },
  {
    dish: 'Program Accounting',
    tag: '',
    price: '45.00 Dinars',
    description: 'Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices.',
  },
];

const Menu = () => {
  return (
    <section className="menu padding-2" id="menu">
      <h3 className="subtitle over-slider">Special Selection</h3>
      <h2 className="section-title over-slider">Our Online Programs</h2>
      <div className="menu-box over-slider">
        {menu.map((item, index) => (
          <div key={index} className="menu-item" title={item.dish}>
            <img src={`./img/menu-${index + 1}.png`} alt={item.dish} />
            <div className="menu__info">
              <div className="menu__info-top">
                <h2>{item.dish}</h2>
                {item.tag && <div className="tag">{item.tag}</div>}
                <h3>{item.price}</h3>
              </div>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="winter over-slider">
        **During winter daily from <b>7:00 pm</b> to <b>17:00 pm</b>
      </p>
      <button className="btn over-slider" data-text="View All Offer">
        <span>View All Offer</span>
      </button>
      <img src={shape5} width="921" height="1036" loading="lazy" alt="shape" className="shape shape-2" />
      <img src={shape6} width="700" height="800" loading="lazy" alt="shape" className="shape shape-3" />
    </section>
  );
};

export default Menu;
