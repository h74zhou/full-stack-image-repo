import React, { useEffect, useState } from 'react';
import { Container, Grow, Grid } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import Auth from './components/Auth/Auth';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import { useDispatch } from 'react-redux';
import { getPosts } from './actions/posts';

const theme = createMuiTheme({
  overrides: {
    MuiPaper: {
      root: {
        backgroundColor: '#3E4147',
      },
    },
  },
  palette: {
    text: {
      primary: '#FFFFFF',
    },
    primary: {
      main: '#1AAE63',
      contrastText: '#fff',
    },
    secondary: {
      main: '#C04489',
      contrastText: '#fff',
    },
  },
});

const App = () => {
  const [currentId, setcurrentId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <BrowserRouter>
      <MuiThemeProvider theme={theme}>
        <Container maxidth='lg'>
          <NavBar></NavBar>
          <Switch>
            <Route
              path='/'
              exact
              render={(props) => (
                <Home
                  {...props}
                  currentId={currentId}
                  setcurrentId={setcurrentId}
                />
              )}
            ></Route>
            <Route path='/auth' exact component={Auth}></Route>
          </Switch>
        </Container>
      </MuiThemeProvider>
    </BrowserRouter>
  );
};

export default App;
