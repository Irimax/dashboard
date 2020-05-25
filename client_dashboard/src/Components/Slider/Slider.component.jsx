import React from 'react';
import Slider from 'react-slick';

import '../Slider/slider.styles.scss';

const settings = {
  arrows: false,
  dots: true,
  fade: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplaySpeed: 5000,
  autoplay: true,
  speed: 500,
  // cssEase: "linear"
};

const SliderComponent = ({ images, title, onClick, textInfos, ...rest }) => (
  <div>
    <Slider {...settings}>
      {images.map((image) => (
        <div>
          <div className='container-text-info'>
            <h1 className='text-info'>{textInfos}</h1>
          </div>
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

      {/* slide Text */}
      {/* <div className='text-info'>
          <h1>{textInfos}</h1>
        </div> */}
    </Slider>
  </div>
);

export default SliderComponent;
