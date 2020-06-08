import React from 'react';
import Slider from './components/slider/Slider';
import Navbar from './components/navbar/Navbar';
import Services from './components/services/Services';
import About from './components/about/About';
import Clients from './components/clients/Clients';
import Reviews from './components/reviews/Reviews';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

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
