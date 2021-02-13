import React from 'react';
import { AppBar, Typography, Toolbar, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

import useStyles from './styles';

const NavBar = () => {
  const classes = useStyles();
  const user = null;

  return (
    <AppBar className={classes.appBar} position='static' color='inherit'>
      <div className={classes.brandContainer}>
        <Typography
          component={Link}
          to='/'
          className={classes.heading}
          variant='h2'
          align='center'
        >
          Full Stack Image Repo
        </Typography>
      </div>
      <Toolbar className={classes.toolbar}>
        {user ? (
          <div className={classes.profile}>
            <Typography className={classes.userName} variant='h6'>
              {user.result.name}
            </Typography>
            <Button
              variant='contained'
              className={classes.logout}
              color='secondary'
            >
              Log Out
            </Button>
          </div>
        ) : (
          <Button
            component={Link}
            to='/auth'
            variant='contained'
            color='primary'
          >
            Log In
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
