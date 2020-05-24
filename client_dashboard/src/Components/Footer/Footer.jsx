import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './footer.styles.scss';

const Footer = () => {
  const today = new Date();
  return (
    <div className='container_footer'>
      <div className='iconsSoft'>
        <a href='#!'>
          <FontAwesomeIcon icon={['fab', 'html5']} size="1x" />
        </a>
        <a href='#!'>
        <FontAwesomeIcon icon={['fab', 'css3']} size="1x" />
         
        </a>
        <a href='#!'>
          <FontAwesomeIcon icon={['fab', 'js-square']} size="1x" />
        </a>
        <a href='https://nodejs.org/'>
          <FontAwesomeIcon icon={['fab', 'node-js']} size="1x" />
        </a>
        <a href='https://sass-lang.com/'>
          <FontAwesomeIcon icon={['fab', 'sass']} size="1x" />
        </a>
        <a href='https://reactjs.org/'>
          <FontAwesomeIcon icon={['fab', 'react']} size="1x" />
        </a>
        <a href='https://www.docker.com/'>
          <FontAwesomeIcon icon={['fab', 'docker']} size="1x" />
        </a>
        <a href='https://fr.wordpress.com/'>
          <FontAwesomeIcon icon={['fab', 'wordpress']} size="1x" />
        </a>
        <a href='https://www.linux.org/'>
          <FontAwesomeIcon icon={['fab', 'linux']} size="1x" />
        </a>
        <a href='https://www.microsoft.com/en-us/windows'>
          <FontAwesomeIcon icon={['fab', 'windows']} size="1x" />
        </a>
        <a href='https://www.apple.com/'>
          <FontAwesomeIcon icon={['fab', 'apple']} size="1x"  />
        </a>
      </div>
      <div className='copyright'>
        &copy; {today.getFullYear()} IRIMAX DEVELOPEMENT . ALL RIGHTS RESERVED.
      </div>
    </div>
  );
};

export default Footer;
