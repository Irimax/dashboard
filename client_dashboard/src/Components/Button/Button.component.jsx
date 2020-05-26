import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../Button/button.styles.scss';

const ButtonComponent = ({ text_btn, linkUrlclick }) => {
  return (
    <Link  to={linkUrlclick}>
        <button className='btn'>
      {text_btn}
      <FontAwesomeIcon
        icon={['fad', 'angle-double-right']}
        color='rgb(24, 163, 255);'
        size='lg'
        className='info'
      />
      </button>
    </Link>
  );
};

export default ButtonComponent;
