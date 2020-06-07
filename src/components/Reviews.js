import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import avatar from '../assets/avatar.png';

const Reviews = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <h2>Наши клиенты</h2>
          <h1 className='slider__text'>C нами работают</h1>
          <div className='slider__body'>
            <img src={avatar} alt='' />
            <img src={avatar} alt='' />
            <img src={avatar} alt='' />
            <img src={avatar} alt='' />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <h2>Наши клиенты</h2>
          <h1 className='slider__text'>C нами работают</h1>
          <div className='slider__body'>
            <img src={avatar} alt='' />
            <img src={avatar} alt='' />
            <img src={avatar} alt='' />
            <img src={avatar} alt='' />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <h2>Наши клиенты</h2>
          <h1 className='slider__text'>C нами работают</h1>
          <div className='slider__body'>
            <img src={avatar} alt='' />
            <img src={avatar} alt='' />
            <img src={avatar} alt='' />
            <img src={avatar} alt='' />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <h2>Наши клиенты</h2>
          <h1 className='slider__text'>C нами работают</h1>
          <div className='slider__body'>
            <img src={avatar} alt='' />
            <img src={avatar} alt='' />
            <img src={avatar} alt='' />
            <img src={avatar} alt='' />
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Reviews;
