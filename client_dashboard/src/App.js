import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
 


// Css
import './App.scss';

// Google Fonts
import 'typeface-cinzel';

// components
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import NotFound from './Components/NotFound/Notfound';

// Container
import Home from './Homepage.component';

function App() {
  library.add(fab)
  return (
    <Fragment className="container">
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </Fragment>
  );
}

export default App;
