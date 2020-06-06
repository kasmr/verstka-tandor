import React from 'react';
import Slider from './components/Slider';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className='App'>
      <header className='header'>
        <Navbar />
        <Slider />
      </header>
    </div>
  );
};

export default App;
