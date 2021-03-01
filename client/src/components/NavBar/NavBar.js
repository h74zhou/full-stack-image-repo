import React, { useState, useEffect } from 'react';
import { AppBar, Typography, Toolbar, Button } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import { useDispatch } from 'react-redux';
import { Link, useHistory, useLocation } from 'react-router-dom';
import decode from 'jwt-decode';
import Form from '../Form/Form';

import useStyles from './styles';

const NavBar = ({ currentId, setcurrentId }) => {
  const classes = useStyles();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const logout = () => {
    dispatch({ type: 'LOGOUT' });
    history.push('/');
    setUser(null);
  };

  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) {
        logout();
      }
    }

    // Check Json web token

    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);

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
          Image Repo
        </Typography>
      </div>
      <Toolbar className={classes.toolbar}>
        {user ? (
          <div className={classes.profile}>
            <Typography className={classes.userName} variant='h6'>
              Logged in as: {user.result.name}
            </Typography>
            <Button
              variant='contained'
              onClick={handleOpenModal}
              color='primary'
            >
              Submit
            </Button>
            <Modal
              open={openModal}
              onClose={handleCloseModal}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Form currentId={currentId} setcurrentId={setcurrentId} />
            </Modal>
            <Button
              variant='contained'
              className={classes.logout}
              onClick={logout}
              color='secondary'
            >
              Log Out
            </Button>
          </div>
        ) : (
          <Button
            className={classes.login}
            component={Link}
            to='/auth'
            color='primary'
            variant='contained'
          >
            Log In
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
