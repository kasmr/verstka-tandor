import React from 'react';
import phone from '../../assets/phone_white.png';
import mail from '../../assets/mail_white.png';

const Contact = () => {
  return (
    <div className='contact'>
      <div className='contact__container'>
        <div className='contact__info'>
          <h1>Связь с нами</h1>
          <p>
            У вас остались вопросы? Напишите нам - мы ответим в ближайшее время!
          </p>
          <div className='contact__info_icons'>
            <a href='#something'>
              <img src={phone} alt='' />
              +7 (111) 222-33-44
            </a>
            <a href='#something'>
              <img src={mail} alt='' />
              order@bu-one.ru
            </a>
          </div>
        </div>
        <div className='contact__form'>
          <form action='#'>
            <div className='form__group'>
              <fieldset>
                <label htmlFor='name'>Имя</label>
                <input type='text' placeholder='Иван' />
              </fieldset>
              <fieldset>
                <label htmlFor='lastName'>Фамилия</label>
                <input type='text' placeholder='Иванов' />
              </fieldset>
            </div>
            <div className='form__texarea'>
              <label htmlFor=''>Сообщение</label>
              <textarea placeholder='Ваше сообщение'></textarea>
            </div>
            <button className='button'>Отправить сообщение</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
