import React from 'react';
import logo from '../assets/logo.png';
import phone from '../assets/phone.png';
import mail from '../assets/mail.png';
import geo from '../assets/geo.png';
import clock from '../assets/clock.png';

const Navbar = () => {
  return (
    <div className='container'>
      <h1 href='#something' className='header__logo'>
        <img src={logo} alt='logo' /> BuhOne
      </h1>
      <nav className='header__nav nav'>
        <ul className='nav__social-list'>
          <li className='social__item'>
            <img src={phone} alt='' className='social_image' />
            <p>8 (111) 222-33-44</p>
          </li>
          <li className='social__item'>
            <img src={clock} alt='' className='social_image' />
            <p>Пн-Пт 10:00-18:00</p>
          </li>
          <li className='social__item'>
            <img src={mail} alt='' className='social_image' />
            <p>order@buhone.ru</p>
          </li>
          <li className='social__item'>
            <img src={geo} alt='' className='social_image' />
            <p>Невский пр. 130</p>
          </li>
        </ul>
        <ul className='nav__link-list'>
          <li className='nav__item'>
            <a href='#something' className='nav__link'>
              Главная
            </a>
          </li>
          <li className='nav__item'>
            <a href='#something' className='nav__link'>
              Услуги
            </a>
          </li>
          <li className='nav__item'>
            <a href='#something' className='nav__link'>
              Кейсы
            </a>
          </li>
          <li className='nav__item'>
            <a href='#something' className='nav__link'>
              О компании
            </a>
          </li>
          <li className='nav__item'>
            <a href='#something' className='nav__link'>
              Контакты
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
