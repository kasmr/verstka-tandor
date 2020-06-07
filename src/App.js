import React from 'react';
import Slider from './components/Slider';
import Navbar from './components/Navbar';
import Services from './components/Services';
import About from './components/About';
import Clients from './components/Clients';
import Reviews from './components/Reviews';

const App = () => {
  return (
    <div className='App'>
      <header className='header'>
        <Navbar />
        <Slider />
      </header>
      <div className='container__body'>
        <Services />
        <About />
        <Clients />
        <Reviews />
      </div>
    </div>
  );
};

export default App;
