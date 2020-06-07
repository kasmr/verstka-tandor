import React from 'react';
import Slider from './components/Slider';
import Navbar from './components/Navbar';
import Services from './components/Services';
import About from './components/About';
import Clients from './components/Clients';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className='App'>
      <header className='header'>
        <Navbar />
        <Slider />
      </header>
      <Services />
      <About />
      <Clients />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
