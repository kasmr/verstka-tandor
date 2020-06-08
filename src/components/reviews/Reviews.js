import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import avatar from '../../assets/avatar.png';

const Reviews = () => {
  return (
    <div className='reviews'>
      <Carousel interval={null}>
        <Carousel.Item>
          <h2>Отзывы</h2>
          <h1 className='slider__text'>Ваши благодарности</h1>
          <div className='slider__body'>
            <p>
              Lorem Ipsum - это текст-"рыба", часто используемый в печати и
              вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов
              на латинице с начала XVI века. В то время некий безымянный
              печатник создал большую коллекцию размеров и форм шрифтов,
              используя Lorem Ipsum для распечатки образцов. Lorem Ipsum - это
              текст-"рыба", часто используемый в печати и вэб-дизайне.
            </p>
            <div className='slider__footer'>
              <img src={avatar} alt='' />
              <div className='slider__footer_info'>
                <h3>Екатерина Иванова</h3>
                <p>Директор ООО “Раз-два”</p>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <h2>Отзывы</h2>
          <h1 className='slider__text'>Ваши благодарности</h1>
          <div className='slider__body'>
            <p>
              Lorem Ipsum - это текст-"рыба", часто используемый в печати и
              вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов
              на латинице с начала XVI века. В то время некий безымянный
              печатник создал большую коллекцию размеров и форм шрифтов,
              используя Lorem Ipsum для распечатки образцов. Lorem Ipsum - это
              текст-"рыба", часто используемый в печати и вэб-дизайне.
            </p>
            <div className='slider__footer'>
              <img src={avatar} alt='' />
              <div className='slider__footer_info'>
                <h3>Екатерина Иванова</h3>
                <p>Директор ООО “Раз-два”</p>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <h2>Отзывы</h2>
          <h1 className='slider__text'>Ваши благодарности</h1>
          <div className='slider__body'>
            <p>
              Lorem Ipsum - это текст-"рыба", часто используемый в печати и
              вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов
              на латинице с начала XVI века. В то время некий безымянный
              печатник создал большую коллекцию размеров и форм шрифтов,
              используя Lorem Ipsum для распечатки образцов. Lorem Ipsum - это
              текст-"рыба", часто используемый в печати и вэб-дизайне.
            </p>
            <div className='slider__footer'>
              <img src={avatar} alt='' />
              <div className='slider__footer_info'>
                <h3>Екатерина Иванова</h3>
                <p>Директор ООО “Раз-два”</p>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <h2>Отзывы</h2>
          <h1 className='slider__text'>Ваши благодарности</h1>
          <div className='slider__body'>
            <p>
              Lorem Ipsum - это текст-"рыба", часто используемый в печати и
              вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов
              на латинице с начала XVI века. В то время некий безымянный
              печатник создал большую коллекцию размеров и форм шрифтов,
              используя Lorem Ipsum для распечатки образцов. Lorem Ipsum - это
              текст-"рыба", часто используемый в печати и вэб-дизайне.
            </p>
            <div className='slider__footer'>
              <img src={avatar} alt='' />
              <div className='slider__footer_info'>
                <h3>Екатерина Иванова</h3>
                <p>Директор ООО “Раз-два”</p>
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Reviews;
