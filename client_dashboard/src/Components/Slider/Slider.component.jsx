import React from 'react';
import Slider from 'react-slick';

import '../Slider/slider.styles.scss';

const settings = {
  arrows: true,
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplaySpeed: 5000,
};

const SliderComponent = ({ images, title, onClick, ...rest }) => (
  <div>
    <Slider {...settings} autoplay >
      {images.map((image) => (
        <div>
          <img
            key={image}
            src={image}
            alt={title}
            onClick={onClick}
            className='img-slider'
            {...rest}
          />
        </div>
      ))}
    </Slider>
  </div>
);

export default SliderComponent;
