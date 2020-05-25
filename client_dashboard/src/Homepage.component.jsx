import React from 'react';
import Slider from './Components/Slider/Slider.component';
import './homepage.styles.scss';

const HomePage = () => {
  return (
    <div className='background-img'>
      <Slider
        images={[
          'assets/img/slide_1.jpg',
          'assets/img/slide_2.jpg',
        ]}
      />
    </div>
  );
};

export default HomePage;
