import React from 'react';
import { AppBar, Typography } from '@material-ui/core';

import useStyles from './styles';

const NavBar = () => {
  const classes = useStyles();

  return (
    <AppBar className={classes.appBar} position='static' color='inherit'>
      <Typography className={classes.heading} variant='h2' align='center'>
        Full Stack Image Repo
      </Typography>
    </AppBar>
  );
};

export default NavBar;
