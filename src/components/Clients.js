import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import clients from '../assets/clients.png';

const Clients = () => {
  return (
    <div className='clients'>
      <Carousel>
        <Carousel.Item>
          <h2>Наши клиенты</h2>
          <h1 className='slider__text'>C Нами работают</h1>
          <div>
            <img src={clients} alt='' />
            <img src={clients} alt='' />
            <img src={clients} alt='' />
            <img src={clients} alt='' />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <h2>Наши клиенты</h2>
          <h1 className='slider__text'>C Нами работают</h1>
          <div>
            <img src={clients} alt='' />
            <img src={clients} alt='' />
            <img src={clients} alt='' />
            <img src={clients} alt='' />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <h2>Наши клиенты</h2>
          <h1 className='slider__text'>C Нами работают</h1>
          <div>
            <img src={clients} alt='' />
            <img src={clients} alt='' />
            <img src={clients} alt='' />
            <img src={clients} alt='' />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <h2>Наши клиенты</h2>
          <h1 className='slider__text'>C Нами работают</h1>
          <div>
            <img src={clients} alt='' />
            <img src={clients} alt='' />
            <img src={clients} alt='' />
            <img src={clients} alt='' />
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Clients;
