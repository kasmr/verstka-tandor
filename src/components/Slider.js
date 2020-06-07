import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Slider = () => {
  return (
    <div className='first-screen'>
      <Carousel>
        <Carousel.Item>
          <h1 className='slider__text'>
            Бухгалтерские услуги в Санкт-Петербурге
          </h1>
          <button className='slider__button'>Наша презентация</button>
        </Carousel.Item>
        <Carousel.Item>
          <h1 className='slider__text'>
            Бухгалтерские услуги в Санкт-Петербурге
          </h1>
          <button className='slider__button'>Наша презентация</button>
        </Carousel.Item>
        <Carousel.Item>
          <h1 className='slider__text'>
            Бухгалтерские услуги в Санкт-Петербурге
          </h1>
          <button className='slider__button'>Наша презентация</button>
        </Carousel.Item>
        <Carousel.Item>
          <h1 className='slider__text'>
            Бухгалтерские услуги в Санкт-Петербурге
          </h1>
          <button className='slider__button'>Наша презентация</button>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
