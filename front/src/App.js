import React from 'react';
import Navbar from './components/NavBar';
import HomePage from './components/homepage';
import Topbar from './components/Topbar';
import Header from './components/Header';
import Services from './components/Services';
import About from './components/About';
import SpecialDish from './components/SpecialDish';
import Menu from './components/Menu';
import Testimonials from './components/Testimonials';
import Reservation from './components/Reservation';
import Footer from './components/Footer';
import Preload from './components/Preload';
import Aside from './components/Aside';


function App() {
  return (
    <div className="container" id="home">
    <div className="primary-screen">

        <Navbar />
        <HomePage/>
       
      </div>
    </div>
  );
}

export default App;
