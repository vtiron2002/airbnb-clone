import React from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './Views/Home/Home';
import Search from './Views/Search/Search';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export default () => {
  return (
    <Router>
      <Header />

      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/search' component={Search} />
      </Switch>

      <Footer />
    </Router>
  );
};
