import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './footer.styles.scss';

const Footer = () => {
  const today = new Date();
  return (
    <div className='container_footer'>
      <div className='iconsSoft'>
        <a href='#!'>
          <FontAwesomeIcon icon={['fab', 'html5']} size="lg" className='html'/>
        </a>
        <a href='#!'>
        <FontAwesomeIcon icon={['fab', 'css3']} size="lg" className='css'/>
         
        </a>
        <a href='#!'>
          <FontAwesomeIcon icon={['fab', 'js-square']} size="lg" className='js'/>
        </a>
        <a href='https://nodejs.org/'>
          <FontAwesomeIcon icon={['fab', 'node-js']} size="lg" className='node'/>
        </a>
        <a href='https://sass-lang.com/'>
          <FontAwesomeIcon icon={['fab', 'sass']} size="lg" className='sass'/>
        </a>
        <a href='https://reactjs.org/'>
          <FontAwesomeIcon icon={['fab', 'react']} size="lg" className='react'/>
        </a>
        <a href='https://www.docker.com/'>
          <FontAwesomeIcon icon={['fab', 'docker']} size="lg" className='docker'/>
        </a>
        <a href='https://fr.wordpress.com/'>
          <FontAwesomeIcon icon={['fab', 'wordpress']} size="lg" className='wordpress'/>
        </a>
        <a href='https://www.linux.org/'>
          <FontAwesomeIcon icon={['fab', 'linux']} size="lg" className='linux'/>
        </a>
        <a href='https://www.microsoft.com/en-us/windows'>
          <FontAwesomeIcon icon={['fab', 'windows']} size="lg" className='windows'/>
        </a>
        <a href='https://www.apple.com/'>
          <FontAwesomeIcon icon={['fab', 'apple']} size="lg" className='apple' />
        </a>
      </div>
      <div className='copyright'>
        &copy; {today.getFullYear()} IRIMAX DEVELOPEMENT . ALL RIGHTS RESERVED.
      </div>
    </div>
  );
};

export default Footer;
