import React from 'react';
import Header from './components/Header';
 import Nav from './components/Nav';
 import Services from './components/Services';
  import About from './components/About';
import Special from './components/Special';
  import Menu from './components/Menu';
  import Footer from './components/Footer';
// import Slider from './components/Slider';
 import './styles/style.css'; // If you have global styles

function App() {
  return (
    <div className="App">
     <Nav />
       <Header />
      {/* <Slider /> */}
      <Services />
      <About />
      <Special /> 
      <Menu />
      <Footer /> 
    </div>
  );
}

export default App;
