import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fal } from '@fortawesome/pro-light-svg-icons';
import { fad } from '@fortawesome/pro-duotone-svg-icons';

// Css
import './App.scss';

// Css React-Slick
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Google Fonts
import 'typeface-cinzel';

// components
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import NotFound from './Components/NotFound/Notfound';

// Container
import Home from './Homepage.component';
import Contact from './Container/Contact/Contact';

function App() {
  library.add(fab, fal,fad);
  return (
    <div className='container'>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/contact' component={Contact} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
