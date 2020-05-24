import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

import './header.styles.scss';
import { ReactComponent as Logo } from '../../assets/img/logo.svg';

const Header = () => {
  return (
    <Fragment>
      <div className='container'>
        <NavLink to='/' className='logo-container'>
          <Logo className='logo' />
        </NavLink>
        <div className='menu-item'>
          <NavLink className='menu-link' to='/'>
            Home
          </NavLink>
          <NavLink
            className='menu-link'
            to='/Prestation'
            exact
            activeClassName='active'
          >
            Préstation
          </NavLink>
          <NavLink
            className='menu-link'
            to='/Portfolio'
            exact
            activeClassName='active'
          >
            Portfolio
          </NavLink>
          <NavLink
            className='menu-link'
            to='/Contact'
            exact
            activeClassName='active'
          >
            Contact
          </NavLink>
          <NavLink
            className='menu-link'
            to='/Contact'
            exact
            activeClassName='active'
          >
            About us
          </NavLink>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
