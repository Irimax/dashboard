import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../Button/button.styles.scss';
import history from '../../history';

const ButtonComponent = ({ text_btn, linkUrlclick }) => {
  return (
    <Link className='btn' to={linkUrlclick}>
      {text_btn}
      <FontAwesomeIcon
        icon={['fad', 'angle-double-right']}
        color='lightblue'
        size='lg'
        className='info'
      />
    </Link>
  );
};

export default ButtonComponent;
