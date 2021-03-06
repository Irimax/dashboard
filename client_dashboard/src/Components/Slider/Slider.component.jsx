import React from 'react';
import Slider from 'react-slick';
import Btn from '../Button/Button.component';

import '../Slider/slider.styles.scss';

import datas from '../../_data/slide.json';

const settings = {
  arrows: false,
  dots: false,
  fade: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplaySpeed: 5000,
  autoplay: true,
  speed: 500,
  // cssEase: "linear"
};

const SliderComponent = () => (
  <div>
    <Slider {...settings}>
      {datas.map((data) => (
        <div key={data}>
          <div className='container-text-info'>
            <h1 className='text-info'>{data.title}</h1>
            <h3 className='text-subtitle'>{data.subtitle}</h3>
            <p className='text'>{data.text}</p>

            <div className='btn_text'>
              {data.btn ? (
                <Btn text_btn={data.btn} linkUrlclick={data.url} />
              ) : (
                ''
              )}
              
            </div>
          </div>
          <div className='over'>
          <img src={data.image} alt={data.title} className='img-slider' />
          </div>
        </div>
      ))}
    </Slider>
    {/* <Btn className='btn_text'text_btn='test' /> */}
  </div>
);

export default SliderComponent;
