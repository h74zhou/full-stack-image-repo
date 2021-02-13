import React from 'react';
import { Container, Grow, Grid } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import Auth from './components/Auth/Auth';

const App = () => {
  return (
    <BrowserRouter>
      <Container maxidth='lg'>
        <NavBar></NavBar>
        <Switch>
          <Route path='/' exact component={Home}></Route>
          <Route path='/auth' exact component={Auth}></Route>
        </Switch>
      </Container>
    </BrowserRouter>
  );
};

export default App;
