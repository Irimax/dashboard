import React, { Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'

// Css
import './App.scss'

// Google Fonts
import 'typeface-cinzel'

// components
import NotFound from './Components/NotFound/Notfound'

// Container
import Home from './Homepage.component'

function App() {
  return (
    <Fragment>
      {/* <Header /> */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
      {/* <Footer /> */}
    </Fragment>
  )
}

export default App;
