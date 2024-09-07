import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import Services from './components/Services';
import About from './components/About';
import Special from './components/Special';
import Menu from './components/Menu';
import Footer from './components/Footer';
import TestimonialSection from './components/Testimonial';
import ReservationSection from './components/Reservation';
import Strength from './components/Strength';
import UpdatesSection from './components/Update';
import AdminDashboard from './Admin/AdminDashboard'; // Import the admin dashboard
import './styles/style.css'; // Global styles

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          {/* Admin route */}
          <Route path="/admin" component={AdminDashboard} />
          
          {/* Main site routes */}
          <Route path="/">
            <Nav />
            <Header />
            <Services />
            <About />
            <Special />
            <Menu />
            <TestimonialSection />
            <ReservationSection />
            <Strength />
            <UpdatesSection />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
