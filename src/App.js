import React from 'react';
import Slider from './components/Slider';
import Navbar from './components/Navbar';
import Services from './components/Services';

const App = () => {
  return (
    <div className='App'>
      <header className='header'>
        <Navbar />
        <Slider />
      </header>
      <div className='container__body'>
        <Services />
      </div>
    </div>
  );
};

export default App;
