import React from 'react';

import '../Button/button.styles.scss';

const ButtonComponent = ({ text_btn }) => {
  return <button className='btn'>{text_btn}</button>;
};

export default ButtonComponent;
