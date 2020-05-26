import React from 'react';
import Slider from 'react-slick';
import Btn from '../Button/Button.component';
import '../Slider/slider.styles.scss';

const datas = [
  {
    title: 'App & server',
    subtitle: 'Creation de sites internet',
    text:
      "Création de Site Vitrine,Création de Site sur Mesure,Création  d'application Mobile",
    btn: "Plus d'info",
    image: '../../assets/img/slide_1.jpg',
  },
  { title: 'Instalation de serveur', image: '../../assets/img/slide_2.jpg' },
];
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

const SliderComponent = ({ title, onClick, children, ...rest }) => (
  <div>
    <Slider {...settings}>
      {datas.map((data) => (
        <div key={data}>
          <div className='container-text-info'>
            <h1 className='text-info'>{data.title}</h1>
            <h3 className='text-subtitle'>{data.subtitle}</h3>
            <p className='text'>{data.text}</p>
            {data.btn ? <Btn text_btn={data.btn} /> : ''}
          </div>
          <img
            src={data.image}
            alt={title}
            onClick={onClick}
            className='img-slider'
            {...rest}
          />
        </div>
      ))}

      {children}
    </Slider>
  </div>
);

export default SliderComponent;
