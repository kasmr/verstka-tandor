import React from 'react';

const About = () => {
  return (
    <div className='about'>
      <div className='about__left-block'>
        <h2>О нас</h2>
        <h1>
          Компания <span>ИвановПром</span>
        </h1>
        <p>
          Lorem Ipsum - это текст-"рыба", часто используемый в печати и
          вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на
          латинице с начала XVI века. В то время некий безымянный печатник
          создал большую коллекцию размеров и форм шрифтов, используя Lorem
          Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил
          без заметных изменений пять веков, но и перешагнул в электронный
          дизайн.
        </p>
      </div>
      <div className='about__right-block'>
        <div className='about__item'>
          <h1>90</h1>
          <p>Завершено крупных сделок</p>
          <a href=''>Все кейсы</a>
        </div>
        <div className='about__item'>
          <h1>90</h1>
          <p>Завершено крупных сделок</p>
          <a href=''>Все кейсы</a>
        </div>
        <div className='about__item'>
          <h1>90</h1>
          <p>Завершено крупных сделок</p>
          <a href=''>Все кейсы</a>
        </div>
        <div className='about__item'>
          <h1>90</h1>
          <p>Завершено крупных сделок</p>
          <a href=''>Все кейсы</a>
        </div>
      </div>
    </div>
  );
};

export default About;
