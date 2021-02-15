import React, { useState } from 'react';
import { Button, Paper, Grid, Typography, Container } from '@material-ui/core';
import Input from './Input';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signup, login } from '../../actions/auth';

import useStyles from './styles';

const initState = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

function Auth() {
  const classes = useStyles();
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState(initState);
  const [showPassword, setShowPassword] = useState(false);
  const [showError, setShowError] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSignup) {
      let result = await dispatch(signup(formData, history));
      if (result === 'failed') {
        setShowError(true);
      }
    } else {
      let result = await dispatch(login(formData, history));
      if (result === 'failed') {
        setShowError(true);
      }
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const switchSignUp = () => {
    setIsSignup(!isSignup);
    setShowError(false);
    setShowPassword(false);
  };

  return (
    <Container component='main' maxWidth='xs'>
      <Paper className={classes.paper} elevation={3}>
        <Typography variant='h5'>{isSignup ? 'Sign Up' : 'Log In'}</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignup && (
              <>
                <Input
                  name='firstName'
                  label='First Name'
                  handleChange={handleChange}
                  autoFocus
                  half
                />
                <Input
                  name='lastName'
                  label='Last Name'
                  handleChange={handleChange}
                  autoFocus
                  half
                />
              </>
            )}
            <Input
              name='email'
              label='Email Address'
              handleChange={handleChange}
              type='email'
              error={showError}
              helperText={!isSignup ? 'Incorrect credentials.' : 'Email Taken.'}
            />
            <Input
              name='password'
              label='Password'
              handleChange={handleChange}
              handleShowPassword={handleShowPassword}
              type={showPassword ? 'text' : 'password'}
              error={!isSignup && showError}
              helperText={!isSignup && 'Incorrect credentials.'}
            />
            {isSignup && (
              <Input
                name='confirmPassword'
                label='Repeat Password'
                handleChange={handleChange}
                type='password'
              ></Input>
            )}
          </Grid>

          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
          >
            {isSignup ? 'Sign Up' : 'Log In'}
          </Button>
          <Grid container justify='flex-end'>
            <Grid item>
              <Button onClick={() => switchSignUp()}>
                {isSignup
                  ? 'I already have an account'
                  : "I don't have an account"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
}

export default Auth;
